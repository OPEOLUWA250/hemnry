import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faBellConcierge,
  faBullseye,
  faCrown,
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

export default function Rooms() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/room-premium.jpg"
          alt="HEMNRY Rooms"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="heading-1 page-hero-heading mb-4">Rooms & Suites</h1>
          <p className="font-body text-lg text-[#F9F7F2]">
            Discover your sanctuary of elegance
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Collection</h2>
            <p className="font-body text-base md:text-lg text-[#B8B0A5] max-w-2xl mx-auto">
              Each room in our collection is carefully designed to provide the
              ultimate in comfort and luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <Link key={room.id} href={`/rooms/${room.id}`}>
                <div className="group cursor-pointer border-2 border-[#B8B0A5] overflow-hidden">
                  <div className="relative h-96 md:h-125 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#121212] mb-2">
                      {room.name}
                    </h3>
                    <p className="font-body text-base text-[#C5A059] mb-4">
                      From ${room.price}/night
                    </p>
                    <span className="font-body text-sm font-medium text-[#121212] hover:text-[#C5A059] transition-colors duration-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">
            Why Choose HEMNRY Rooms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
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
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-3xl text-[#C5A059]">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div>
                  <h3 className="heading-3 text-[#121212] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-[#121212]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-[#121212] mb-6">Ready to Book?</h2>
          <p className="font-body text-lg text-[#5F5A52] mb-8">
            Secure your perfect room today and experience HEMNRY luxury.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Reserve Your Room
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
