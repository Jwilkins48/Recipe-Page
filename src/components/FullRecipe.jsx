import React from 'react';
import { Link, useParams, useLocation  } from 'react-router-dom'

function FullRecipe({}) {
  const params = useParams();
  const location = useLocation();
  const data = location.state?.data;

  console.log(data);
  console.log(params);

  return (
    <div>
        {data && (
        <div>
          <h3>{params.name}</h3>
          <p>From: {data.recipe.ingredientLines}</p>
          <p>From: {data.recipe.calories}</p>
          <img alt='recipe' src={data.recipe.image} />
        </div>
      )}

        <Link to='/'>Home</Link>
    </div>
  )
}

export default FullRecipe
