import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Team from "./components/Team";


function App() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Header/>
      <main className="flex-grow">
        <HeroSection/>
        <About/>
        <Team/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;