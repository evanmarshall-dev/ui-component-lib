import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Heading />
        <h2>{count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </main>
      <Footer />
    </>
  );
}

export default App;
