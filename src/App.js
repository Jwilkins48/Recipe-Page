import { useState } from "react";
import Axios from "axios";
import {v4 as uuidv4} from 'uuid'
import Card from './components/Card'

function App() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  //https://api.edamam.com/search?q=chicken&app_id=1f947df2&app_key=bf2f0ead683c3918124966e995be981c&from=0&to=3&calories=591-722&health=alcohol-free

  const API_KEY = 'bf2f0ead683c3918124966e995be981c';
  const APP_ID = '1f947df2'

  async function fetchData(){
    let res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}`)
    setRecipes(res.data.hits)
    console.log(res.data.hits);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData()
  }

  
  return (
    <div className="App">

      <nav className="navContainer">
        {/* Search  */}
        <form className="searchForm" onSubmit={handleSubmit}>
          <input className="searchInput" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Enter Recipe" type='text'/>
          <input className="submitSearchBtn btn" type='submit' value='Search'/>
        </form>
      </nav>

      {/* Display searched recipes */}
      <div className="cardContainer">
        {recipes.map((recipe) => {
          return <Card key={uuidv4()} recipe={recipe}/>
        })}
      </div>

    </div>
  );
}

export default App;
