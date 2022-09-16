import { useState } from "react";
import Axios from "axios";
import {v4 as uuidv4} from 'uuid'
import Card from './components/Card'

function App() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState('alcohol-free');

  //https://api.edamam.com/search?q=chicken&app_id=1f947df2&app_key=bf2f0ead683c3918124966e995be981c&from=0&to=3&calories=591-722&health=alcohol-free

  const API_KEY = 'bf2f0ead683c3918124966e995be981c';
  const APP_ID = '1f947df2'

  async function fetchData(){
    let res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}&health=${healthLabels}`)
    setRecipes(res.data.hits)
    console.log(res.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData()
  }

  
  return (
    <div className="App">

      <form className="searchForm" onSubmit={handleSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" type='text'/>
        <input className="submitSearchBtn btn" type='submit' value='Search'/>

        <select className="selectDropDown">
          <option>Select</option>
          <option onClick={() => setHealthLabels('vegan')}>Vegan</option>
          <option onClick={() => setHealthLabels('vegetarian')}>Vegetarian</option>
          <option onClick={() => setHealthLabels('paleo')}>Paleo</option>
          <option onClick={() => setHealthLabels('dairy-free')}>Dairy free</option>
          <option onClick={() => setHealthLabels('gluten-free')}>Gluten free</option>
          <option onClick={() => setHealthLabels('wheat-free')}>Wheat free</option>
          <option onClick={() => setHealthLabels('low-sugar')}>Low sugar</option>
          <option onClick={() => setHealthLabels('egg-free')}>Egg free</option>
          <option onClick={() => setHealthLabels('peanut-free')}>Peanut free</option>
          <option onClick={() => setHealthLabels('tree-nut-free')}>Tree nut free</option>
          <option onClick={() => setHealthLabels('soy-free')}>Soy free</option>
          <option onClick={() => setHealthLabels('fish-free')}>Fish free</option>
          <option onClick={() => setHealthLabels('shellfish-free')}>Shellfish free</option>
        </select>
      </form>

      <div>
        {recipes.map((recipe) => {
          return <Card key={uuidv4()} recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
