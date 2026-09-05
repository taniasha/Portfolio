import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
