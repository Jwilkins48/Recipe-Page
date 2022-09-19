import React from 'react'
import Card from './Card'
import {v4 as uuidv4} from 'uuid'


function Home({recipes}) {
  return (

    <div className="cardContainer">
        {recipes.map((recipe) => {
        return <Card key={uuidv4()} recipe={recipe}/>
        })}
    </div>
  )
}

export default Home
