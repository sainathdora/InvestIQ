import { useEffect, useState } from "react";
import StockButton from "./Button/StockButton";
import {
  InsertStockToStockArray,
  DeleteStockFromStockArray,
} from "@/util/helper";
export default function StockDisplay() {
  let [DisplayStock, setDisplayStocks] = useState([]);
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

  function onChangeHandler(e) {
    // remove the stock from stocksarray
    let Stock_To_Delete = stocksinfo.find((i) => {
      return i.name == e.target.value;
    });
    let DeltededInfo = DeleteStockFromStockArray(
      stocksinfo,
      DisplayStock,
      Stock_To_Delete
    );
    console.log("delted: ", DeltededInfo);
    setStockInfo(DeltededInfo["Stock_Array"]);
    setDisplayStocks(DeltededInfo["DisplayStocks"]);
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
          id="Stocks"
          onChange={onChangeHandler}
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
      {DisplayStock.map((i) => {
        return (
          <StockButton
            key={i.id}
            setDisplayStocks={setDisplayStocks}
            setStockInfo={setStockInfo}
            DisplayStock={DisplayStock}
            stocksinfo={stocksinfo}
          >
            {i.name}
          </StockButton>
        );
      })}
    </>
  );
}
