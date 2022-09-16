import { useState } from "react";
import Axios from "axios";
import Card from './components/Card'

function App() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([])

  //https://api.edamam.com/search?q=chicken&app_id=1f947df2&app_key=bf2f0ead683c3918124966e995be981c&from=0&to=3&calories=591-722&health=alcohol-free

  const API_KEY = 'bf2f0ead683c3918124966e995be981c';
  const APP_ID = '1f947df2'

  async function fetchData(){
    let res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}&&health=alcohol-free`)
    setRecipes(res.data.hits)
    console.log(res.data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData()
  }
  
  return (
    <div className="App">
      <h1>Hello</h1>

      <form className="searchForm" onSubmit={handleSubmit}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" type='text'/>
        <input className="submitSearchBtn btn" type='submit' value='Search'/>
      </form>

      <div>
        {recipes.map((recipe) => {
          return <Card recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
