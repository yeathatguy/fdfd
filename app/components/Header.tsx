import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Ship, Phone } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Ship className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">Safe Ship Logistics</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Our Services
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-blue-600">
            <Phone className="h-5 w-5" />
            <span className="text-sm font-medium">+91 1234567890</span>
          </div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/get-quote">Get Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

