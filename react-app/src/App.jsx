import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1/time/time_api/time_api.php?endpoint=time`)
      .then((res) => res.json())
      .then((data) => {
        setTime(data.time); // Assuming the response object has a key 'time'
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      {time && <p>Current time: {time}</p>}
    </>
  );
}

export default App;
