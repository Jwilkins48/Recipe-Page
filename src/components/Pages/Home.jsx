import React, { useEffect, useState } from 'react'
import Axios from "axios";
import '../css/home.css'
import {v4 as uuidv4} from 'uuid'
import HomeCard from '../HomeCard';
import Category from '../Category';
import { Link, useParams, useLocation  } from 'react-router-dom'
import Card from '../Card';


function Home({search}) {

  const url = 'https://api.edamam.com/search?q=chicken&app_id=1f947df2&app_key=bf2f0ead683c3918124966e995be981c&from=0&to=3&calories=591-722&random=true'

  const [randomRecipe, setRandomRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(url);
      setRandomRecipe(res.data.hits);
      console.log(res.data.hits);
    };
  
    fetchData();
  }, []);

  return (
    <div id='homeScreen'>
      <div className="home-message-container">
        <h1 className='home-heading'>Looking for something new?</h1>
        <Category />
        <hr className='home-hr' />

        <div className="home-recipe-display">
          {randomRecipe.map((random) => {
            //  <Link to={'/recipe/' + random.recipe.label} key={uuidv4()}>
            return <div className='home-card'><Card search={search} recipe={random}/></div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
