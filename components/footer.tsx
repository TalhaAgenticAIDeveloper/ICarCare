import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Wrench } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">iCarCare</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional automotive repair services with expert mechanics and quality service. Your trusted partner
              for all car maintenance and repair needs.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock className="h-4 w-4" />
              <span>Mon-Sun: 9:00 AM - 11:00 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/services-done" className="text-gray-300 hover:text-white transition-colors">
                  Services Done
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <a href="tel:+923366673332" className="hover:text-white transition-colors">
                  +92 336-6673332
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <a href="mailto:carcare2058@gmail.com" className="hover:text-white transition-colors">
                  carcare2058@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Block 26 R1 Samsani Road Near Shadewal Chowk Johar Town Lahore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 iCarCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
