import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ExperienceSection from "@/components/ExperienceSection";
import StatusBadge from "@/components/StatusBadge";

export default function Home() {
  return (
    <main className="min-h-screen bg-serene-bg relative overflow-hidden">
      {/* Abstract Background Orbs */}
      <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-serene-accent/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] bg-serene-peach/30 rounded-full blur-[100px] -z-10"></div>

      <Header />
      <SideNav />

      <div className="pt-32 pb-64 px-8 md:pl-40 max-w-7xl mx-auto">
        <Hero />
        <BentoGrid />
        <ExperienceSection />
      </div>

      <StatusBadge />
    </main>
  );
}
