import React from 'react'
import '../css/home.css'

function Home({search, recipes}) {
  return (
    <div id='homeScreen'>
      <div className="home-message-container">
        <h1 className='home-heading'>Looking for something new?</h1>
        <hr className='home-hr' />
      </div>
    </div>
  )
}

export default Home
