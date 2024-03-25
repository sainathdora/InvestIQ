import Link from "next/link";

export default function NavBar({ bgcolor, textcolor }) {
  return (
    <>
      <nav
        className={`bg-${bgcolor}-700 text-${textcolor} flex sm:text-xl lg:text-3xl`}
      >
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
          <li className="hover:text-gray-300 hover:cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 hover:cursor-pointer">
            <Link href="/portfolio">Get Started</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
