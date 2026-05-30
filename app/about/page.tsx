import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faHandshake,
  faLeaf,
  faAward,
  faStar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hotel-exterior.jpg"
          alt="HEMNRY Hotels"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="heading-1 page-hero-heading mb-4">About HEMNRY</h1>
          <p className="font-body text-lg text-[#F9F7F2]">
            A Legacy of Luxury Since 1922
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="heading-2 text-[#121212] mb-6">
                A Century of Excellence
              </h2>
              <p className="font-body text-lg text-[#121212] mb-4 leading-relaxed">
                Since 1922, HEMNRY Hotels has been a symbol of timeless elegance
                and uncompromising hospitality. What began as a vision to create
                the perfect sanctuary for discerning travelers has evolved into
                a legacy spanning over a century.
              </p>
              <p className="font-body text-lg text-[#121212] mb-6 leading-relaxed">
                Every corner of HEMNRY whispers stories of distinguished guests,
                memorable moments, and the relentless pursuit of perfection. We
                don&apos;t simply offer accommodations—we craft experiences that
                become cherished memories.
              </p>
              <div className="flex gap-4">
                <div>
                  <p className="font-heading text-3xl text-[#C5A059] font-bold">
                    100+
                  </p>
                  <p className="font-body text-sm text-[#B8B0A5]">
                    Years of Service
                  </p>
                </div>
                <div>
                  <p className="font-heading text-3xl text-[#C5A059] font-bold">
                    50K+
                  </p>
                  <p className="font-body text-sm text-[#B8B0A5]">
                    Happy Guests Yearly
                  </p>
                </div>
                <div>
                  <p className="font-heading text-3xl text-[#C5A059] font-bold">
                    5⭐
                  </p>
                  <p className="font-body text-sm text-[#B8B0A5]">
                    Luxury Rating
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full overflow-hidden">
              <Image
                src="/images/hotel-exterior.jpg"
                alt="HEMNRY Heritage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-2 border-[#C5A059]" />
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-linear-to-r from-[#F9F7F2] to-[#FFEFD7] p-12 rounded-lg mb-20">
            <p className="font-heading text-3xl md:text-4xl text-[#121212] italic mb-4 leading-relaxed">
              &quot;Luxury is not about perfection—it&apos;s about creating
              spaces where every guest feels like family.&quot;
            </p>
            <p className="font-body text-lg text-[#B8B0A5]">
              — HEMNRY Philosophy
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-[#121212] mb-4">Our Core Values</h2>
            <p className="font-body text-lg text-[#5F5A52] max-w-2xl mx-auto">
              These principles guide every decision and interaction at HEMNRY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-[#E8E3DA] p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#C5A059] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon
                  icon={faCrown}
                  className="w-8 h-8 text-[#121212]"
                />
              </div>
              <h3 className="heading-3 text-[#121212] mb-4">Excellence</h3>
              <p className="font-body text-[#5F5A52]">
                We pursue perfection in every detail. From the finest Egyptian
                cotton to personalized attention, excellence is non-negotiable.
              </p>
            </div>

            <div className="bg-white border-2 border-[#E8E3DA] p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#C5A059] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon
                  icon={faHandshake}
                  className="w-8 h-8 text-[#121212]"
                />
              </div>
              <h3 className="heading-3 text-[#121212] mb-4">Authenticity</h3>
              <p className="font-body text-[#5F5A52]">
                Genuine connections matter. We celebrate honest hospitality and
                create meaningful relationships with every guest.
              </p>
            </div>

            <div className="bg-white border-2 border-[#E8E3DA] p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[#C5A059] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon
                  icon={faLeaf}
                  className="w-8 h-8 text-[#121212]"
                />
              </div>
              <h3 className="heading-3 text-[#121212] mb-4">Sustainability</h3>
              <p className="font-body text-[#5F5A52]">
                We care for our world. Committed to environmental responsibility
                and ethical practices in all we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-[#121212] mb-4">
              Leadership Excellence
            </h2>
            <p className="font-body text-lg text-[#B8B0A5] max-w-2xl mx-auto">
              Meet the visionaries who drive our mission of hospitality
              perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((person) => (
              <div key={person.name} className="group">
                <div className="relative h-72 overflow-hidden mb-6 border-2 border-[#B8B0A5] group-hover:border-[#C5A059] transition-all duration-300">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-1">
                        {person.name}
                      </h3>
                      <p className="font-body text-[#C5A059]">{person.title}</p>
                    </div>
                  </div>
                </div>
                <p className="font-body text-[#121212] text-center">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding bg-linear-to-br from-[#FFEFD7] via-[#F9F7F2] to-[#FFEFD7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-[#121212] mb-4">
              Recognized Excellence
            </h2>
            <p className="font-body text-lg text-[#B8B0A5]">
              Industry awards celebrating our commitment to luxury and service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: faStar, title: "World's Best Hotel", year: "2024" },
              {
                icon: faAward,
                title: "Michelin-Starred Restaurant",
                year: "2023-2024",
              },
              {
                icon: faCrown,
                title: "Luxury Hospitality Award",
                year: "2023",
              },
              { icon: faLeaf, title: "Sustainability Leader", year: "2024" },
            ].map((award, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#C5A059] p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-[#C5A059] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={award.icon}
                      className="w-7 h-7 text-white"
                    />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold text-[#121212] mb-2">
                  {award.title}
                </h3>
                <p className="font-body text-sm text-[#C5A059]">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-[#121212] mb-6">
            Experience HEMNRY Excellence
          </h2>
          <p className="font-body text-lg text-[#5F5A52] mb-8 max-w-2xl mx-auto">
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
              className="px-8 py-3 border-2 border-[#C5A059] text-[#C5A059] font-body font-medium hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-300 inline-flex items-center gap-2"
            >
              Get in Touch
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
