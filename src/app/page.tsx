
import About from "@/components/sections/About";
import Header from "@/components/sections/Header";
import Popular from "@/components/sections/Popular";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main className="w-[90%] lg:w-[80%] mx-auto overflow-clip">
      <Header />
      <About />
      <WhyUs />
      <Popular />
    </main>
  );
}
