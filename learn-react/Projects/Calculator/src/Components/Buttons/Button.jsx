import React from "react";
import Styles from "./Button.module.css";
const Button = ({ buttonHandler }) => {
  let buttons = [
    "C",
    1,
    2,
    "+",
    3,
    4,
    "-",
    5,
    6,
    "*",
    7,
    8,
    "/",
    9,
    0,
    ".",
    "=",
  ];

  return (
    <div className={Styles.buttonsContainer}>
      <div className={Styles.buttons}>
        {buttons.map((button, i) => (
          <button
            className={Styles.keys}
            key={i}
            onClick={() => buttonHandler(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button;
