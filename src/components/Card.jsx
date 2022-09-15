import React from 'react'

function Card({recipe}) {
  return (
    <div className='card'>
        <p>{recipe['recipe']['label']}</p>
      
    </div>
  )
}

export default Card
