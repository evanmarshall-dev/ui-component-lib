const Heading = () => {
  const firstName = "Evan";
  const luckyNum = 19;
  const randoNum = Math.floor(Math.random() * luckyNum);
  const currentTime = new Date().getHours();
  // Test different hours.
  // ? const currentTime = new Date(2025, 1, 1, 10).getHours();

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
    <header>
      {/* <h1 style={customStyles}>UI Component Library</h1> */}
      <h1 style={hourlyStyles}>{greeting}</h1>
      <p>
        Hello! My name is <strong>{firstName}</strong> and my lucky number is{" "}
        <strong>{luckyNum}</strong>. Let's turn that lucky number into a random
        number here: <strong>{randoNum}</strong>!
      </p>
    </header>
  );
};

export default Heading;
