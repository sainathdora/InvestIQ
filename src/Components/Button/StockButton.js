import classes from "./StockButton.module.scss";
export default function StockButton({ children }) {
  return (
    <>
      <span className="bg-sky-300 rounded-lg m-3 p-4">
        {children}
        <button className="bg-red-600 text-white px-2 remove rounded-md">
          X
        </button>
      </span>
    </>
  );
}
