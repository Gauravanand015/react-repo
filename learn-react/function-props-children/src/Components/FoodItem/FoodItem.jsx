import React from "react";
import Styles from "./FoodItem.module.css";

const FoodItem = ({ foodItem, buyProduct, buyItemHandler }) => {
  return (
    <li className={`list-group-item ${Styles["li_items"]}`}>
      <span className={buyProduct ? "active" : null}>
        {foodItem}
        <button className="btn btn-info" onClick={buyItemHandler}>
          Buy
        </button>
      </span>
    </li>
  );
};

export default FoodItem;
