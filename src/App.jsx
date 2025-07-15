import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    // console.log("changed");
    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setName(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setHeadingText(name);
  }

  return (
    <>
      <main>
        <Heading />
        {/* <h2>Hello {name}</h2> */}
        <h2>Hello {headingText}</h2>
        <form>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Your name"
            value={name}
          />
          <button onClick={handleClick} type="submit">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default App;
