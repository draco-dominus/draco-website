import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIDracoChat from "./components/DracoGPT";

export default function HomePage() {
  return (
    <main className="pt-24 px-6">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <AIDracoChat />
    </main>
  );
}