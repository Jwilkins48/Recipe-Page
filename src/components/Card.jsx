import React from 'react'
import { Link } from 'react-router-dom'

function Card({recipe}) {
  let calories = recipe.recipe.calories
  return (
    <div className='card'>

      {/* IMAGE / RECIPE INFO */}
      <div className='ingredientsContainer'>
        <img className='cardImages' alt='recipe images' src={recipe.recipe.image} />
        <div className='ingredients'>{recipe.recipe.ingredientLines}</div>
      </div>

      {/* NAME / MORE INFO */}
      <div className='cardInfoContainer'>

        <div className='cardInfo'>
          <h1 className='recipeInfo'>{recipe.recipe.label}</h1>
          <p className='recipeInfo'>{calories.toFixed()} cal</p>
          <p className='recipeInfo'>{recipe.recipe.mealType}</p>
          <p className='recipeInfo'>{recipe.recipe.yield} Servings</p>
        </div>

        {/* DIRECT TO FULL RECIPE PATH */}
        <button className='fullRecipeBtn btn'> 
          <Link to={`/recipe/${recipe.recipe.label}`} state={{data: recipe}}>Full Recipe</Link>
        </button>

      </div>


    </div> 
  )
}

export default Card
