import React from 'react'
import PropTypes from 'prop-types'
import search from '../images/search.svg'
import clear from '../images/close.svg'

export const Search = (props) => (
    <div>
        <form className="search-field" onSubmit={props.handleSubmit}>
        <img src={search} className="search-icon" alt='search'></img>
        <input type="text"
            onChange={props.handleInputChange}
            value={props.query}/>
        <img src={clear} className="clear-icon" alt='clear'></img>
        </form>
        
    </div>)
  
  Search.propTypes = {
      query: PropTypes.string.isRequired,
      handleInputChange: PropTypes.func.isRequired,
      handleSubmit: PropTypes.func.isRequired
    }