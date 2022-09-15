import { useState, useEffect } from "react";
import Axios from "axios";
import MealList from "./components/MealList";


function App() {
  const [mealData, setMealData] = useState(null);
  const [meal, setMeal] = useState('');

  const API_KEY = 'bf2f0ead683c3918124966e995be981c';
  const APP_ID = '1f947df2'

  useEffect(() => {
    async function fetchData(){
      const res = await Axios.get(`"https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"` )
      const data = await res.json();

    }
    fetchData()
  }, []);
  

  return (
    <div className="App">
      <section className="inputSection">
        <input placeholder="Search" />
      </section>
    </div>
  );
}

export default App;
