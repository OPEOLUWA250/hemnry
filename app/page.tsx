import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonSwimming,
  faSpa,
  faUtensils,
  faDumbbell,
  faWifi,
  faSquareParking,
  faBuilding,
  faBell,
  faArrowRight,
  faArrowDown,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

const featuredRooms = [
  {
    name: "Premium Suite",
    price: "$499",
    image: "/images/room-premium.jpg",
    tag: "Signature",
  },
  {
    name: "Standard Room",
    price: "$199",
    image: "/images/room-deluxe.jpg",
    tag: "Essentials",
  },
  {
    name: "Deluxe Room",
    price: "$299",
    image: "/images/room-deluxe.jpg",
    tag: "Elevated",
  },
];

const testimonials = [
  {
    quote:
      "In HEMNRY, time seems to slow down. It's the only place where I feel truly disconnected from the noise of the world while remaining perfectly cared for. A rare gem of heritage and modernity.",
    author: "The Concierge Archives",
  },
  {
    quote:
      "Hospitality at its finest. The attention to detail is extraordinary, from the moment you arrive until you depart.",
    author: "Sarah Anderson",
  },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section - Full Screen Image */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="HEMNRY Luxury Hotel"
          fill
          className="object-cover absolute inset-0 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="kicker kicker-center kicker-light mb-6">
            Est. 1922
          </span>
          <h1 className="heading-1 text-[#F9F7F2]! mb-6">The Experience</h1>
          <p className="font-body text-lg md:text-xl text-[#F9F7F2]/90 mb-10 max-w-xl mx-auto leading-relaxed">
            Discover luxury redefined. Experience unparalleled hospitality and
            world-class dining at HEMNRY.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rooms" className="btn-primary">
              Explore Rooms
            </Link>
            <Link href="/contact" className="btn-glass">
              Reserve a Table
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F9F7F2]/70 animate-bounce">
          <FontAwesomeIcon icon={faArrowDown} className="w-4 h-4" />
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 md:py-32 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Text Column - 40% */}
            <Reveal className="md:col-span-2">
              <span className="kicker mb-5">Our Story</span>
              <h2 className="heading-2 text-[#121212] mb-6">
                A century of Quiet Excellence
              </h2>
              <p className="font-body text-base md:text-lg text-[#4A453D] mb-8 leading-relaxed">
                Since our founding, HEMNRY has been the sanctuary of discerning
                travelers who seek more than comfort—they seek a philosophy. Our
                heritage is woven into every thread, every detail, every moment
                you spend with us. We honor the past while embracing the future,
                creating timeless experiences that transcend generations.
              </p>
              <Link href="/about" className="btn-ghost">
                Discover our Heritage
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </Link>
            </Reveal>

            {/* Image Column - 60% */}
            <Reveal delay={150} className="md:col-span-3">
              <div className="relative">
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full border border-[#C5A059] -z-10" />
                <div className="relative min-h-96 md:h-[520px] lg:h-[600px] overflow-hidden">
                  <Image
                    src="/images/hero.png"
                    alt="HEMNRY Heritage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rooms Preview Section — one featured suite + two supporting rooms */}
      <section className="py-20 md:py-32 bg-[#FFEFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <Reveal className="text-center mb-14">
            <span className="kicker kicker-center mb-5">Accommodations</span>
            <h2 className="heading-2 mb-4">Unrivalled Leisure</h2>
            <p className="font-body text-base md:text-lg text-[#4A453D] max-w-2xl mx-auto">
              Each room tells a story of elegance and comfort. Discover our
              carefully curated collection of accommodations.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 mb-12">
            {featuredRooms.map((room, idx) => (
              <Reveal
                key={room.name}
                delay={idx * 120}
                className={idx === 0 ? "md:col-span-2 md:row-span-2" : ""}
              >
                <Link href="/rooms" className="group cursor-pointer card-quiet block overflow-hidden h-full">
                  <div
                    className={`relative overflow-hidden ${
                      idx === 0 ? "h-96 md:h-full md:min-h-[420px]" : "h-56 md:h-[240px]"
                    }`}
                  >
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-black/0" />
                    <span className="absolute top-4 left-4 kicker kicker-light gap-2! text-[10px]">
                      {room.tag}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-1">
                        {room.name}
                      </h3>
                      <p className="font-body text-sm text-[#D9B876] mb-2">
                        From {room.price}/night
                      </p>
                      <span className="font-body text-xs font-medium text-white/80 group-hover:text-white inline-flex items-center gap-2 transition-colors">
                        View Details
                        <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center">
            <Link href="/rooms" className="btn-primary">
              Explore All Rooms
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Amenities Highlights — quiet icon row instead of badge grid */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="kicker kicker-center mb-5">In-House</span>
            <h2 className="heading-2">World-Class Amenities</h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: faPersonSwimming, name: "Swimming Pool" },
              { icon: faSpa, name: "Spa & Wellness" },
              { icon: faUtensils, name: "Fine Dining" },
              { icon: faDumbbell, name: "Fitness Center" },
              { icon: faWifi, name: "Free Wi-Fi" },
              { icon: faSquareParking, name: "Parking" },
              { icon: faBuilding, name: "Event Halls" },
              { icon: faBell, name: "24/7 Concierge" },
            ].map((amenity, idx) => (
              <Reveal
                key={amenity.name}
                delay={(idx % 4) * 80}
                className="text-center py-8 border-b border-r border-[#E8E3DA] [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0"
              >
                <div className="text-4xl md:text-5xl mb-3 text-[#C5A059]">
                  <FontAwesomeIcon icon={amenity.icon} />
                </div>
                <p className="font-body text-sm font-medium text-[#121212]">
                  {amenity.name}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant & Bar Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <Reveal>
              <span className="kicker mb-5">Dining</span>
              <h3 className="heading-2 text-[#121212] mb-6">
                The Henry Grill & Bar
              </h3>
              <p className="font-body text-base text-[#4A453D] mb-8 leading-relaxed">
                Experience the pinnacle of culinary artistry at The Henry Grill
                & Bar. Our award-winning chefs craft exquisite dishes using the
                finest local and international ingredients.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Michelin-inspired cuisine",
                  "Curated wine selection",
                  "Signature cocktails",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 pb-4 border-b border-[#E8E3DA] last:border-0 last:pb-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                    <span className="font-body text-sm text-[#121212]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/restaurant" className="btn-secondary inline-block">
                Explore Menu
              </Link>
            </Reveal>

            <Reveal delay={150} className="relative h-80 md:h-[460px]">
              <Image
                src="/images/restaurant.jpg"
                alt="The Henry Grill & Bar"
                fill
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section — dark editorial band for rhythm contrast */}
      <section className="py-24 md:py-36 bg-[#121212] relative overflow-hidden">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="absolute top-10 left-1/2 -translate-x-1/2 text-[#2A2A2A] w-32 h-32 md:w-48 md:h-48"
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 relative">
          <Reveal className="text-center mb-4">
            <span className="kicker kicker-center kicker-light">
              Guest Voices
            </span>
          </Reveal>

          {testimonials.map((testimonial, idx) => (
            <Reveal
              key={idx}
              delay={idx * 150}
              className={`text-center ${idx === 0 ? "mt-10 mb-14" : "opacity-80!"}`}
            >
              <p
                className={`font-heading italic text-[#F9F7F2] leading-snug mb-5 ${
                  idx === 0 ? "text-2xl md:text-4xl" : "text-lg md:text-xl"
                }`}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="font-body text-sm font-medium text-[#D9B876] uppercase tracking-wider">
                — {testimonial.author}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-32 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Location Info - Left Column */}
            <Reveal className="flex flex-col">
              <span className="kicker mb-5">Find Us</span>
              <h2 className="heading-2 text-[#121212] mb-10">Location</h2>

              <div className="mb-12">
                {[
                  { label: "Address", value: "123 Luxury Avenue, Premium City" },
                  { label: "Phone", value: "+1 (555) 123-4567" },
                  { label: "Email", value: "hello@hemnry.com" },
                ].map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-6 py-4 border-b border-[#E8E3DA]">
                    <p className="font-body text-xs text-[#C5A059] uppercase tracking-wider shrink-0">
                      {row.label}
                    </p>
                    <p className="font-heading text-base text-[#121212] text-right">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-body text-sm text-[#C5A059] uppercase tracking-wider mb-4">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((label) => (
                    <a
                      key={label}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-colors duration-300 text-xs font-body font-medium"
                      aria-label={label}
                    >
                      {label.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Map - Right Column */}
            <Reveal delay={150} className="flex flex-col">
              <div className="relative w-full h-96 md:h-[560px] overflow-hidden border border-[#E8E3DA]">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: "none", filter: "grayscale(0.4) contrast(1.05)" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5432532!2d3.4!3d6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNsKwMzcnMjQuMSJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section — full-bleed image band */}
      <section className="cta-banner relative h-[60vh] min-h-[26rem] flex items-center justify-center">
        <Image
          src="/images/hotel-exterior.jpg"
          alt="HEMNRY Hotels at dusk"
          fill
          className="object-cover -z-10"
        />
        <Reveal className="text-center px-4 max-w-2xl">
          <span className="kicker kicker-center kicker-light mb-6">
            Your Escape Awaits
          </span>
          <h2 className="heading-2 text-[#F9F7F2]! mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="font-body text-lg text-[#F9F7F2]/85 mb-10">
            Your perfect getaway awaits. Reserve your room today or get in touch
            with our concierge team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rooms" className="btn-primary">
              Book Now
            </Link>
            <Link href="/contact" className="btn-glass">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>
      <Footer />
    </>
  );
}
