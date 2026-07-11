import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certificates from "@/components/Certificates";


export default function Home() {

  return (

    <main className="pt-20">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Certificates />

      <Projects />

      <Contact />


    </main>

  )

}