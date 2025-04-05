import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    // e.preventDefault stops the page from reloading which
    // is default form submission
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input type="text"
            id='search'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            // on a change, set search to new value
            onChange={(e) => setSearch(e.target.value)} 
        />
    </form>
  )
}

export default Search