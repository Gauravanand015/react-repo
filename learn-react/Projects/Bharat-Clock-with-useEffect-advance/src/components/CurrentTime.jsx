import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const currentTime = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(currentTime);
    };
  }, []);

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
