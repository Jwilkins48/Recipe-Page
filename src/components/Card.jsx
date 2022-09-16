import React from 'react'

function Card({recipe}) {
  return (
    <div className='card'>
      <img className='cardImages' alt='recipe images' src={recipe['recipe']['image']} />
      <p className='recipeInfo'>{recipe['recipe']['label']}</p>
    </div>
  )
}

export default Card
