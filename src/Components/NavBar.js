export default function NavBar() {
  return (
    <>
      <nav className="z-2 bg-transparent bg-slate-800 text-white flex sm:text-xl lg:text-3xl">
        <h2
          style={{
            width: "50%",
          }}
          className="md:text-center font-bold sm:text-left"
        >
          InvestIQ
        </h2>
        <ul
          className="flex justify-evenly text-xl md:text-2xl"
          style={{
            width: "50%",
          }}
        >
          <li className="hover:text-gray-300 hover:cursor-pointer">Home</li>
          <li className="hover:text-gray-300 hover:cursor-pointer">
            Get Started
          </li>
        </ul>
      </nav>
    </>
  );
}
