import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Login from "./components/Login";

let isLoggedIn = false;

// ? function renderConditionally() {
//   ? if (isLoggedIn === true) {
//     ? return <h2>Hello User</h2>;
//   ? } else {
//     ? return <Login />;
//   ? }
// ? }

function App() {
  return (
    <>
      <main>
        <Heading />
        <section className="login__container">
          {/* {isLoggedIn ? <h2>Hello User</h2> : <Login />} */}
          {isLoggedIn && <h2>Hello User</h2>}
          {!isLoggedIn && <Login />}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
