import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
class SearchBar extends React.Component {
  handleClick = ({ target: { value } }) => {
    this.props.onClick(value)
  }

  render() {
    return (
      <header role="banner">
        <input placeholder="Search..." type="search" />
        <button onClick={this.handleClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </header>
    )
  }
}

export default SearchBar
