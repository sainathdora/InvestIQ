export default function NavBar() {
  return (
    <>
      <nav className="z-2 bg-transparent bg-slate-800 text-white flex">
        <h2
          style={{
            width: "50%",
          }}
        >
          InvestIQ
        </h2>
        <ul
          className="flex justify-around"
          style={{
            width: "50%",
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Get Started</li>
        </ul>
      </nav>
    </>
  );
}
