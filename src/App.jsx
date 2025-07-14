import "./App.css";

function App() {
  // Constants.
  const firstName = "Evan";
  const luckyNum = 19;
  const randoNum = Math.floor(Math.random() * luckyNum);
  const currentYear = new Date().getFullYear();
  const currentTime = new Date().getHours();
  // Test different hours.
  // ? const currentTime = new Date(2025, 1, 1, 10).getHours();

  // Object Data.
  const images = [
    {
      src: "https://picsum.photos/200?grayscale",
      alt: "A random 200px grayscale image from picsum",
    },
    {
      src: "https://picsum.photos/id/237/200",
      alt: "A 200px image of a black puppy from picsum",
    },
    {
      src: "https://picsum.photos/200",
      alt: "A random 200px image from picsum",
    },
  ];

  // Inline Styles.
  // ? const customStyles = {
  //   ? fontSize: "3rem",
  //   ? color: "var(--titleColor)",
  // ? };

  // Update Inline Style.
  // ? customStyles.color = "blue";

  // Dynamic Heading Styles
  const hourlyStyles = {
    color: "",
  };

  // Helper Code.
  let greeting;

  if (currentTime < 12) {
    greeting = "Good Morning!";
    hourlyStyles.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    hourlyStyles.color = "green";
  } else {
    greeting = "Good Night!";
    hourlyStyles.color = "blue";
  }

  return (
    <div>
      <main>
        {/* <h1 style={customStyles}>UI Component Library</h1> */}
        <h1 style={hourlyStyles}>{greeting}</h1>
        <p>
          Hello! My name is <strong>{firstName}</strong> and my lucky number is{" "}
          <strong>{luckyNum}</strong>. Let's turn that lucky number into a
          random number here: <strong>{randoNum}</strong>!
        </p>
        <h2 style={{ fontSize: "2rem", color: "var(--accentColor)" }}>
          Favorite Pictures
        </h2>
        {/* <ul>
          <li>Pizza</li>
          <li>Sushi</li>
          <li>Sandwiches</li>
        </ul> */}
        <div>
          <img src={images[0].src} alt={images[0].alt} />
          <img src={images[1].src} alt={images[1].alt} />
          <img src={images[2].src} alt={images[2].alt} />
        </div>
      </main>
      <footer>
        Copyright ©️ <strong>{currentYear}</strong>
      </footer>
    </div>
  );
}

export default App;
