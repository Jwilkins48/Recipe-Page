import React from 'react'
import {Link} from 'react-router-dom';

function Header({search, setSearch, handleSubmit}) {

  return (
    <nav className="navContainer">
        {/* Search  */}
        <form className="searchForm" type='submit' onSubmit={handleSubmit}>
          <input className="searchInput" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter Recipe" type='text'/>
          <input className="searchLink btn" type='submit' value='Search'/>


        </form>

        <div className='headerRight'>
          <Link to='/'><i class="fa-solid fa-seedling logo"></i></Link> 
        </div>

      </nav>
  )
}

export default Header
