import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {}; //to stop from chaning config creating infinate loop

export default function Meals() {
  ////states
  //const [loadedMeals, setLoadedMeals] = useState([]);

  ////fetching meals using useEffect to avoid infinite loop
  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch("http://localhost:3000/meals");

  //     if (!response.ok) {
  //       //
  //     }
  //     const meals = await response.json();
  //     setLoadedMeals(meals);
  //   }
  //   fetchMeals();
  // }, []);

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }
  if (error) {
    return <Error title="Failed to Fetch meals" message={error} />;
  }
  // if (!loadedMeals) {
  //   return <p>No meals found.</p>;
  // }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
