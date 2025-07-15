import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import notes from "./data/notes";

function App() {
  return (
    <>
      <main>
        <Heading />
        <section className="card__container">
          {notes.map((note) => (
            <Card key={note.key} title={note.title} content={note.content} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
