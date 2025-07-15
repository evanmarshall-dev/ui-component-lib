import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import ListItems from "./components/ListItems";
import transactions from "./data/transactions";

// Return object with customer and totals
// Highlight the customer with highest total amounts
// Highlight even if several instances in array.

function App() {
  let customerTotals = {};

  customerTotals = transactions.reduce((totals, currentTx) => {}, {});

  console.log(customerTotals);

  // const customers = transactions.map((idx) => {
  //   console.log(idx);
  //   // return {idx.customer} {idx.amount}
  // });

  return (
    <>
      <main>
        <Heading />
        <h2>Customer Transactions</h2>
        {transactions.map((item) => {
          return (
            <ListItems
              key={item.id}
              customer={item.customer}
              amount={item.amount}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
