import { useState } from "react";
import Axios from "axios";
import { Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import FullRecipe from "./components/FullRecipe";

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
        <Header handleSubmit={handleSubmit} search={search} setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Home search={search} recipes={recipes}/>}></Route>
          <Route path='/recipe/:name' element={<FullRecipe setRecipes={setRecipes} search={search} recipes={recipes}/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
