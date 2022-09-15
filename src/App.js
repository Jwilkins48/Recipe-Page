import { useState, useEffect } from "react";
import axios from "axios";
import MealList from "./components/MealList";


function App() {
  const [mealData, setMealData] = useState(null);
  const [meal, setMeal] = useState('');

  const API_KEY = 'bf2f0ead683c3918124966e995be981c';
  const APP_ID = '1f947df2'

  useEffect(() => {
    async function fetchData(){
      const request = await fetch(`https://api.edamam.com/api/recipes/v2`)
      const data = await Response.json()

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
