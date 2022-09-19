import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function FullRecipe({recipes}) {

    const [activeRecipe, setActiveRecipe] = useState([])

  return (
    <div>
        recipe<br/>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default FullRecipe
