import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About";
import Projects from "./components/Projects";
import Contect from "./components/Contect";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="w-full h-screen  overflow-auto scroll-smooth  bg-gray-100">
          <Navbar/>
        <div className="flex w-full h-screen flex-col">
          <Hero/>
        </div>
        <About/>
        <Projects />
        <Contect/>
        <Footer/>  
        </div>
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  )
}

export default App;