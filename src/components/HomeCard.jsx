import React from 'react'
import { Link, useParams, useLocation  } from 'react-router-dom'


function HomeCard({random}) {
  return (
      <div className='home-card'>
        <img className='random-recipe-img' alt='recipe' src={random.recipe.image} />
          <h1 className='home-recipe'>{random.recipe.label}</h1>
          <p className='home-recipe'>{random.recipe.mealType}</p>
          <p className='home-recipe'>{random.recipe.yield} Servings</p>
        </div>
  )
}

export default HomeCard
