import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUtensils,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

const galleryImages = [
  {
    id: 1,
    category: "rooms",
    title: "Premium Suite",
    image: "/images/room-premium.jpg",
  },
  {
    id: 2,
    category: "dining",
    title: "Fine Dining",
    image: "/images/restaurant.jpg",
  },
  {
    id: 3,
    category: "rooms",
    title: "Deluxe Room",
    image: "/images/room-deluxe.jpg",
  },
  {
    id: 4,
    category: "amenities",
    title: "Spa & Wellness",
    image: "/images/spa.jpg",
  },
  { id: 5, category: "bar", title: "Bar & Lounge", image: "/images/bar.jpg" },
  {
    id: 6,
    category: "exterior",
    title: "Hotel Exterior",
    image: "/images/hotel-exterior.jpg",
  },
  {
    id: 7,
    category: "amenities",
    title: "Swimming Pool",
    image: "/images/pool.jpg",
  },
  {
    id: 8,
    category: "events",
    title: "Event Space",
    image: "/images/event-space.jpg",
  },
];

export default function Gallery() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="HEMNRY Gallery"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="heading-1 page-hero-heading mb-4">Gallery</h1>
          <p className="font-body text-lg text-[#F9F7F2]">
            Explore the beauty and elegance of HEMNRY
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Visual Story</h2>
            <p className="font-body text-base md:text-lg text-[#B8B0A5] max-w-2xl mx-auto">
              Experience the luxury and elegance of HEMNRY through our carefully
              curated collection of images.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-6">
            {galleryImages.map((item, idx) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden cursor-pointer ${
                  idx === 0 || idx === 5 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${idx === 0 || idx === 5 ? "h-96 md:h-[500px]" : "h-64 md:h-80"}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-heading text-2xl text-white font-bold">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Categories Info */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Featured Collections</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rooms & Suites",
                description:
                  "Experience the comfort and elegance of our carefully designed accommodations.",
                icon: faBed,
                count: "5 Categories",
              },
              {
                title: "Dining & Bar",
                description:
                  "Discover the culinary excellence and vibrant atmosphere of our venues.",
                icon: faUtensils,
                count: "2 Venues",
              },
              {
                title: "Amenities & Facilities",
                description:
                  "Explore our world-class facilities designed for your comfort and leisure.",
                icon: faBuilding,
                count: "8+ Amenities",
              },
            ].map((collection, idx) => (
              <div key={idx} className="bg-white p-8 text-center">
                <div className="text-5xl mb-4 text-[#C5A059]">
                  <FontAwesomeIcon icon={collection.icon} />
                </div>
                <h3 className="heading-3 text-[#121212] mb-3">
                  {collection.title}
                </h3>
                <p className="font-body text-sm text-[#B8B0A5] mb-4">
                  {collection.description}
                </p>
                <p className="font-body text-xs font-medium text-[#C5A059] uppercase">
                  {collection.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-[#121212] mb-6">Ready to Visit?</h2>
          <p className="font-body text-lg text-[#5F5A52] mb-8">
            Book your stay at HEMNRY and experience the luxury first-hand.
          </p>
          <a href="/rooms" className="btn-primary inline-block">
            Explore Rooms
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
