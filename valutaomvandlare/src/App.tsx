import { useState } from "react";
import "./App.css";
import Converter from "./components/CurrencyConverter/converter";

function App() {
  // const [count, setCount] = useState(0);

  let url =
    "https://openexchangerates.org/api/latest.json?app_id=d6e7594e021a47f8a61ed137b6ca1adf";

  return (
    <>
      <div>
        <Converter />
      </div>
    </>
  );
}

export default App;
