import About from "../components/About";
import Contect from "../components/Contect";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="w-full h-screen  overflow-auto scroll-smooth  bg-gray-100">
      <Navbar />
      <div className="flex w-full h-screen flex-col">
        <Hero />
      </div>
      <About />
      <Projects />
      <Contect />
      <Footer />
    </div>
  );
};

export default Home;
