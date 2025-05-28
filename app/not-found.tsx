"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Wrench } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full text-center px-4">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-4 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <Wrench className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Looks like this page took a wrong turn! Don't worry, our mechanics can't fix this one, but we can help you
            get back on track.
          </p>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Link href="/services">
              <Wrench className="mr-2 h-4 w-4" />
              View Our Services
            </Link>
          </Button>
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="w-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Need Help?</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            If you're looking for automotive services, contact us directly:
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700 dark:text-gray-300">
              📞 <strong>Phone:</strong>{" "}
              <a href="tel:+923366673332" className="text-blue-600 dark:text-blue-400 hover:underline">
                0336-6673332
              </a>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              ✉️ <strong>Email:</strong>{" "}
              <a href="mailto:carcare2058@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                carcare2058@gmail.com
              </a>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              🕒 <strong>Hours:</strong> Mon-Sun 9:00 AM - 11:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
