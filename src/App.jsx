import "./App.css";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import contacts from "./data/contacts";

function App() {
  return (
    <>
      <main>
        <Heading />
        <section className="contactContainer">
          <ContactCard
            name={contacts[0].name}
            img={contacts[0].imgUrl}
            tel={contacts[0].phone}
            email={contacts[0].email}
          />
          <ContactCard
            name={contacts[1].name}
            img={contacts[1].imgUrl}
            tel={contacts[1].phone}
            email={contacts[1].email}
          />
          <ContactCard
            name={contacts[2].name}
            img={contacts[2].imgUrl}
            tel={contacts[2].phone}
            email={contacts[2].email}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
