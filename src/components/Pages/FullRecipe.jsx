import React, {useEffect, useState} from 'react';
import { Link, useParams, useLocation  } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import '../css/fullRecipe.css'
import Axios from "axios";

function FullRecipe() {
  const params = useParams();
  // const [details, setDetails] = useState();

  const API_KEY = 'bf2f0ead683c3918124966e995be981c';
  const APP_ID = '1f947df2'
  const location = useLocation();
  const data = location.state?.data;

  // async function fetchDetails(){
  //   let res = await Axios.get(`https://api.edamam.com/api/recipes/v2/1?type=public&app_id=1f947df2&app_key=bf2f0ead683c3918124966e995be981c`)
  //   setDetails(res.data.hits)
  //   console.log(res.data.hits);
  // }

  let calories = data.recipe.calories
  console.log(data);
  console.log(params);

  return (
    // <div>hi {details.recipe.label}</div>
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
