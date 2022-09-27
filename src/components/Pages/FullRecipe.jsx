import React from 'react';
import { Link, useParams, useLocation  } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import '../css/fullRecipe.css'


function FullRecipe() {
  const params = useParams();
  const location = useLocation();
  const data = location.state?.data;

  let calories = data.recipe.calories
  console.log(data);
  console.log(params);

  return (
    <div className='full-container'>
        {data && (
        <div className='inner-container'>
          <div className="left-side">
            <h1 className='recipe-name'>{params.name}</h1>
            <img className='recipe-img' alt='recipe' src={data.recipe.image} />
            <p>{calories.toFixed()} Calories</p>
            <p >{data.recipe.yield} Servings</p>
          </div>


          <hr className='hr' />
          <div className="right-side">
            <div className="recipe-container">
              <ul className='list-container'>
                {data.recipe.ingredients.map(ingredient => (
                  <li key={uuidv4()} className='ingredient-list'>{ingredient.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

        <Link className='home-link' to='/'>Return Home</Link>
    </div>
  )
}

export default FullRecipe
