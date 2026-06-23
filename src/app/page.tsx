import About from "@/components/sections/About/About";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Navbar from "@/components/sections/Navbar/Navbar";
import Projects from "@/components/sections/Projects/Projects";
import Skills from "@/components/sections/Skills";
import { socialLinks } from "@/constants/socialsLinks";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mubeen",
  jobTitle: "Full Stack Developer",
  url: "https://portfolio-beryl-eta-zuq6c5ksg2.vercel.app",
  sameAs: socialLinks.map((link) => link.path),
  address: {
    "@type": "PostalAddress", // 37251
    addressLocality: "Faisalabad",
    addressCountry: "PK",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <main className="w-[95%] mx-auto">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
