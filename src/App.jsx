import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

function App() {
  const currentTime = () => new Date().toLocaleTimeString();
  // ? console.log(currentTime);
  const [time, setTime] = useState(currentTime);

  return (
    <>
      <main>
        <Heading />
        <h2 style={{ textAlign: "center", margin: "1rem" }}>{time}</h2>
        <button
          onClick={() => setInterval(() => setTime(currentTime()), 1000)}
          style={{
            display: "inline-block",
            width: "20%",
            margin: "0 auto",
            padding: "0.5rem",
            borderRadius: "1rem",
          }}
        >
          Get Current Time
        </button>
      </main>
      <Footer />
    </>
  );
}

export default App;
