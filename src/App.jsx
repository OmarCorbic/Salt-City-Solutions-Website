import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";

function App() {
  return (
    <div className=" flex flex-col gap-20 dark:bg-[#01000d] text-slate-700 font-medium dark:text-white bg-[#DCF2F1]  ;">
      <header role="banner">
        <Navbar />
        <Hero />
      </header>
      <main className="flex flex-col gap-20 px-[3%] lg:px-[8%] ">
        <About />
        <Pricing />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
