import "./App.css";
import List from "./components/List";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <main>
        <Heading />
        <List />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
