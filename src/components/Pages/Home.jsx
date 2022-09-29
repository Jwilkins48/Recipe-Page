import React, { useEffect, useState } from 'react'
import Axios from "axios";
import '../css/home.css'
import {v4 as uuidv4} from 'uuid'
import Category from '../Category';
import Card from '../Card';


function Home({search}) {

  const url = 'https://api.edamam.com/search?q=vegan&app_id=1f947df2&app_key=bf2f0ead683c3918124966e995be981c&from=0&to=4&calories=591-722&random=true'

  const [randomRecipe, setRandomRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(url);
      setRandomRecipe(res.data.hits);
      console.log(res.data.hits);
    };
  
    fetchData();
  }, []);

  // CARD STYLING
  const homeTheme = {
    main: {
      flexDirection: 'row',
      height: '80%',
      borderRadius: '5px',
      backgroundColor: '#ffe4ae',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      padding: '15px'
    },
    cardImage: {
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      height: 'auto',
      width: '13rem',
      borderRadius: '6px',
      margin: '20px 10px'
    },
    cardInfoContainer: {
      justifyContent: 'space-around',
      height: '250px',
      cursor: 'default',
      margin: '0 15px',
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'flex-start',

    }
  };

  // const homeTheme = {
  //   home-recipe-display: {
  //     display: grid,
  //     grid-template-columns: 2fr 1.5fr,
  //     grid-template-rows: auto,
  //   }
  // // .home-card{
  // //     background-color: antiquewhite;
  // //     border-radius: 6px;
  // //     margin: 10px 20px;
  // // }
  // // .random-recipe-img{
  // //     width: 10rem;
  // // }
  // };


  return (
    <div id='homeScreen'>
      <div className="home-message-container">
        <h1 className='home-heading'>Looking for something new?</h1>
        <Category />
        <hr className='home-hr' />

        <div className="home-recipe-display">
          {randomRecipe.map((random) => {
            return <Card key={uuidv4()} theme={homeTheme} search={search} recipe={random}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
