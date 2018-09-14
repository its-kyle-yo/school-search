import React, { Component } from 'react'
import { getSchoolByName } from './helpers'

import SearchBar from './components/SearchBar'
import Loading from './components/Loading'
import SchoolSet from './components/SchoolSet'

import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

// Styles
import styles from './css/app.css' // This uses CSS modules.
import './css/firebaseui-styling.global.css' // Import globally.

// Get the Firebase config from the auto generated file.
const firebaseConfig = require('./firebase-config.json')

// Instantiate a Firebase app.
const firebaseApp = firebase.initializeApp(firebaseConfig)
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchData: null,
      loading: false,
      isSignedIn: undefined,
    }
  }

  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  }

  search = name => {
    this.setState({ loading: true }, () => {
      getSchoolByName({ name }).then(data => {
        this.setState({ loading: false, searchData: data })
      })
    })
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebaseApp
      .auth()
      .onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
      })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    if (this.state.isSignedIn === undefined || !this.state.isSignedIn) {
      return (
        <div>
          <StyledFirebaseAuth
            className={styles.firebaseUi}
            uiConfig={this.uiConfig}
            firebaseAuth={firebaseApp.auth()}
          />
        </div>
      )
    }
    return (
      <React.Fragment>
        <SearchBar
          onClick={this.search}
          signout={() => firebaseApp.auth().signOut()}
        />
        {!this.state.loading ? (
          this.state.searchData ? (
            <SchoolSet data={this.state.searchData.data} />
          ) : null
        ) : (
          <Loading />
        )}
      </React.Fragment>
    )
  }
}

export default App
