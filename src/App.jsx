import "./App.css";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import contacts from "./data/contacts";

function createCard(contact) {
  return (
    <ContactCard
      name={contact.name}
      img={contact.imgUrl}
      tel={contact.phone}
      email={contact.email}
      key={contact.id}
      id={contact.id}
    />
  );
}

function App() {
  return (
    <>
      <main>
        <Heading />
        <section className="contactContainer">
          {contacts.map(createCard)}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
