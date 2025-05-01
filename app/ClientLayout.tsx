"use client"

import type React from "react"

import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl mr-3">
              A
            </div>
            <span className="font-bold text-xl">AI Learn</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium"
            >
              Home
            </Link>
            <Link
              href="/learning-paths"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium"
            >
              Learning Paths
            </Link>
            <Link
              href="/resources"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium"
            >
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/learning-paths"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Learning Paths
            </Link>
            <Link
              href="/resources"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col space-y-4">
              <Link
                href="/login"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl mr-3">
                A
              </div>
              <span className="font-bold text-xl">AI Learn</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Your personalized journey to tech and language mastery with step-by-step guidance
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Learning</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/learning-paths"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} AI Learn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
