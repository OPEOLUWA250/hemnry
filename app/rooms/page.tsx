import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faBellConcierge,
  faBullseye,
  faCrown,
  faArrowRight,
  faUserGroup,
  faBed,
} from "@fortawesome/free-solid-svg-icons";

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    category: "standard",
    price: 199,
    image: "/images/room-deluxe.jpg",
    capacity: 2,
    beds: "King Bed",
    amenities: [
      "Flat-screen TV",
      "Free Wi-Fi",
      "Air Conditioning",
      "Work Desk",
    ],
    description:
      "Elegantly designed rooms offering comfort and modern amenities for a pleasant stay.",
  },
  {
    id: 2,
    name: "Deluxe Room",
    category: "deluxe",
    price: 299,
    image: "/images/room-deluxe.jpg",
    capacity: 2,
    beds: "King or Twin Beds",
    amenities: [
      "City View",
      "Premium Toiletries",
      "Mini Bar",
      "Bathrobe & Slippers",
    ],
    description:
      "Spacious rooms with enhanced furnishings and exclusive amenities for the discerning traveler.",
  },
  {
    id: 3,
    name: "Executive Room",
    category: "executive",
    price: 399,
    image: "/images/room-premium.jpg",
    capacity: 2,
    beds: "King Bed",
    amenities: [
      "Lounge Access",
      "Premium Minibar",
      "Robes & Amenities",
      "Complimentary Breakfast",
    ],
    description:
      "Luxurious accommodations with executive lounge privileges and personalized service.",
  },
  {
    id: 4,
    name: "Premium Suite",
    category: "premium",
    price: 499,
    image: "/images/room-premium.jpg",
    capacity: 2,
    beds: "King Bed + Living Area",
    amenities: [
      "Separate Living Room",
      "Marble Bathroom",
      "Premium Minibar",
      "Butler Service",
    ],
    description:
      "Opulent suites featuring separate living spaces and unparalleled luxury amenities.",
  },
  {
    id: 5,
    name: "Family Suite",
    category: "family",
    price: 599,
    image: "/images/room-premium.jpg",
    capacity: 4,
    beds: "2 Bedrooms",
    amenities: [
      "Full Kitchen",
      "2 Bathrooms",
      "Living & Dining Area",
      "Kids Amenities",
    ],
    description:
      "Spacious family accommodations with multiple bedrooms and complete amenities.",
  },
];

const whyChoose = [
  {
    icon: faGem,
    title: "Premium Quality",
    description:
      "Finest linens, luxury amenities, and meticulous attention to detail in every room.",
  },
  {
    icon: faBellConcierge,
    title: "Personalized Service",
    description:
      "Our concierge team is available 24/7 to cater to your every need.",
  },
  {
    icon: faBullseye,
    title: "Perfect Location",
    description:
      "Strategically positioned for easy access to city attractions and dining.",
  },
  {
    icon: faCrown,
    title: "Exclusive Privileges",
    description:
      "Enjoy complimentary upgrades, late checkout, and special amenities.",
  },
];

export default function Rooms() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="hero-interior relative w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/room-premium.jpg"
          alt="HEMNRY Rooms"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <span className="kicker kicker-center kicker-light mb-5">
            Accommodations
          </span>
          <h1 className="heading-1 page-hero-heading mb-4">Rooms & Suites</h1>
          <p className="font-body text-lg text-[#F9F7F2]/90">
            Discover your sanctuary of elegance
          </p>
        </div>
      </section>

      {/* Rooms — editorial alternating rows instead of a uniform grid */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16 md:mb-24">
            <span className="kicker kicker-center mb-5">The Collection</span>
            <h2 className="heading-2 mb-4">Our Rooms & Suites</h2>
            <p className="font-body text-base md:text-lg text-[#4A453D] max-w-2xl mx-auto">
              Each room in our collection is carefully designed to provide the
              ultimate in comfort and luxury.
            </p>
          </Reveal>

          <div className="space-y-16 md:space-y-0">
            {rooms.map((room, idx) => (
              <Reveal
                key={room.id}
                className={`md:grid md:grid-cols-2 md:gap-12 items-center ${
                  idx !== rooms.length - 1 ? "md:pb-20 md:mb-20 md:border-b md:border-[#E8E3DA]" : ""
                }`}
              >
                <div
                  className={`relative h-80 md:h-110 overflow-hidden group ${
                    idx % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-6 left-6 font-heading text-5xl md:text-6xl text-white/90 font-bold drop-shadow-lg">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={`pt-8 md:pt-0 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className="kicker mb-4">
                    {room.category}
                  </span>
                  <h3 className="heading-2 text-[#121212] mb-4">{room.name}</h3>
                  <p className="font-body text-base text-[#4A453D] mb-6 leading-relaxed max-w-md">
                    {room.description}
                  </p>

                  <div className="flex items-center gap-6 mb-6 text-sm text-[#4A453D]">
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faUserGroup} className="text-[#C5A059]" />
                      {room.capacity} Guests
                    </span>
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faBed} className="text-[#C5A059]" />
                      {room.beds}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="font-body text-xs text-[#4A453D] border border-[#E8E3DA] px-3 py-1.5"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="font-heading text-2xl text-[#121212] font-bold">
                      ${room.price}
                      <span className="font-body text-sm font-normal text-[#B8B0A5]">
                        {" "}/night
                      </span>
                    </p>
                    <Link href={`/rooms/${room.id}`} className="btn-ghost">
                      View Details
                      <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="kicker kicker-center mb-5">The Difference</span>
            <h2 className="heading-2">Why Choose HEMNRY Rooms</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {whyChoose.map((item, idx) => (
              <Reveal key={idx} delay={idx * 100} className="flex gap-5">
                <div className="text-3xl text-[#C5A059] shrink-0">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#121212] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-[#4A453D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner relative h-[55vh] min-h-96 flex items-center justify-center">
        <Image
          src="/images/hero.png"
          alt="Book your stay at HEMNRY"
          fill
          className="object-cover -z-10"
        />
        <Reveal className="text-center px-4 max-w-2xl">
          <h2 className="heading-2 text-[#F9F7F2]! mb-6">Ready to Book?</h2>
          <p className="font-body text-lg text-[#F9F7F2]/85 mb-10">
            Secure your perfect room today and experience HEMNRY luxury.
          </p>
          <Link href="/contact" className="btn-primary">
            Reserve Your Room
          </Link>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
