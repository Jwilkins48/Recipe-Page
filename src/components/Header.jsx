import React from 'react'

function Header({search, setSearch, handleSubmit}) {
  return (
    <nav className="navContainer">
        {/* Search  */}
        <form className="searchForm" onSubmit={handleSubmit}>
          <input className="searchInput" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter Recipe" type='text'/>
          <input className="submitSearchBtn btn" type='submit' value='Search'/>
        </form>
      </nav>
  )
}

export default Header
