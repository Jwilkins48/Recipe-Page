import React from 'react';
import { Link, useParams, useLocation  } from 'react-router-dom'

function FullRecipe() {
  const params = useParams();
  const location = useLocation();
  const data = location.state?.data;

  let calories = data.recipe.calories
  console.log(data);
  console.log(params);

  return (
    <div>
        {data && (
        <div>
          <h3 className='recipe-name'>{params.name}</h3>
          <img alt='recipe' src={data.recipe.image} />
          <ul>
            {data.recipe.ingredients.map(ingredient => (
              <li className='ingredientList'>{ingredient.text}</li>
            ))}
          </ul>
          <p>{calories.toFixed()} Calories</p>
        </div>
      )}

        <Link to='/'>Home</Link>
    </div>
  )
}

export default FullRecipe
