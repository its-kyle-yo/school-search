import React, { Component } from 'react'
import { getSchoolByName } from './helpers'

import SearchBar from './components/SearchBar'
import Loading from './components/Loading'
import SchoolSet from './components/SchoolSet'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchData: null,
      loading: false,
      loggedIn: false,
    }
  }

  search = name => {
    this.setState({ loading: true }, () => {
      getSchoolByName({ name }).then(data => {
        this.setState({ loading: false, searchData: data })
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar onClick={this.search} />
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
