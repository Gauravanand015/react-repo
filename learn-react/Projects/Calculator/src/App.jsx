import Styles from "./App.module.css";
import Display from "./Components/Display/Display";
import Button from "./Components/Buttons/Button";
import { useState } from "react";

function App() {
  const [content, setContent] = useState("");

  const buttonHandler = (buttonText) => {
    if (buttonText === "C") {
      setContent("");
    } else if (buttonText === "=") {
      setContent(eval(content));
    } else {
      setContent(content + `${buttonText}`);
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className={Styles.container}>
        <Display content={content} />
        <Button buttonHandler={buttonHandler} />
      </div>
    </>
  );
}

export default App;
