import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
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
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section - Full Screen Image */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="HEMNRY Luxury Hotel"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="heading-1 text-white mb-4">The Experience</h1>
          <p className="font-body text-lg md:text-xl text-[#F9F7F2] mb-8">
            Discover luxury redefined. Experience unparalleled hospitality and
            world-class dining at HEMNRY.
          </p>
          <Link href="/rooms" className="btn-primary inline-block">
            Explore Rooms
          </Link>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 md:py-32 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Text Column - 40% */}
            <div className="md:col-span-2">
              <h2 className="heading-2 text-[#121212] mb-6">
                A century of Quiet Excellence
              </h2>
              <p className="font-body text-base md:text-lg text-[#121212] mb-8 leading-relaxed">
                Since our founding, HEMNRY has been the sanctuary of discerning
                travelers who seek more than comfort—they seek a philosophy. Our
                heritage is woven into every thread, every detail, every moment
                you spend with us. We honor the past while embracing the future,
                creating timeless experiences that transcend generations.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#C5A059] font-body font-medium border-b-2 border-[#C5A059] pb-1 hover:text-[#D4B575] hover:border-[#D4B575] transition-colors duration-300"
              >
                Discover our Heritage
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </Link>
            </div>

            {/* Image Column - 60% */}
            <div className="md:col-span-3">
              <div className="relative min-h-96 md:h-[500px] lg:h-[600px]">
                <Image
                  src="/images/hero.jpg"
                  alt="HEMNRY Heritage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border-2 border-[#C5A059]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="py-20 md:py-32 bg-[#FFEFD7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Unrivalled Leisure</h2>
            <p className="font-body text-base md:text-lg text-[#B8B0A5] max-w-2xl mx-auto">
              Each room tells a story of elegance and comfort. Discover our
              carefully curated collection of accommodations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Standard Room",
                price: "$199",
                image: "/images/room-deluxe.jpg",
              },
              {
                name: "Deluxe Room",
                price: "$299",
                image: "/images/room-deluxe.jpg",
              },
              {
                name: "Premium Suite",
                price: "$499",
                image: "/images/room-premium.jpg",
              },
            ].map((room) => (
              <div
                key={room.name}
                className="group cursor-pointer border-2 border-[#B8B0A5] overflow-hidden"
              >
                <div className="relative h-96 md:h-[500px] overflow-hidden">
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
                    From {room.price}/night
                  </p>
                  <Link
                    href="/rooms"
                    className="font-body text-sm font-medium text-[#121212] hover:text-[#C5A059] transition-colors duration-300"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/rooms" className="btn-primary">
              Explore All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Highlights */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-2 text-center mb-12">World-Class Amenities</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: faPersonSwimming, name: "Swimming Pool" },
              { icon: faSpa, name: "Spa & Wellness" },
              { icon: faUtensils, name: "Fine Dining" },
              { icon: faDumbbell, name: "Fitness Center" },
              { icon: faWifi, name: "Free Wi-Fi" },
              { icon: faSquareParking, name: "Parking" },
              { icon: faBuilding, name: "Event Halls" },
              { icon: faBell, name: "24/7 Concierge" },
            ].map((amenity) => (
              <div key={amenity.name} className="text-center">
                <div className="text-5xl md:text-6xl mb-3 text-[#C5A059]">
                  <FontAwesomeIcon icon={amenity.icon} />
                </div>
                <p className="font-body text-sm font-medium text-[#121212]">
                  {amenity.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant & Bar Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Culinary Excellence</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-3 text-[#121212] mb-4">
                The Henry Grill & Bar
              </h3>
              <p className="font-body text-base text-[#121212] mb-6 leading-relaxed">
                Experience the pinnacle of culinary artistry at The Henry Grill
                & Bar. Our award-winning chefs craft exquisite dishes using the
                finest local and international ingredients.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-[#C5A059] mt-1"
                  />
                  <span className="font-body text-sm text-[#121212]">
                    Michelin-inspired cuisine
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-[#C5A059] mt-1"
                  />
                  <span className="font-body text-sm text-[#121212]">
                    Curated wine selection
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-[#C5A059] mt-1"
                  />
                  <span className="font-body text-sm text-[#121212]">
                    Signature cocktails
                  </span>
                </li>
              </ul>
              <Link href="/restaurant" className="btn-secondary inline-block">
                Explore Menu
              </Link>
            </div>

            <div className="relative h-80 md:h-96">
              <Image
                src="/images/restaurant.jpg"
                alt="The Henry Grill & Bar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-[#121212] mb-4">
              Guest Testimonials
            </h2>
            <p className="font-body text-[#B8B0A5] text-base">
              Voices of those who have experienced HEMNRY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
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
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#F9F7F2] border-l-4 border-[#C5A059]"
              >
                <p className="font-body text-base text-[#121212] mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-body text-sm font-medium text-[#C5A059]">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 md:py-32 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Location Info - Left Column */}
            <div className="flex flex-col">
              <h2 className="heading-2 text-[#121212] mb-8">Location</h2>

              <div className="space-y-6 mb-12">
                <div className="border-l-4 border-[#C5A059] pl-6">
                  <p className="font-body text-sm text-[#C5A059] uppercase tracking-wider mb-2">
                    Address
                  </p>
                  <p className="font-heading text-base text-[#121212]">
                    123 Luxury Avenue, Premium City
                  </p>
                </div>

                <div className="border-l-4 border-[#C5A059] pl-6">
                  <p className="font-body text-sm text-[#C5A059] uppercase tracking-wider mb-2">
                    Phone
                  </p>
                  <p className="font-heading text-base text-[#121212]">
                    +1 (555) 123-4567
                  </p>
                </div>

                <div className="border-l-4 border-[#C5A059] pl-6">
                  <p className="font-body text-sm text-[#C5A059] uppercase tracking-wider mb-2">
                    Email
                  </p>
                  <p className="font-heading text-base text-[#121212]">
                    hello@hemnry.com
                  </p>
                </div>
              </div>

              <div>
                <p className="font-body text-sm text-[#C5A059] uppercase tracking-wider mb-4">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-colors duration-300"
                    aria-label="facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-colors duration-300"
                    aria-label="instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-colors duration-300"
                    aria-label="twitter"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-colors duration-300"
                    aria-label="linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map - Right Column */}
            <div className="flex flex-col">
              <div className="relative w-full h-96 md:h-[600px] shadow-2xl overflow-hidden border-2 border-[#C5A059] border-opacity-20 hover:shadow-2xl transition-shadow duration-500">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5432532!2d3.4!3d6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNsKwMzcnMjQuMSJOIDPCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-[#F9F7F2] mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="font-body text-lg text-[#B8B0A5] mb-8">
            Your perfect getaway awaits. Reserve your room today or get in touch
            with our concierge team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rooms" className="btn-primary">
              Book Now
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
