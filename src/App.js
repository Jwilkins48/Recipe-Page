import { useState } from "react";
import Axios from "axios";
import { Routes, Route, useNavigate} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import FullRecipe from "./components/Pages/FullRecipe";
import Searched from "./components/Pages/Searched";
import Cuisine from "./components/Pages/Cuisine";

function App() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  //https://api.edamam.com/search?q=chicken&app_id=1f947df2&app_key=bf2f0ead683c3918124966e995be981c&from=0&to=3&calories=591-722&health=alcohol-free

  const API_KEY = 'bf2f0ead683c3918124966e995be981c';
  const APP_ID = '1f947df2'
  const navigate = useNavigate();

  async function fetchData(){
    let res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}`)
    setRecipes(res.data.hits)
    console.log(res.data.hits);
  }

  //Fetch API / navigate to searched path on recipe search
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    navigate('/searched/' + search)
    setSearch('')
  }

  return (
    <div className="App">
        <Header handleSubmit={handleSubmit} search={search} setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Home search={search} recipes={recipes}/>}></Route>
          <Route path="/searched/:search" element={<Searched search={search} recipes={recipes}/>}></Route>
          <Route path='/cuisine/:type' element={<Cuisine />}></Route>
          <Route path='/recipe/:name' element={<FullRecipe />}></Route>
        </Routes>
    </div>
  );
}

export default App;
