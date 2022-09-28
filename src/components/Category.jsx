import React from 'react'
import './css//home.css';
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <div className='category-container'>

        <NavLink to={'/cuisine/Mexican'} className="cuisineType-container">
            <i class="fa-solid fa-pepper-hot"></i>
            <h5>Mexican</h5>
        </NavLink>

        <NavLink to={'/cuisine/Chinese'} className="cuisineType-container">
            <i class="fa-solid fa-bowl-rice"></i>
            <h5>Chinese</h5>
        </NavLink>

        <NavLink to={'/cuisine/Italian'} className="cuisineType-container">
            <i class="fa-solid fa-pizza-slice"></i>
            <h5>Italian</h5>
        </NavLink>

        <NavLink to={'/cuisine/American'} className="cuisineType-container">
            <i class="fa-solid fa-burger"></i>
            <h5>American</h5>
        </NavLink>
    </div>
  )
}

export default Category
