'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Dining', href: '/restaurant' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F7F2] border-b border-[#E8E3DA]">
      <div className="px-4 sm:px-6 md:px-12 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-heading text-2xl md:text-3xl font-bold text-[#121212]">
            HEMNRY
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-body text-sm font-medium text-[#121212] hover:text-[#C5A059] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className="hidden md:block px-6 py-2.5 bg-[#121212] text-[#F9F7F2] font-body text-sm font-medium hover:bg-[#2A2A2A] transition-colors duration-300"
          >
            Reserve
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6"
          >
            <div className={`w-6 h-0.5 bg-[#121212] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-[#121212] transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <div className={`w-6 h-0.5 bg-[#121212] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-[#E8E3DA] pt-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2.5 font-body text-sm font-medium text-[#121212] hover:text-[#C5A059] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 px-6 py-2.5 bg-[#121212] text-[#F9F7F2] font-body text-sm font-medium text-center hover:bg-[#2A2A2A] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Reserve
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
