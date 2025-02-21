import Header from "../components/Header"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

