import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";

function App() {
  // const [count, setCount] = useState(0);

  let url =
    "https://openexchangerates.org/api/latest.json?app_id=d6e7594e021a47f8a61ed137b6ca1adf";

  return (
    <>
      <div>
        <Header />
        <CurrencyConverter />
      </div>
    </>
  );
}

export default App;
