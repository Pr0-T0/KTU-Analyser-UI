import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";


function App() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Header/>
      <main className="flex-grow">
        <HeroSection/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;