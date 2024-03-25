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
      <article>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi
        ipsum tenetur eaque est omnis. Suscipit cumque dolorum dolor eos sed
        placeat. Velit dolorum optio ad numquam nostrum tempore officia eligendi
        harum at hic sequi magni dolorem, quaerat quidem ex architecto fugiat
        adipisci quasi fugit exercitationem accusamus nam sit. Porro velit
        libero distinctio quibusdam sit alias incidunt repellendus modi, fugit
        deleniti unde nulla ea esse numquam temporibus impedit inventore at.
        Illo cum labore maiores blanditiis? Cupiditate est amet nemo blanditiis
        explicabo maiores doloribus deserunt. Natus totam quia et obcaecati
        blanditiis facere eos placeat reprehenderit deleniti ad quae, quod, nemo
        quam.
      </article>
    </>
  );
}
