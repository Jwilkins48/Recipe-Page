import React from 'react'
import './css//home.css';
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <div className='category-container'>

        <NavLink to={'/cuisine/Mexican'} className="cuisineType-container">
            <i class="fa-solid fa-pepper-hot category-icon"></i>
            <p className='cuisine-title'>Mexican</p>
        </NavLink>

        <NavLink to={'/cuisine/Chinese'} className="cuisineType-container">
            <i class="fa-solid fa-bowl-rice category-icon"></i>
            <p className='cuisine-title'>Chinese</p>
        </NavLink>

        <NavLink to={'/cuisine/Italian'} className="cuisineType-container italian">
            <i class="fa-solid fa-pizza-slice category-icon"></i>
            <p className='cuisine-title'>Italian</p>
        </NavLink>

        <NavLink to={'/cuisine/American'} className="cuisineType-container">
            <i class="fa-solid fa-burger category-icon"></i>
            <p className='cuisine-title'>American</p>
        </NavLink>
    </div>
  )
}

export default Category
