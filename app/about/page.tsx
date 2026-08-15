import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faHandshake,
  faLeaf,
  faAward,
  faStar,
  faArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  { value: "100+", label: "Years of Service" },
  { value: "50K+", label: "Happy Guests Yearly" },
  { value: "5.0", label: "Luxury Rating" },
];

const values = [
  {
    number: "01",
    icon: faCrown,
    title: "Excellence",
    description:
      "We pursue perfection in every detail. From the finest Egyptian cotton to personalized attention, excellence is non-negotiable.",
  },
  {
    number: "02",
    icon: faHandshake,
    title: "Authenticity",
    description:
      "Genuine connections matter. We celebrate honest hospitality and create meaningful relationships with every guest.",
  },
  {
    number: "03",
    icon: faLeaf,
    title: "Sustainability",
    description:
      "We care for our world. Committed to environmental responsibility and ethical practices in all we do.",
  },
];

const leaders = [
  {
    name: "Elena Roussi",
    title: "Founder & CEO",
    bio: "30+ years in luxury hospitality",
    image: "/images/hotel-exterior.jpg",
  },
  {
    name: "Marcus Chen",
    title: "Executive Chef",
    bio: "Michelin-starred culinary artist",
    image: "/images/kitchen.jpg",
  },
  {
    name: "Victoria Lopez",
    title: "Director of Guest Experience",
    bio: "Specialist in personalized service",
    image: "/images/spa.jpg",
  },
];

const awards = [
  { icon: faStar, title: "World's Best Hotel", year: "2024" },
  { icon: faAward, title: "Michelin-Starred Restaurant", year: "2023-2024" },
  { icon: faCrown, title: "Luxury Hospitality Award", year: "2023" },
  { icon: faLeaf, title: "Sustainability Leader", year: "2024" },
];

export default function About() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="hero-interior relative w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hotel-exterior.jpg"
          alt="HEMNRY Hotels"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <span className="kicker kicker-center kicker-light mb-5">
            Our Story
          </span>
          <h1 className="heading-1 page-hero-heading mb-4">About HEMNRY</h1>
          <p className="font-body text-lg text-[#F9F7F2]/90">
            A Legacy of Luxury Since 1922
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <Reveal>
              <span className="kicker mb-5">Since 1922</span>
              <h2 className="heading-2 text-[#121212] mb-6">
                A Century of Excellence
              </h2>
              <p className="font-body text-lg text-[#4A453D] mb-4 leading-relaxed">
                Since 1922, HEMNRY Hotels has been a symbol of timeless elegance
                and uncompromising hospitality. What began as a vision to create
                the perfect sanctuary for discerning travelers has evolved into
                a legacy spanning over a century.
              </p>
              <p className="font-body text-lg text-[#4A453D] mb-10 leading-relaxed">
                Every corner of HEMNRY whispers stories of distinguished guests,
                memorable moments, and the relentless pursuit of perfection. We
                don&apos;t simply offer accommodations—we craft experiences that
                become cherished memories.
              </p>
              <div className="flex gap-8 md:gap-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-[#C5A059] pl-4">
                    <p className="font-heading text-3xl md:text-4xl text-[#121212] font-bold leading-none mb-2">
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-[#B8B0A5] uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150} className="relative h-96 md:h-full">
              <div className="relative min-h-96 md:h-140 overflow-hidden">
                <Image
                  src="/images/hotel-exterior.jpg"
                  alt="HEMNRY Heritage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block w-32 h-32 border border-[#C5A059] -z-10" />
            </Reveal>
          </div>

          {/* Philosophy */}
          <Reveal>
            <div className="relative bg-[#121212] p-12 md:p-16 text-center">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-[#2A2A2A] w-16 h-16 mx-auto mb-6"
              />
              <p className="font-heading text-2xl md:text-4xl text-[#F9F7F2] italic mb-6 leading-relaxed max-w-3xl mx-auto">
                &quot;Luxury is not about perfection—it&apos;s about creating
                spaces where every guest feels like family.&quot;
              </p>
              <p className="font-body text-sm text-[#D9B876] uppercase tracking-wider">
                HEMNRY Philosophy
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="kicker kicker-center mb-5">What Guides Us</span>
            <h2 className="heading-2 text-[#121212] mb-4">Our Core Values</h2>
            <p className="font-body text-lg text-[#4A453D] max-w-2xl mx-auto">
              These principles guide every decision and interaction at HEMNRY
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E3DA]">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 120} className="bg-[#F9F7F2] p-10">
                <div className="flex items-start justify-between mb-8">
                  <FontAwesomeIcon
                    icon={value.icon}
                    className="w-7 h-7 text-[#C5A059]"
                  />
                  <span className="font-heading text-4xl text-[#E8E3DA] font-bold">
                    {value.number}
                  </span>
                </div>
                <h3 className="heading-3 text-[#121212] mb-4">{value.title}</h3>
                <p className="font-body text-[#4A453D] leading-relaxed">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="kicker kicker-center mb-5">The People</span>
            <h2 className="heading-2 text-[#121212] mb-4">
              Leadership Excellence
            </h2>
            <p className="font-body text-lg text-[#4A453D] max-w-2xl mx-auto">
              Meet the visionaries who drive our mission of hospitality
              perfection
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((person, idx) => (
              <Reveal key={person.name} delay={idx * 120} className="group">
                <div className="relative h-80 overflow-hidden mb-6">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-1">
                        {person.name}
                      </h3>
                      <p className="font-body text-[#D9B876] text-sm uppercase tracking-wide">
                        {person.title}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-body text-[#4A453D] text-center">
                  {person.bio}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <span className="kicker kicker-center kicker-light mb-5">
              Recognition
            </span>
            <h2 className="heading-2 text-[#F9F7F2]! mb-4">
              Recognized Excellence
            </h2>
            <p className="font-body text-lg text-[#B8B0A5]">
              Industry awards celebrating our commitment to luxury and service
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#2A2A2A]">
            {awards.map((award, idx) => (
              <Reveal key={idx} delay={idx * 100} className="bg-[#121212] p-8 text-center group">
                <FontAwesomeIcon
                  icon={award.icon}
                  className="w-8 h-8 text-[#C5A059] mb-5 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-heading text-lg font-bold text-[#F9F7F2] mb-2">
                  {award.title}
                </h3>
                <p className="font-body text-sm text-[#D9B876]">{award.year}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — full-bleed image band */}
      <section className="cta-banner relative h-[55vh] min-h-96 flex items-center justify-center">
        <Image
          src="/images/room-premium.jpg"
          alt="HEMNRY Suites"
          fill
          className="object-cover -z-10"
        />
        <Reveal className="text-center px-4 max-w-2xl">
          <h2 className="heading-2 text-[#F9F7F2]! mb-6">
            Experience HEMNRY Excellence
          </h2>
          <p className="font-body text-lg text-[#F9F7F2]/85 mb-10">
            Join thousands of satisfied guests who have discovered the HEMNRY
            difference. Whether you&apos;re seeking a luxurious escape or
            planning an unforgettable event, we&apos;re ready to exceed your
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/rooms"
              className="btn-primary inline-flex items-center gap-2"
            >
              Explore Rooms
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="btn-glass inline-flex items-center gap-2"
            >
              Get in Touch
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
