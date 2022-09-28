import React, { useState, useEffect } from 'react'
import Card from '../Card'
import Axios from "axios";
import {v4 as uuidv4} from 'uuid'
import {useParams} from 'react-router-dom'

function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();
    
  const API_KEY = 'bf2f0ead683c3918124966e995be981c';
  const APP_ID = '1f947df2'

  const getSearch = async (name) => {
    let res = await Axios.get(`https://api.edamam.com/search?q=${name}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=9`)
    setSearched(res.data.hits);
    console.log(res.data.hits);
  }

  useEffect(() => {
    getSearch(params.search)
  }, [params.search]);

  return (
    <div className="cardContainer">
      {searched.map((recipe) => {
        return <Card key={uuidv4()} recipe={recipe}/>
      })}
    </div>
  )
}

export default Searched
