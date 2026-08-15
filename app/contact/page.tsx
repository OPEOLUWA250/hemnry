import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
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

const hours = [
  { label: "Reception", value: "24 hours" },
  { label: "Restaurant", value: "12 PM – 11 PM" },
  { label: "Bar & Lounge", value: "5 PM – 2 AM" },
  { label: "Spa & Wellness", value: "8 AM – 10 PM" },
];

const quickLinks = [
  { icon: faWhatsapp, label: "WhatsApp", href: "https://wa.me/1234567890" },
  { icon: faPhone, label: "Call Now", href: "tel:+15551234567" },
  { icon: faMessage, label: "Message", href: "mailto:reservations@hemnry.com" },
  { icon: faEnvelope, label: "Book Now", href: "/rooms" },
];

const faqs = [
  {
    q: "How quickly will I receive a response?",
    a: "Our team responds to all inquiries within 24 hours, and urgent reservation requests are prioritized.",
  },
  {
    q: "Can I reserve rooms for events?",
    a: "Yes. We support group and event reservations with tailored packages for business and private gatherings.",
  },
  {
    q: "Is WhatsApp booking support available?",
    a: "Absolutely. Use the WhatsApp icon to chat directly with our concierge for bookings and questions.",
  },
  {
    q: "Do you offer airport transfer assistance?",
    a: "Yes, our concierge can arrange private airport pickups and drop-offs upon request.",
  },
];

export default function Contact() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="hero-interior relative w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hotel-exterior.jpg"
          alt="Contact HEMNRY"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <span className="kicker kicker-center kicker-light mb-5">
            Reach Us
          </span>
          <h1 className="heading-1 page-hero-heading mb-4">Get in Touch</h1>
          <p className="font-body text-lg text-[#F9F7F2]/90">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* Info + Form split */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Dark info panel */}
          <Reveal className="bg-[#121212] text-[#F9F7F2] px-6 sm:px-10 md:px-16 py-16 md:py-24">
            <div className="max-w-md ml-auto">
              <span className="kicker kicker-light mb-6">Contact Details</span>
              <h2 className="heading-2 text-[#F9F7F2]! mb-10">
                Speak With Our Concierge
              </h2>

              <div className="space-y-6 mb-12">
                <a href="tel:+15551234567" className="flex items-center gap-4 group">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div>
                    <p className="font-body text-xs text-[#B8B0A5] uppercase tracking-wide">Phone</p>
                    <p className="font-heading text-lg text-[#F9F7F2] group-hover:text-[#D9B876] transition-colors">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </a>
                <a href="mailto:info@hemnry.com" className="flex items-center gap-4 group">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div>
                    <p className="font-body text-xs text-[#B8B0A5] uppercase tracking-wide">Email</p>
                    <p className="font-heading text-lg text-[#F9F7F2] group-hover:text-[#D9B876] transition-colors">
                      info@hemnry.com
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div>
                    <p className="font-body text-xs text-[#B8B0A5] uppercase tracking-wide">Address</p>
                    <p className="font-heading text-lg text-[#F9F7F2]">
                      123 Luxury Avenue, Prime City
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <p className="font-body text-xs text-[#C5A059] uppercase tracking-widest mb-4 flex items-center gap-3">
                  <FontAwesomeIcon icon={faClock} className="w-3.5 h-3.5" />
                  Business Hours
                </p>
                <div>
                  {hours.map((row) => (
                    <div key={row.label} className="flex justify-between py-2.5 border-b border-white/10">
                      <p className="font-body text-sm text-[#F9F7F2]/80">{row.label}</p>
                      <p className="font-body text-sm text-[#F9F7F2]">{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-body text-xs text-[#C5A059] uppercase tracking-widest mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: faFacebook, label: "Facebook" },
                    { icon: faInstagram, label: "Instagram" },
                    { icon: faTwitter, label: "Twitter" },
                    { icon: faLinkedin, label: "LinkedIn" },
                  ].map(({ icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#121212] transition-colors duration-300"
                      aria-label={label}
                    >
                      <FontAwesomeIcon icon={icon} className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form panel */}
          <Reveal delay={150} className="px-6 sm:px-10 md:px-16 py-16 md:py-24">
            <div className="max-w-md">
              <span className="kicker mb-6">Send a Message</span>
              <h2 className="heading-2 text-[#121212] mb-10">
                Tell Us How We Can Help
              </h2>

              <form className="space-y-6">
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
                      className="w-full px-4 py-3 border border-[#E8E3DA] bg-white text-[#121212] font-body placeholder-[#B8B0A5] focus:outline-none focus:border-[#C5A059] transition-colors"
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
                      className="w-full px-4 py-3 border border-[#E8E3DA] bg-white text-[#121212] font-body placeholder-[#B8B0A5] focus:outline-none focus:border-[#C5A059] transition-colors"
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
                    className="w-full px-4 py-3 border border-[#E8E3DA] bg-white text-[#121212] font-body placeholder-[#B8B0A5] focus:outline-none focus:border-[#C5A059] transition-colors"
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
                    className="w-full px-4 py-3 border border-[#E8E3DA] bg-white text-[#121212] font-body focus:outline-none focus:border-[#C5A059] transition-colors"
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
                    className="w-full px-4 py-3 border border-[#E8E3DA] bg-white text-[#121212] font-body placeholder-[#B8B0A5] focus:outline-none focus:border-[#C5A059] resize-none transition-colors"
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>

                <p className="font-body text-xs text-[#B8B0A5] text-center">
                  We&apos;ll respond to your message within 24 hours.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Find Us — map */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="kicker mb-5">Find Us</span>
              <h2 className="heading-2 text-[#121212] mb-6">
                123 Luxury Avenue
              </h2>
              <p className="font-body text-lg text-[#4A453D] mb-8 leading-relaxed">
                Prime City, ST 12345, United States — perfectly positioned for
                easy access to the city&apos;s finest attractions, dining, and
                culture.
              </p>
              <div className="flex flex-wrap gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2.5 px-4 py-3 border border-[#E8E3DA] bg-white hover:border-[#C5A059] hover:text-[#C5A059] transition-colors duration-300 font-body text-sm font-medium text-[#121212]"
                  >
                    <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150} className="relative w-full h-96 md:h-[480px] overflow-hidden border border-[#E8E3DA]">
              <iframe
                width="100%"
                height="100%"
                style={{ border: "none", filter: "grayscale(0.4) contrast(1.05)" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5432532!2d3.4!3d6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNsKwMzcnMjQuMSJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="kicker kicker-center mb-5">Good to Know</span>
            <h2 className="heading-2">Frequently Asked Questions</h2>
          </Reveal>

          <Reveal>
            {faqs.map((faq, idx) => (
              <details
                key={faq.q}
                className="group border-b border-[#E8E3DA] py-6"
              >
                <summary className="list-none cursor-pointer font-heading text-lg font-bold text-[#121212] flex items-center justify-between gap-6">
                  <span className="flex items-baseline gap-4">
                    <span className="font-body text-sm text-[#E8E3DA] font-normal">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {faq.q}
                  </span>
                  <span className="text-[#C5A059] text-xl shrink-0 group-open:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </summary>
                <p className="font-body text-[#4A453D] mt-4 pl-9 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
