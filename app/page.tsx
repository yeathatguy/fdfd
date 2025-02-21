import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Services from "./components/Services"
import Stats from "./components/Stats"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Stats />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

