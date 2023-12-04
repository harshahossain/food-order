import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  ////states
  const [loadedMeals, setLoadedMeals] = useState([]);

  ////fetching meals using useEffect to avoid infinite loop
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //
      }
      const meals = await response.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
