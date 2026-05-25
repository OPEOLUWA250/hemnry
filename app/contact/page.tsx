import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Contact() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden mt-20 md:mt-0">
        <Image
          src="/images/hotel-exterior.jpg"
          alt="Contact HEMNRY"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="heading-1 text-white mb-4">
            Get in Touch
          </h1>
          <p className="font-body text-lg text-[#F9F7F2]">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-8">
              <div>
                <h3 className="heading-3 text-[#121212] mb-4">Phone</h3>
                <a href="tel:+15551234567" className="font-body text-lg text-[#121212] hover:text-[#C5A059] transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
                <p className="font-body text-sm text-[#B8B0A5] mt-2">Available 24/7</p>
              </div>

              <div>
                <h3 className="heading-3 text-[#121212] mb-4">Email</h3>
                <a href="mailto:info@hemnry.com" className="font-body text-lg text-[#121212] hover:text-[#C5A059] transition-colors duration-300">
                  info@hemnry.com
                </a>
                <p className="font-body text-sm text-[#B8B0A5] mt-2">Reservations</p>
                <a href="mailto:reservations@hemnry.com" className="font-body text-lg text-[#121212] hover:text-[#C5A059] transition-colors duration-300">
                  reservations@hemnry.com
                </a>
              </div>

              <div>
                <h3 className="heading-3 text-[#121212] mb-4">Address</h3>
                <p className="font-body text-base text-[#121212]">
                  123 Luxury Avenue<br />
                  Prime City, ST 12345<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="heading-3 text-[#121212] mb-4">Hours</h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-body font-medium text-[#121212]">Reception</p>
                    <p className="font-body text-sm text-[#B8B0A5]">24 hours</p>
                  </div>
                  <div>
                    <p className="font-body font-medium text-[#121212]">Restaurant</p>
                    <p className="font-body text-sm text-[#B8B0A5]">12 PM - 11 PM</p>
                  </div>
                  <div>
                    <p className="font-body font-medium text-[#121212]">Bar</p>
                    <p className="font-body text-sm text-[#B8B0A5]">5 PM - 2 AM</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="heading-3 text-[#121212] mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-2xl hover:text-[#C5A059] transition-colors duration-300">📘</a>
                  <a href="#" className="text-2xl hover:text-[#C5A059] transition-colors duration-300">📷</a>
                  <a href="#" className="text-2xl hover:text-[#C5A059] transition-colors duration-300">🐦</a>
                  <a href="#" className="text-2xl hover:text-[#C5A059] transition-colors duration-300">💼</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="md:col-span-2 bg-[#F9F7F2] p-8">
              <h2 className="heading-2 text-[#121212] mb-8">Send us a Message</h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-body text-sm font-medium text-[#121212] block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-[#E8E3DA] bg-white text-[#121212] font-body placeholder-[#B8B0A5] focus:outline-none focus:border-[#C5A059]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-body text-sm font-medium text-[#121212] block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-[#E8E3DA] bg-white text-[#121212] font-body placeholder-[#B8B0A5] focus:outline-none focus:border-[#C5A059]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="font-body text-sm font-medium text-[#121212] block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-[#E8E3DA] bg-white text-[#121212] font-body placeholder-[#B8B0A5] focus:outline-none focus:border-[#C5A059]"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="font-body text-sm font-medium text-[#121212] block mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-[#E8E3DA] bg-white text-[#121212] font-body focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Room Reservation</option>
                    <option value="restaurant">Restaurant Reservation</option>
                    <option value="event">Event Booking</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="font-body text-sm font-medium text-[#121212] block mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#E8E3DA] bg-white text-[#121212] font-body placeholder-[#B8B0A5] focus:outline-none focus:border-[#C5A059] resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>

                <p className="font-body text-xs text-[#B8B0A5] text-center">
                  We&apos;ll respond to your message within 24 hours.
                </p>
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div className="border-t border-[#E8E3DA] pt-12">
            <h2 className="heading-2 text-center mb-8">Quick Connections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-[#F9F7F2] text-center hover:bg-[#C5A059] hover:text-white transition-colors duration-300"
              >
                <div className="text-3xl mb-2">💬</div>
                <p className="font-body font-medium">WhatsApp</p>
              </a>
              <a
                href="tel:+15551234567"
                className="p-6 bg-[#F9F7F2] text-center hover:bg-[#C5A059] hover:text-white transition-colors duration-300"
              >
                <div className="text-3xl mb-2">📞</div>
                <p className="font-body font-medium">Call Now</p>
              </a>
              <a
                href="mailto:reservations@hemnry.com"
                className="p-6 bg-[#F9F7F2] text-center hover:bg-[#C5A059] hover:text-white transition-colors duration-300"
              >
                <div className="text-3xl mb-2">📧</div>
                <p className="font-body font-medium">Email</p>
              </a>
              <a
                href="/rooms"
                className="p-6 bg-[#F9F7F2] text-center hover:bg-[#C5A059] hover:text-white transition-colors duration-300"
              >
                <div className="text-3xl mb-2">🏨</div>
                <p className="font-body font-medium">Book Now</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 md:h-[500px] bg-[#F9F7F2] relative overflow-hidden">
        <Image
          src="/images/hotel-exterior.jpg"
          alt="HEMNRY Location"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center">
            <p className="font-heading text-2xl text-white mb-2">📍 HEMNRY Hotels</p>
            <p className="font-body text-base text-[#F9F7F2]">123 Luxury Avenue, Prime City</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
