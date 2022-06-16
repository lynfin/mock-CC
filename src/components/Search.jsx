import React from 'react'

function Search({onUpdateSearch}) {
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={(e) => onUpdateSearch(e.target.value)}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search