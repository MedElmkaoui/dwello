
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Popular from "@/components/sections/Popular";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main className="w-[90%] lg:w-[80%] mx-auto overflow-clip">
      <About />
      <WhyUs />
      <Popular />
      <Testimonials />
      <CTA />
    </main>
  );
}
