import {
  InsertStockToStockArray,
  DeleteStockFromStockArray,
} from "@/util/helper";
export default function StockButton({
  children,
  setDisplayStocks,
  setStockInfo,
  stocksinfo,
  DisplayStock,
  setClickBtn,
}) {
  function removeStockHandler() {
    // Insert to stock array
    setClickBtn(false);
    let Stock_to_insert = DisplayStock.find((i) => {
      return i.name == children;
    });
    // delete from DisplayStock
    let Insert_Results = InsertStockToStockArray(
      stocksinfo,
      DisplayStock,
      Stock_to_insert
    );
    console.log("Insert Res: ", Insert_Results);
    setStockInfo(Insert_Results["Stock_Array"]);
    setDisplayStocks(Insert_Results["DisplayStocks"]);
  }
  return (
    <>
      <span className="bg-sky-300 rounded-lg m-3 p-4 flex justify-between">
        <p>{children}</p>
        <button
          className="bg-red-600 text-white px-2 remove rounded-md"
          onClick={removeStockHandler}
        >
          X
        </button>
      </span>
    </>
  );
}
