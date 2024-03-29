import { useEffect, useState } from "react";
import StockButton from "./Button/StockButton";
import { ST } from "next/dist/shared/lib/utils";
export default function StockDisplay() {
  const [stock, setStock] = useState("");
  const [StocksOnScreen, setStocksOnScreen] = useState([]);
  let [stocksinfo, setStockInfo] = useState([
    {
      id: 1,
      name: "TCS",
    },
    {
      id: 2,
      name: "Bajaj",
    },
    {
      id: 3,
      name: "Reliance",
    },
    {
      id: 4,
      name: "Adani Power",
    },
  ]);

  function setStockHandler(e) {
    console.log("e.target.value: ", e.target.value);
    setStock(e.target.value);
    // find key of selected stock
    console.log("stocksinfo: ", stocksinfo);
    let foundstock = stocksinfo.find((i) => {
      return i.name == e.target.value;
    });
    console.log("foundstock: ", foundstock);
    setStocksOnScreen((prev) => [
      ...prev,
      {
        id: foundstock["id"],
        name: e.target.value,
      },
    ]);
    setStockInfo((prev) => {
      let b = prev.filter((i) => {
        return i.name !== e.target.value;
      });
      return b;
    });
  }
  return (
    <>
      <form className="max-w-sm mx-auto">
        <label
          for="Stocks"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Pick Your Stocks
        </label>
        <select
          value={stock}
          onChange={setStockHandler}
          id="Stocks"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option>Pick Stocks</option>
          {stocksinfo.map((i) => {
            return (
              <option key={i.id} value={i.name}>
                {i.name}
              </option>
            );
          })}
        </select>
      </form>
      {StocksOnScreen.length > 0 && (
        <ul className="my-5">
          {StocksOnScreen.map((i) => {
            return (
              <StockButton key={i.id}>
                {i.name}
              </StockButton>
            );
          })}
        </ul>
      )}
    </>
  );
}
