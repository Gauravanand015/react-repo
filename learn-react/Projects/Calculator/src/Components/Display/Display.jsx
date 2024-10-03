import React from "react";
import Styles from "./Display.module.css";

const Display = ({ content }) => {
  return (
    <div className={Styles.display}>
      <input type="text" name="display" id="display" value={content} readOnly />
    </div>
  );
};

export default Display;
