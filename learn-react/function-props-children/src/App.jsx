import "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodInput from "./Components/FoodInput/FoodInput";
import { useState } from "react";
import Container from "./Components/Container/container";
import FoodItems from "./Components/FoodItems/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  const [foodItems, setFoodItems] = useState([]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      setFoodItems([...foodItems, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput onKeyDown={onKeyDown} />
        <ErrorMessage foodItems={foodItems} />
        <FoodItems foodItems={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
