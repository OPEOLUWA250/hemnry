import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#F9F7F2] pt-16 md:pt-20 pb-8">
      <div className="px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">HEMNRY</h3>
            <p className="font-body text-sm text-[#B8B0A5] leading-relaxed">
              Discover luxury redefined. Experience unparalleled hospitality and world-class dining at HEMNRY.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-[#C5A059]">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="font-body text-sm text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="font-body text-sm text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300">About Us</Link></li>
              <li><Link href="/rooms" className="font-body text-sm text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300">Rooms & Suites</Link></li>
              <li><Link href="/restaurant" className="font-body text-sm text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300">Dining</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-[#C5A059]">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="font-body text-sm text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300">Gallery</Link></li>
              <li><Link href="/amenities" className="font-body text-sm text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300">Amenities</Link></li>
              <li><Link href="/blogs" className="font-body text-sm text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300">Blog</Link></li>
              <li><Link href="/contact" className="font-body text-sm text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-[#C5A059]">Contact</h4>
            <ul className="space-y-3">
              <li>
                <p className="font-body text-sm text-[#B8B0A5]">+1 (555) 123-4567</p>
              </li>
              <li>
                <p className="font-body text-sm text-[#B8B0A5]">info@hemnry.com</p>
              </li>
              <li>
                <p className="font-body text-sm text-[#B8B0A5]">123 Luxury Avenue<br />Prime City, ST 12345</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#2A2A2A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-[#B8B0A5]">
              &copy; 2024 HEMNRY Hotels. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="font-body text-xs text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="font-body text-xs text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="font-body text-xs text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
