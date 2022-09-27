import React, { useEffect, useState } from 'react'
import Axios from "axios";
import '../css/home.css'
import {v4 as uuidv4} from 'uuid'
import HomeCard from '../HomeCard';

function Home({search, recipes}) {

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
        <hr className='home-hr' />

        <div className="cuisine-type-container">

        </div>

        <div className="home-recipe-display">
          {randomRecipe.map((random) => {
            return <div className='home-card'><HomeCard search={search} key={uuidv4()} random={random}/></div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
