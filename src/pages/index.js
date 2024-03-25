import NavBar from "@/Components/NavBar";
import Image from "next/image";
import BackgroundImg from "../../public/assets/Background3.svg";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <>
      <div
        className="container min-w-screen sm:min-h-screen bg-[url('../../public/assets/Background3.svg')] bg-center
      bg-cover"
      >
        <NavBar />
        <Hero />
      </div>
    </>
  );
}
