import Styles from "./FoodInput.module.css";

import React from "react";

const Input = ({ onKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Your Food"
      onKeyDown={onKeyDown}
      className={Styles.foodInput}
    />
  );
};

export default Input;
Input;
