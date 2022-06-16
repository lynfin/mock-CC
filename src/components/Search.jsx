import React from 'react'

function Search({onUpdateSearch, searchTerm}) {
  
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          value={searchTerm}
          onChange={(e) => onUpdateSearch(e.target.value)}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search