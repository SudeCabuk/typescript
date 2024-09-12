import Arama from "./Components/Arama";
import Food from './Food';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

function App()  {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [searchText,setSearchText] = useState<string>("");

  const getData = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
     .then(function (response) {  
       setMeals(response.data.meals);
       console.log(response.data.meals);
     })
  }
   useEffect(() => {
     getData();
   }, []);

   useEffect(() => {
    if(searchText !== ""){
      setMeals(meals.filter((meal) => meal.strMeal.includes(searchText)))
    }else{
      getData();
    }
   },[searchText])
  
  return (
    <div className="App">
      <Arama setSearchText={setSearchText} />
      <div className="food-container">
        {meals.map((meal) => (
          <Food key={meal.idMeal} meal={meal}/>
        ))}
      </div>
    </div>
  );
 }

export default App;
