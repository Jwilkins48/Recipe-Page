import React from 'react'

function Card({recipe}) {
  let calories = recipe.recipe.calories
  return (
    <div className='card'>
      <div className='ingredientsContainer'>
        <img className='cardImages' alt='recipe images' src={recipe.recipe.image} />
        <div className='ingredients'>{recipe.recipe.ingredientLines}</div>

      </div>
      <div className='cardInfoContainer'>
        <div className='cardInfo'>
          <p className='recipeInfo'>{recipe.recipe.label}</p>
          <p className='recipeInfo'>{calories.toFixed()} cal</p>
        </div>

        {/* On-click route page to new */}
        <button onClick={() => window.open(recipe.recipe.url)} className='fullRecipeBtn btn'>See Full Recipe</button>
      </div>
    </div> 
  )
}

export default Card
