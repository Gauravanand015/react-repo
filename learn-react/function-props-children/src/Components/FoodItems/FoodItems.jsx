import React, { useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import Styles from "./FoodItems.module.css";

const FoodItems = ({ foodItems }) => {
  const [buyItems, setBuyItems] = useState([]);
  const onBuy = (foodItem, event) => {
    setBuyItems([...buyItems, foodItem]);
  };

  return (
    <>
      <ul className={`${Styles.ul} list-group`}>
        {foodItems.map((foodItem, index) => (
          <FoodItem
            key={index}
            foodItem={foodItem}
            buyProduct={buyItems.includes(foodItem)}
            buyItemHandler={(event) => onBuy(foodItem, event)}
          />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
