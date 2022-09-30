import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from "axios";
import {v4 as uuidv4} from 'uuid'
import Card from '../Card';

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

    const cuisineTheme = {
      main: {
        backgroundColor: '#ffe4ae',
        width: '75%',
        margin: '15px auto',
        padding: '20px',
        display: 'flex'
      },
      cardInfoContainer: {
        justifyContent: 'space-around',
        height: 'auto',
        cursor: 'default',
        margin: '0 15px',
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'flex-start',
      },
      cardImage: {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '6px',
      },
    };

  return (
    <div className='cuisine-container'>
      {cuisine.map((recipe) => {
        return <Card theme={cuisineTheme} key={uuidv4()} recipe={recipe}/>
      })}
    </div>
  )
}

export default Cuisine
