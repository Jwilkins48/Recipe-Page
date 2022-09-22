import React from 'react'
import { Link } from 'react-router-dom'

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
        <button className='fullRecipeBtn btn'> 
          <Link to={`/recipe/${recipe.recipe.label}`} state={{data: recipe}}>Full Recipe</Link>
        </button>

      </div>
    </div> 
  )
}

export default Card
