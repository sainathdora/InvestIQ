import NavBar from "@/Components/NavBar";
import StockDisplay from "@/Components/StockDisplay";
export default function PortFolio(props) {
  console.log(props);
  return (
    <>
      <NavBar bgcolor="gray" textcolor="green" />
      <StockDisplay />
    </>
  );
}
export async function getServerSideProps() {
  return {
    props: {
      username: "maxwell",
    },
  };
}
