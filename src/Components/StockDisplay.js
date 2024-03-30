import { useEffect, useState } from "react";
import StockButton from "./Button/StockButton";
import {
  InsertStockToStockArray,
  DeleteStockFromStockArray,
  FetchStockData,
} from "@/util/helper";
export default function StockDisplay() {
  useEffect(() => {
    FetchStockData().then((d) => {
      setStockInfo(d);
    });
  }, []);
  let [DisplayStock, setDisplayStocks] = useState([]);
  let [stocksinfo, setStockInfo] = useState([]);

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
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
      </ul>
      {DisplayStock.length > 0 && (
        <section className="flex justify-center">
          <button className="bg-slate-600 text-white rounded-lg p-3 mx-auto">
            Optimize PortFolio
          </button>
        </section>
      )}
    </>
  );
}
