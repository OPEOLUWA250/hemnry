import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";

const dishes = [
  {
    name: "Pan-Seared Diver Scallops",
    description:
      "Delicate scallops with buerre blanc, seasonal vegetables, and microgreens",
    price: "$38",
  },
  {
    name: "Prime Ribeye Steak",
    description:
      "16oz USDA Prime cut with truffle butter, roasted potatoes, and asparagus",
    price: "$65",
  },
  {
    name: "Mediterranean Sea Bass",
    description:
      "Whole roasted sea bass with olive oil, lemon, and fresh herbs",
    price: "$48",
  },
  {
    name: "Lobster Thermidor",
    description:
      "Classic preparation with cognac, mustard sauce, and gratin",
    price: "$55",
  },
];

const cocktails = [
  {
    name: "The Henry Martini",
    description:
      "Premium vodka, dry vermouth, and a twist of lemon essence",
  },
  {
    name: "Gold Reserve Old Fashioned",
    description: "Bourbon, bitters, sugar, and a hint of orange zest",
  },
  {
    name: "Luxe Mojito",
    description:
      "White rum, fresh mint, lime, soda, and premium ingredients",
  },
  {
    name: "The Presidential Martini",
    description: "Gin, vermouth, olives, and served with distinction",
  },
];

export default function Restaurant() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="hero-interior relative w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/restaurant.jpg"
          alt="Fine Dining at HEMNRY"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <span className="kicker kicker-center kicker-light mb-5">
            Dining & Bar
          </span>
          <h1 className="heading-1 page-hero-heading mb-4">
            Culinary Excellence
          </h1>
          <p className="font-body text-lg text-[#F9F7F2]/90">
            An unforgettable dining experience awaits
          </p>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <Reveal className="relative h-96 md:h-112.5">
              <Image
                src="/images/restaurant.jpg"
                alt="The Henry Grill & Bar"
                fill
                className="object-cover"
              />
            </Reveal>
            <Reveal delay={150}>
              <span className="kicker mb-5">Restaurant</span>
              <h2 className="heading-2 text-[#121212] mb-6">
                The Henry Grill & Bar
              </h2>
              <p className="font-body text-lg text-[#4A453D] mb-8 leading-relaxed">
                Experience the pinnacle of culinary artistry at The Henry Grill
                & Bar. Our award-winning chefs craft exquisite dishes using the
                finest local and international ingredients, combined with
                impeccable wine pairings.
              </p>
              <ul className="mb-8">
                {[
                  "Michelin-inspired cuisine",
                  "Curated wine selection from around the world",
                  "Signature cocktails by our master mixologists",
                  "Seasonal menu updates",
                  "Private dining options available",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3 border-b border-[#E8E3DA] last:border-0">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#C5A059] mt-1 w-3.5 h-3.5"
                    />
                    <span className="font-body text-[#121212]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-10 border-l-2 border-[#C5A059] pl-5">
                <div>
                  <p className="font-body text-xs text-[#B8B0A5] uppercase tracking-wide mb-1">
                    Lunch
                  </p>
                  <p className="font-heading font-bold text-[#121212]">
                    12:00 PM – 3:00 PM
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs text-[#B8B0A5] uppercase tracking-wide mb-1">
                    Dinner
                  </p>
                  <p className="font-heading font-bold text-[#121212]">
                    6:00 PM – 11:00 PM
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Menu Preview */}
          <Reveal>
            <span className="kicker mb-5">Tasting Menu</span>
            <h3 className="heading-2 text-[#121212] mb-10">Featured Dishes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {dishes.map((dish, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 py-6 border-b border-[#E8E3DA]"
                >
                  <span className="font-heading text-2xl text-[#E8E3DA] font-bold leading-none pt-1">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-4 mb-1">
                      <h4 className="font-heading text-lg font-bold text-[#121212]">
                        {dish.name}
                      </h4>
                      <span className="font-body font-medium text-[#C5A059] shrink-0">
                        {dish.price}
                      </span>
                    </div>
                    <p className="font-body text-sm text-[#B8B0A5]">
                      {dish.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bar Section */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="kicker mb-5">Bar & Lounge</span>
              <h2 className="heading-2 text-[#121212] mb-6">
                The Henry Bar & Lounge
              </h2>
              <p className="font-body text-lg text-[#4A453D] mb-8 leading-relaxed">
                Escape to our sophisticated bar and lounge, where expert
                mixologists craft bespoke cocktails using premium spirits and
                fresh ingredients. An ideal venue for relaxation and
                celebration.
              </p>
              <ul className="mb-8">
                {[
                  "Signature cocktails & mocktails",
                  "Premium spirits and wines",
                  "Live music every weekend",
                  "Private events & celebrations",
                  "Happy hour specials",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3 border-b border-[#E8E3DA] last:border-0">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#C5A059] mt-1 w-3.5 h-3.5"
                    />
                    <span className="font-body text-[#121212]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-10 border-l-2 border-[#C5A059] pl-5">
                <div>
                  <p className="font-body text-xs text-[#B8B0A5] uppercase tracking-wide mb-1">
                    Daily
                  </p>
                  <p className="font-heading font-bold text-[#121212]">
                    5:00 PM – 2:00 AM
                  </p>
                </div>
                <div>
                  <p className="font-body text-xs text-[#B8B0A5] uppercase tracking-wide mb-1">
                    Happy Hour
                  </p>
                  <p className="font-heading font-bold text-[#121212]">
                    5:00 PM – 7:00 PM
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150} className="relative h-96 md:h-112.5">
              <Image
                src="/images/bar.jpg"
                alt="The Henry Bar & Lounge"
                fill
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="kicker kicker-center mb-5">Mixology</span>
            <h2 className="heading-2">Signature Cocktails</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E8E3DA]">
            {cocktails.map((cocktail, idx) => (
              <Reveal key={idx} delay={idx * 100} className="p-8 bg-[#F9F7F2]">
                <FontAwesomeIcon
                  icon={faMartiniGlassCitrus}
                  className="text-[#C5A059] w-5 h-5 mb-4"
                />
                <h4 className="font-heading text-lg font-bold text-[#121212] mb-2">
                  {cocktail.name}
                </h4>
                <p className="font-body text-sm text-[#4A453D]">
                  {cocktail.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner relative h-[55vh] min-h-96 flex items-center justify-center">
        <Image
          src="/images/bar.jpg"
          alt="Reserve a table at HEMNRY"
          fill
          className="object-cover -z-10"
        />
        <Reveal className="text-center px-4 max-w-2xl">
          <h2 className="heading-2 text-[#F9F7F2]! mb-6">Make a Reservation</h2>
          <p className="font-body text-lg text-[#F9F7F2]/85 mb-10">
            Reserve your table at The Henry Grill & Bar for an unforgettable
            dining experience.
          </p>
          <Link href="/contact" className="btn-primary">
            Reserve Table
          </Link>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
