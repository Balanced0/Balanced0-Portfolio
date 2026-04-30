import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileFAB from "@/components/MobileFAB";
import MotionSwitcher from "@/components/MotionSwitcher";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <SideNav />
      <MotionSwitcher />

      <div className="w-full pt-32">
        <Hero />
        <About />
        <TechStack />
        <Journey />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <MobileFAB />
    </main>
  );
}
