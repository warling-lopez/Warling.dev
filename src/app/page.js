import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Stack from "./components/Stack";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Engagement from "./components/Engagement";
import Contact from "./components/Contact";
import BuildFX from "./components/BuildFX";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Stack />
        <Services />
        <Process />
        <About />
        <Engagement />
        <Contact />
      </main>
      <BuildFX initial="W" />
    </>
  );
}
