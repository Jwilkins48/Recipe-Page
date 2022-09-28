import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from "axios";
import {v4 as uuidv4} from 'uuid'

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    
    const API_KEY = 'bf2f0ead683c3918124966e995be981c';
    const APP_ID = '1f947df2'

    // https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=3&cuisineType=${name}
    const getCuisine = async (name) => {
        let res = await Axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${API_KEY}&cuisineType=${name}`)
        setCuisine(res.data.hits);
        console.log(res.data.hits);
    }

    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type);
    }, [params.type]);

  return (
    <div>
      {cuisine.map((item) => {
        return (
            <div key={uuidv4()}>
                <img src={item.recipe.image} alt='cuisine' />
                <h3>{item.recipe.label}</h3>
            </div>
        ) 
      })}
    </div>
  )
}

export default Cuisine
