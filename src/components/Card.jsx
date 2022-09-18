import React from 'react'

function Card({recipe}) {
  return (
    <div className='card'>
      <img className='cardImages' alt='recipe images' src={recipe.recipe.image} />
      <p className='recipeInfo'>{recipe.recipe.label}</p>

      {/* On-click route page to new */}
      <button>See Full Recipe</button>
    </div> 
  )
}

export default Card
