import { useMemo } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import ListItems from "./components/ListItems";
import transactions from "./data/transactions";

// Return object with customer and totals
// Highlight the customer with highest total amounts
// Highlight even if several instances in array.

function App() {
  const customerTotals = useMemo(() => {
    // Use reduce to create an object with customer totals.
    return transactions.reduce((totals, currentTx) => {
      const { customer, amount } = currentTx;
      // If the customer isn't in our totals object, init with 0 then add the current amount.
      totals[customer] = (totals[customer] || 0) + amount;
      return totals;
    }, {});
  }, []); // Empty dependency array because transactions is static.

  // Find the highest total amount from all customers.
  const highestTotal = useMemo(
    () => Math.max(...Object.values(customerTotals)),
    [customerTotals]
  );
  console.log(customerTotals);

  return (
    <>
      <main>
        <Heading />
        <h2>Customer Transactions</h2>
        {transactions.map((item) => {
          // Check if the current item's customer is a top spender.
          const isHighest = customerTotals[item.customer] === highestTotal;
          return (
            <ListItems
              key={item.id}
              customer={item.customer}
              amount={item.amount}
              // Can now use the prop in ListItems component to apply a style.
              isHighest={isHighest}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}

export default App;
