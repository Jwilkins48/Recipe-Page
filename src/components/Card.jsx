import React from 'react'
import { Link } from 'react-router-dom'

function Card({recipe, theme}) {
  let calories = recipe.recipe.calories
  return (
    <div style={theme.main} className='card'>

      {/* IMAGE / RECIPE INFO */}
      <div className='ingredientsContainer'>
        <img style={theme.cardImage} alt='recipe images' src={recipe.recipe.image} />
        <div className='ingredients'>
          <ul>
            {recipe.recipe.ingredients.map(ingredient => (
              <li className='ingredientList'>{ingredient.text}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* NAME / MORE INFO */}
      <div className='cardInfoContainer'>

        <div className='cardInfo'>
          <h1>{recipe.recipe.label}</h1>
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
