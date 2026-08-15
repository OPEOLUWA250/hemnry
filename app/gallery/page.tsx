"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUtensils,
  faBuilding,
  faXmark,
  faChevronLeft,
  faChevronRight,
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

const collections = [
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
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="hero-interior relative w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="HEMNRY Gallery"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <span className="kicker kicker-center kicker-light mb-5">
            Visual Story
          </span>
          <h1 className="heading-1 page-hero-heading mb-4">Gallery</h1>
          <p className="font-body text-lg text-[#F9F7F2]/90">
            Explore the beauty and elegance of HEMNRY
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="kicker kicker-center mb-5">Our Visual Story</span>
            <h2 className="heading-2 mb-4">A Closer Look</h2>
            <p className="font-body text-base md:text-lg text-[#4A453D] max-w-2xl mx-auto">
              Experience the luxury and elegance of HEMNRY through our carefully
              curated collection of images. Click any image to explore.
            </p>
          </Reveal>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-6">
            {galleryImages.map((item, idx) => (
              <Reveal
                key={item.id}
                delay={(idx % 3) * 80}
                className={
                  idx === 0 || idx === 5 ? "lg:col-span-2 lg:row-span-2" : ""
                }
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="group relative w-full overflow-hidden cursor-pointer block text-left"
                  aria-label={`View ${item.title} full-size`}
                >
                  <div
                    className={`relative ${idx === 0 || idx === 5 ? "h-96 md:h-125" : "h-64 md:h-80"}`}
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
                      <span className="kicker kicker-center kicker-light mb-2 text-[10px]">
                        {item.category}
                      </span>
                      <p className="font-heading text-2xl text-white font-bold">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Categories Info */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="kicker kicker-center mb-5">Explore By Theme</span>
            <h2 className="heading-2">Featured Collections</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E3DA]">
            {collections.map((collection, idx) => (
              <Reveal key={idx} delay={idx * 100} className="bg-white p-10 text-center">
                <FontAwesomeIcon icon={collection.icon} className="text-4xl text-[#C5A059] mb-5" />
                <h3 className="heading-3 text-[#121212] mb-3">
                  {collection.title}
                </h3>
                <p className="font-body text-sm text-[#4A453D] mb-4">
                  {collection.description}
                </p>
                <p className="font-body text-xs font-medium text-[#C5A059] uppercase tracking-wide">
                  {collection.count}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner relative h-[55vh] min-h-96 flex items-center justify-center">
        <Image
          src="/images/event-space.jpg"
          alt="Visit HEMNRY"
          fill
          className="object-cover -z-10"
        />
        <Reveal className="text-center px-4 max-w-2xl">
          <h2 className="heading-2 text-[#F9F7F2]! mb-6">Ready to Visit?</h2>
          <p className="font-body text-lg text-[#F9F7F2]/85 mb-10">
            Book your stay at HEMNRY and experience the luxury first-hand.
          </p>
          <Link href="/rooms" className="btn-primary">
            Explore Rooms
          </Link>
        </Reveal>
      </section>

      <Footer />

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
            aria-label="Previous image"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
          </button>

          <div className="relative w-full max-w-4xl h-[70vh]">
            <Image
              src={galleryImages[activeIndex].image}
              alt={galleryImages[activeIndex].title}
              fill
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-white/30 text-white hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
            aria-label="Next image"
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="font-heading text-lg text-white font-bold">
              {galleryImages[activeIndex].title}
            </p>
            <p className="font-body text-xs text-[#D9B876] uppercase tracking-widest mt-1">
              {activeIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
