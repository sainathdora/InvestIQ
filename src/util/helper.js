export function InsertStockToStockArray(
  Stock_Array,
  DisplayStocks,
  Stock_to_be_inserted
) {
  //   add stock from DisplayStock to Stock_array
  Stock_Array = [...Stock_Array, Stock_to_be_inserted];
  //   remove the stock from DisplayStock
  DisplayStocks = DisplayStocks.filter((i) => {
    return i.name !== Stock_to_be_inserted.name;
  });
  return { Stock_Array, DisplayStocks };
}

export function DeleteStockFromStockArray(
  Stock_Array,
  DisplayStocks,
  Stock_to_be_deleted
) {
  // remove stock from StockArray
  Stock_Array = Stock_Array.filter((i) => {
    return i.name !== Stock_to_be_deleted.name;
  });
  //   add that stock to Display stock
  DisplayStocks = [...DisplayStocks, Stock_to_be_deleted];
  return { Stock_Array, DisplayStocks };
}

// fetch data from api(stocks data)

export async function FetchStockData() {
  const res = await fetch("/api/InfoHandler");
  const resjson = res.json();
  return resjson;
}

