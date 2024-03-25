import NavBar from "@/Components/NavBar";
import Image from "next/image";
import BackgroundImg from "../../public/assets/Background3.svg";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <>
      <Image
        src={BackgroundImg}
        height={1000}
        width={1000}
        className="w-full absolute -z-10"
      />
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
}
