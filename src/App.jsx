import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <main>
        <Heading />
        <dl className="description">
          <div className="description__container">
            <dt>
              <span aria-label="Tense Bicep">💪</span>
              <span>Tense Bicep</span>
            </dt>
            <dd>
              “You can do that!” or “I feel strong!” Arm with tense biceps. Also
              used in connection with doing sports, e.g. at the gym.
            </dd>
          </div>
          <div className="description__container">
            <dt>
              <span aria-label="Prayer">🙏</span>
              <span>Prayer</span>
            </dt>
            <dd>
              Two hands pressed together. Is currently very introverted, saying
              a prayer, or hoping for enlightenment. Is also used as a “high
              five” or to say thank you.
            </dd>
          </div>
          <div className="description__container">
            <dt>
              <span aria-label="Celebration">🙌</span>
              <span>Celebration</span>
            </dt>
            <dd>
              Hallelujah! Hands are stretched upwards to celebrate. Is having a
              party, dancing wildly and friskily. Is in a good mood or having a
              lot of fun. Can also stand for “Banzai”, a Japanese cheer that
              brings luck and joy for 10,000 years.
            </dd>
          </div>
        </dl>
      </main>
      <Footer />
    </>
  );
}

export default App;
