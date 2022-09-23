import React from 'react';
import { Link, useParams, useLocation  } from 'react-router-dom'

function FullRecipe({}) {
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
          <h3>{params.name}</h3>
          <p>Recipe: {data.recipe.ingredientLines}</p>
          <p>{calories.toFixed()} Calories</p>
          <img alt='recipe' src={data.recipe.image} />
        </div>
      )}

        <Link to='/'>Home</Link>
    </div>
  )
}

export default FullRecipe
