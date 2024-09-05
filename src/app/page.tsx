import Btn from "@/components/common/Btn";
import About from "@/components/sections/About";
import Header from "@/components/sections/Header";
import Popular from "@/components/sections/Popular";
import WhyUs from "@/components/sections/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[90%] lg:w-[80%] mx-auto ">
      <Header />
      <About />
      <WhyUs />
      <Popular />
    </main>
  );
}
