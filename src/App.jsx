import "./App.css";
import Emoji from "./components/Emoji";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import emojipedia from "./data/emojipedia";

// function createEmoji(emoji) {
//   return (
//     <Emoji
//       key={emoji.id}
//       emoji={emoji.emoji}
//       name={emoji.name}
//       definition={emoji.meaning}
//     />
//   );
// }

function App() {
  return (
    <>
      <main>
        <Heading />
        {/* <dl className="description">{emojipedia.map(createEmoji)}</dl> */}
        <dl className="description">
          {emojipedia.map((emoji) => {
            return (
              <Emoji
                key={emoji.id}
                emoji={emoji.emoji}
                name={emoji.name}
                definition={emoji.meaning}
              />
            );
          })}
        </dl>
      </main>
      <Footer />
    </>
  );
}

export default App;
