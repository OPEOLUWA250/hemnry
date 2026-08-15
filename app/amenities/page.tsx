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
  faDumbbell,
  faUtensils,
  faMartiniGlass,
  faWifi,
  faSquareParking,
  faBuilding,
  faBell,
  faPlaneDeparture,
  faShirt,
  faShieldHalved,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const amenities = [
  {
    icon: faPersonSwimming,
    title: "Swimming Pool",
    description:
      "Olympic-size infinity pool with heated water and poolside bar service.",
    availability: "Available year-round",
  },
  {
    icon: faSpa,
    title: "Spa & Wellness Center",
    description:
      "Full-service spa offering massages, facials, and wellness treatments.",
    availability: "8 AM – 10 PM daily",
  },
  {
    icon: faDumbbell,
    title: "Fitness Center",
    description:
      "State-of-the-art gym with personal trainers and group fitness classes.",
    availability: "24/7 access",
  },
  {
    icon: faUtensils,
    title: "Fine Dining",
    description: "Award-winning restaurant with Michelin-inspired cuisine.",
    availability: "Lunch & Dinner",
  },
  {
    icon: faMartiniGlass,
    title: "Bar & Lounge",
    description:
      "Sophisticated bar with signature cocktails and premium spirits.",
    availability: "5 PM – 2 AM daily",
  },
  {
    icon: faWifi,
    title: "Free High-Speed Wi-Fi",
    description:
      "Complimentary Wi-Fi throughout the hotel with excellent coverage.",
    availability: "All areas",
  },
  {
    icon: faSquareParking,
    title: "Valet Parking",
    description: "Professional valet service and secure underground parking.",
    availability: "24/7",
  },
  {
    icon: faBuilding,
    title: "Event Halls",
    description:
      "Multiple banquet rooms for conferences, weddings, and celebrations.",
    availability: "Available daily",
  },
  {
    icon: faBell,
    title: "24/7 Concierge",
    description:
      "Expert concierge team available around the clock for assistance.",
    availability: "Always available",
  },
  {
    icon: faPlaneDeparture,
    title: "Airport Pickup",
    description: "Convenient airport transfer service to and from the hotel.",
    availability: "By arrangement",
  },
  {
    icon: faShirt,
    title: "Laundry Service",
    description: "Professional laundry and dry cleaning services available.",
    availability: "Same-day service",
  },
  {
    icon: faShieldHalved,
    title: "Security Services",
    description:
      "Professional security team ensuring guest safety and privacy.",
    availability: "24/7",
  },
];

const facilities = [
  {
    title: "Meeting Rooms",
    description:
      "Fully equipped conference rooms with modern technology and catering services.",
    features: [
      "Video conferencing",
      "High-speed internet",
      "Conference equipment",
    ],
  },
  {
    title: "Business Center",
    description:
      "Complete office services including printing, faxing, and secretarial support.",
    features: ["Computer access", "Printing services", "Private office space"],
  },
  {
    title: "Event Halls",
    description:
      "Multiple banquet rooms accommodating from 20 to 500 guests.",
    features: [
      "Flexible layouts",
      "Professional catering",
      "Audio/visual support",
    ],
  },
  {
    title: "Concierge Services",
    description:
      "Expert assistance with reservations, bookings, and local arrangements.",
    features: ["Restaurant reservations", "Transportation", "Local recommendations"],
  },
];

export default function Amenities() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="hero-interior relative w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/spa.jpg"
          alt="HEMNRY Amenities"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <span className="kicker kicker-center kicker-light mb-5">
            Facilities
          </span>
          <h1 className="heading-1 page-hero-heading mb-4">
            Amenities & Services
          </h1>
          <p className="font-body text-lg text-[#F9F7F2]/90">
            Everything you need for a perfect stay
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="kicker kicker-center mb-5">At Your Service</span>
            <h2 className="heading-2 mb-4">World-Class Facilities</h2>
            <p className="font-body text-base md:text-lg text-[#4A453D] max-w-2xl mx-auto">
              From relaxation to recreation, HEMNRY provides comprehensive
              amenities to enhance your stay.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E3DA]">
            {amenities.map((amenity, idx) => (
              <Reveal key={idx} delay={(idx % 3) * 100} className="card-quiet p-8">
                <FontAwesomeIcon icon={amenity.icon} className="text-3xl text-[#C5A059] mb-5" />
                <h3 className="heading-3 text-[#121212] mb-2">
                  {amenity.title}
                </h3>
                <p className="font-body text-sm text-[#4A453D] mb-4">
                  {amenity.description}
                </p>
                <p className="font-body text-xs font-medium text-[#C5A059] uppercase tracking-wide">
                  {amenity.availability}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal className="relative h-96 md:h-112.5">
              <Image
                src="/images/spa.jpg"
                alt="Spa & Wellness"
                fill
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={150}>
              <span className="kicker mb-5">Wellness</span>
              <h2 className="heading-2 text-[#121212] mb-6">Spa & Wellness</h2>
              <p className="font-body text-lg text-[#4A453D] mb-8 leading-relaxed">
                Our world-renowned spa offers a sanctuary for relaxation and
                rejuvenation. Our experienced therapists provide personalized
                treatments using premium products.
              </p>
              <ul>
                {[
                  "Swedish and deep tissue massages",
                  "Facials and skincare treatments",
                  "Hot stone therapy",
                  "Aromatherapy sessions",
                  "Wellness consultations",
                ].map((service) => (
                  <li key={service} className="flex items-start gap-3 py-3 border-b border-[#E8E3DA] last:border-0">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#C5A059] mt-1 w-3.5 h-3.5"
                    />
                    <span className="font-body text-[#121212]">{service}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Business Facilities */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="kicker kicker-center mb-5">For Business</span>
            <h2 className="heading-2">Business Facilities</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E3DA]">
            {facilities.map((facility, idx) => (
              <Reveal key={idx} delay={(idx % 2) * 100} className="bg-[#F9F7F2] p-8">
                <h3 className="heading-3 text-[#121212] mb-3">
                  {facility.title}
                </h3>
                <p className="font-body text-[#4A453D] mb-5">
                  {facility.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature) => (
                    <span
                      key={feature}
                      className="font-body text-xs text-[#4A453D] border border-[#E8E3DA] bg-white px-3 py-1.5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner relative h-[55vh] min-h-96 flex items-center justify-center">
        <Image
          src="/images/pool.jpg"
          alt="Experience HEMNRY amenities"
          fill
          className="object-cover -z-10"
        />
        <Reveal className="text-center px-4 max-w-2xl">
          <h2 className="heading-2 text-[#F9F7F2]! mb-6">
            Experience Our Amenities
          </h2>
          <p className="font-body text-lg text-[#F9F7F2]/85 mb-10">
            Book your stay now and enjoy all that HEMNRY has to offer.
          </p>
          <Link href="/rooms" className="btn-primary">
            Book Your Stay
          </Link>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
