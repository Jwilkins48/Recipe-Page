import React from 'react'
import { Link } from 'react-router-dom'
import FullRecipe from './FullRecipe'

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
        <button to='/recipe' className='fullRecipeBtn btn'>
          <Link to={{ pathname: `/recipe/${recipe.recipe.label}`,
                      state: {recipe: recipe.recipe.label}
              }}>See Full Recipe
          </Link>
        </button>

      </div>
    </div> 
  )
}

export default Card
