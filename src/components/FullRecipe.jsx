import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from "axios";

export default ({ match: { params: { id } } }) =>
  <h1>
    {id}
  </h1>

// function FullRecipe({match: {params: { id } } }) {


//   return (
//     <div>
//       {id}
//         recipe<br/>
//         <Link to='/'>Home</Link>
//     </div>
//   )
// }

// export default FullRecipe
