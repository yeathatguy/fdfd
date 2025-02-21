import Link from "next/link"
import { Ship } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Ship className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Safe Ship Logistics</span>
            </div>
            <p className="text-sm">Your trusted partner in China to India import solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#sea-freight" className="hover:text-white">
                  Sea Freight
                </Link>
              </li>
              <li>
                <Link href="/services#air-freight" className="hover:text-white">
                  Air Freight
                </Link>
              </li>
              <li>
                <Link href="/services#customs-clearance" className="hover:text-white">
                  Customs Clearance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>1234 Shipping Lane</li>
              <li>Mumbai, MH 400001</li>
              <li>contact@safeshiplogistics.com</li>
              <li>+91 22 1234 5678</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Safe Ship Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

