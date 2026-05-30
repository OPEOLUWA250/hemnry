import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hotel-exterior.jpg"
          alt="Contact HEMNRY"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="heading-1 page-hero-heading mb-4">Get in Touch</h1>
          <p className="font-body text-lg text-[#F9F7F2]">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            <div className="border-2 border-[#B8B0A5] p-8 hover:border-[#C5A059] transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-6 h-6 text-white"
                  />
                </div>
                <h3 className="heading-3 text-[#121212]">Phone</h3>
              </div>
              <a
                href="tel:+15551234567"
                className="font-body text-lg text-[#121212] hover:text-[#C5A059] transition-colors duration-300 block mb-2"
              >
                +1 (555) 123-4567
              </a>
              <p className="font-body text-sm text-[#B8B0A5]">Available 24/7</p>
            </div>

            <div className="border-2 border-[#B8B0A5] p-8 hover:border-[#C5A059] transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-6 h-6 text-white"
                  />
                </div>
                <h3 className="heading-3 text-[#121212]">Email</h3>
              </div>
              <a
                href="mailto:info@hemnry.com"
                className="font-body text-lg text-[#121212] hover:text-[#C5A059] transition-colors duration-300 block mb-2"
              >
                info@hemnry.com
              </a>
              <a
                href="mailto:reservations@hemnry.com"
                className="font-body text-sm text-[#B8B0A5] hover:text-[#C5A059] transition-colors duration-300 block"
              >
                reservations@hemnry.com
              </a>
            </div>

            <div className="border-2 border-[#B8B0A5] p-8 hover:border-[#C5A059] transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="w-6 h-6 text-white"
                  />
                </div>
                <h3 className="heading-3 text-[#121212]">Address</h3>
              </div>
              <p className="font-body text-base text-[#121212]">
                123 Luxury Avenue
                <br />
                Prime City, ST 12345
                <br />
                <span className="text-[#B8B0A5]">United States</span>
              </p>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="border-2 border-[#B8B0A5] p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C5A059] rounded-full flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="w-6 h-6 text-white"
                  />
                </div>
                <h3 className="heading-3 text-[#121212]">Business Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="font-body font-medium text-[#121212]">
                    Reception
                  </p>
                  <p className="font-body text-[#B8B0A5]">24 hours</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-body font-medium text-[#121212]">
                    Restaurant
                  </p>
                  <p className="font-body text-[#B8B0A5]">12 PM - 11 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-body font-medium text-[#121212]">
                    Bar & Lounge
                  </p>
                  <p className="font-body text-[#B8B0A5]">5 PM - 2 AM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-body font-medium text-[#121212]">
                    Spa & Wellness
                  </p>
                  <p className="font-body text-[#B8B0A5]">8 AM - 10 PM</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-[#B8B0A5] p-8">
              <h3 className="heading-3 text-[#121212] mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#F9F7F2] rounded hover:bg-[#C5A059] group transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-6 h-6 text-[#121212] group-hover:text-white"
                  />
                  <span className="font-body text-sm font-medium text-[#121212] group-hover:text-white">
                    Facebook
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#F9F7F2] rounded hover:bg-[#C5A059] group transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-6 h-6 text-[#121212] group-hover:text-white"
                  />
                  <span className="font-body text-sm font-medium text-[#121212] group-hover:text-white">
                    Instagram
                  </span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#F9F7F2] rounded hover:bg-[#C5A059] group transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-6 h-6 text-[#121212] group-hover:text-white"
                  />
                  <span className="font-body text-sm font-medium text-[#121212] group-hover:text-white">
                    Twitter
                  </span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#F9F7F2] rounded hover:bg-[#C5A059] group transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="w-6 h-6 text-[#121212] group-hover:text-white"
                  />
                  <span className="font-body text-sm font-medium text-[#121212] group-hover:text-white">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* FAQ + Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
            <div className="bg-[#F9F7F2] p-8 border border-[#E8E3DA]">
              <h2 className="heading-2 text-[#121212] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="group border border-[#E8E3DA] bg-white p-4">
                  <summary className="list-none cursor-pointer font-body font-medium text-[#121212] flex items-center justify-between gap-3">
                    How quickly will I receive a response?
                    <span className="text-[#C5A059] group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="font-body text-sm text-[#121212] mt-3">
                    Our team responds to all inquiries within 24 hours, and
                    urgent reservation requests are prioritized.
                  </p>
                </details>

                <details className="group border border-[#E8E3DA] bg-white p-4">
                  <summary className="list-none cursor-pointer font-body font-medium text-[#121212] flex items-center justify-between gap-3">
                    Can I reserve rooms for events?
                    <span className="text-[#C5A059] group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="font-body text-sm text-[#121212] mt-3">
                    Yes. We support group and event reservations with tailored
                    packages for business and private gatherings.
                  </p>
                </details>

                <details className="group border border-[#E8E3DA] bg-white p-4">
                  <summary className="list-none cursor-pointer font-body font-medium text-[#121212] flex items-center justify-between gap-3">
                    Is WhatsApp booking support available?
                    <span className="text-[#C5A059] group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="font-body text-sm text-[#121212] mt-3">
                    Absolutely. Use the WhatsApp icon to chat directly with our
                    concierge for bookings and questions.
                  </p>
                </details>

                <details className="group border border-[#E8E3DA] bg-white p-4">
                  <summary className="list-none cursor-pointer font-body font-medium text-[#121212] flex items-center justify-between gap-3">
                    Do you offer airport transfer assistance?
                    <span className="text-[#C5A059] group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="font-body text-sm text-[#121212] mt-3">
                    Yes, our concierge can arrange private airport pickups and
                    drop-offs upon request.
                  </p>
                </details>
              </div>
            </div>

            <form className="bg-[#F9F7F2] p-8 border border-[#E8E3DA]">
              <h2 className="heading-2 text-[#121212] mb-8">
                Send us a Message
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-body text-sm font-medium text-[#121212] block mb-2"
                    >
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
                    <label
                      htmlFor="email"
                      className="font-body text-sm font-medium text-[#121212] block mb-2"
                    >
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
                  <label
                    htmlFor="phone"
                    className="font-body text-sm font-medium text-[#121212] block mb-2"
                  >
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
                  <label
                    htmlFor="subject"
                    className="font-body text-sm font-medium text-[#121212] block mb-2"
                  >
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
                  <label
                    htmlFor="message"
                    className="font-body text-sm font-medium text-[#121212] block mb-2"
                  >
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
            <h2 className="heading-2 text-center mb-8">
              Quick Ways to Connect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-[#F9F7F2] border-2 border-[#E8E3DA] text-center hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-white transition-all duration-300 group"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-8 h-8 text-[#121212] group-hover:text-white mb-3 block"
                />
                <p className="font-body font-medium text-[#121212] group-hover:text-white">
                  WhatsApp
                </p>
              </a>
              <a
                href="tel:+15551234567"
                className="p-6 bg-[#F9F7F2] border-2 border-[#E8E3DA] text-center hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-white transition-all duration-300 group"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-8 h-8 text-[#121212] group-hover:text-white mb-3 block"
                />
                <p className="font-body font-medium text-[#121212] group-hover:text-white">
                  Call Now
                </p>
              </a>
              <a
                href="mailto:reservations@hemnry.com"
                className="p-6 bg-[#F9F7F2] border-2 border-[#E8E3DA] text-center hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-white transition-all duration-300 group"
              >
                <FontAwesomeIcon
                  icon={faMessage}
                  className="w-8 h-8 text-[#121212] group-hover:text-white mb-3 block"
                />
                <p className="font-body font-medium text-[#121212] group-hover:text-white">
                  Message
                </p>
              </a>
              <a
                href="/rooms"
                className="p-6 bg-[#F9F7F2] border-2 border-[#E8E3DA] text-center hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-white transition-all duration-300 group"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-8 h-8 text-[#121212] group-hover:text-white mb-3 block"
                />
                <p className="font-body font-medium text-[#121212] group-hover:text-white">
                  Book Now
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#C5A059] rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="w-8 h-8 text-white"
              />
            </div>
          </div>
          <h2 className="heading-2 text-[#121212] mb-4">Find Us</h2>
          <p className="font-body text-lg text-[#121212] mb-2">HEMNRY Hotels</p>
          <p className="font-body text-base text-[#B8B0A5]">
            123 Luxury Avenue, Prime City, ST 12345 • United States
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
