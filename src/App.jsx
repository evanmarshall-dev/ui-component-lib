import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setIsMousedOver] = useState(false);

  function handleClick() {
    console.log("Button Clicked");
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    console.log("Moused over");
    setIsMousedOver(true);
  }

  function handleMouseOut() {
    console.log("Moused out");
    setIsMousedOver(false);
  }

  return (
    <>
      <main>
        <Heading />
        <h2>{headingText}</h2>
        <input type="text" placeholder="Your name" />
        <button
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          type="submit"
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </main>
      <Footer />
    </>
  );
}

export default App;
