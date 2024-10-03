import "./App.css";
import ClockSlogan from "./components/ClockSlogan";
import ClockHeading from "./components/ClockHeading";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
