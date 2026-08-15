"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Reveal from "@/components/Reveal";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Luxury Hospitality: A Guide to Exceptional Service",
    category: "Hospitality",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    excerpt:
      "Discover what sets luxury hospitality apart from ordinary hotels. Learn the principles that guide our service philosophy at HEMNRY.",
    image: "/images/restaurant.jpg",
    slug: "art-of-luxury-hospitality",
  },
  {
    id: 2,
    title: "Michelin-Starred Cuisine: Behind the Scenes at The Henry",
    category: "Dining",
    date: "March 10, 2024",
    author: "Marcus Chen",
    excerpt:
      "Explore the culinary artistry and dedication that goes into creating our award-winning menu at The Henry Grill & Bar.",
    image: "/images/kitchen.jpg",
    slug: "michelin-cuisine-behind-scenes",
  },
  {
    id: 3,
    title: "Wellness Retreats: Recharge Your Mind and Body",
    category: "Wellness",
    date: "March 5, 2024",
    author: "Victoria Lopez",
    excerpt:
      "Learn how to make the most of our spa and wellness facilities during your stay. Discover treatments that promote relaxation and rejuvenation.",
    image: "/images/spa.jpg",
    slug: "wellness-retreats-mind-body",
  },
  {
    id: 4,
    title: "Luxury Travel Tips: Maximizing Your Hotel Experience",
    category: "Travel",
    date: "February 28, 2024",
    author: "Elena Roussi",
    excerpt:
      "Expert tips on how to make the most of your luxury hotel stay and create unforgettable memories at HEMNRY.",
    image: "/images/room-premium.jpg",
    slug: "luxury-travel-tips-maximize",
  },
  {
    id: 5,
    title: "Destination Guide: Exploring the City Like a Local",
    category: "Travel",
    date: "February 20, 2024",
    author: "Sarah Johnson",
    excerpt:
      "Our concierge team shares insider recommendations for hidden gems and must-visit attractions near HEMNRY.",
    image: "/images/hotel-exterior.jpg",
    slug: "destination-guide-explore-city",
  },
  {
    id: 6,
    title: "Seasonal Menus: What's New This Spring",
    category: "Dining",
    date: "February 15, 2024",
    author: "Marcus Chen",
    excerpt:
      "Discover our latest spring menu featuring fresh, seasonal ingredients and innovative culinary creations.",
    image: "/images/restaurant.jpg",
    slug: "seasonal-menus-spring",
  },
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

  const visiblePosts = useMemo(
    () =>
      activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Section */}
      <section className="hero-interior relative w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="HEMNRY Blog"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <span className="kicker kicker-center kicker-light mb-5">
            Journal
          </span>
          <h1 className="heading-1 page-hero-heading mb-4">Blog & Insights</h1>
          <p className="font-body text-lg text-[#F9F7F2]/90">
            Stories, tips, and insights from the world of luxury hospitality
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-12">
            <span className="kicker mb-5">Latest Articles</span>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
              <h2 className="heading-2">Reading the Details</h2>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 font-body text-sm font-medium transition-colors duration-300 ${
                      category === activeCategory
                        ? "bg-[#121212] text-[#F9F7F2]"
                        : "bg-[#F9F7F2] text-[#121212] hover:bg-[#C5A059] hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post, idx) => (
              <Reveal key={post.id} delay={(idx % 3) * 100}>
                <Link href={`/blogs/${post.slug}`} className="block h-full">
                  <article className="group cursor-pointer card-quiet overflow-hidden h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 kicker kicker-light gap-2! text-[10px]">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col grow">
                      <p className="font-body text-xs text-[#B8B0A5] mb-3">
                        {post.date}
                      </p>

                      <h3 className="heading-3 text-[20px]! text-[#121212] mb-3 group-hover:text-[#C5A059] transition-colors duration-300 line-clamp-3">
                        {post.title}
                      </h3>

                      <p className="font-body text-sm text-[#4A453D] mb-6 grow line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#E8E3DA]">
                        <p className="font-body text-xs text-[#4A453D]">
                          By {post.author}
                        </p>
                        <span className="font-body text-sm font-medium text-[#121212] group-hover:text-[#C5A059] transition-colors duration-300">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>

          {visiblePosts.length === 0 && (
            <p className="text-center font-body text-[#4A453D] py-16">
              No articles in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner relative h-[55vh] min-h-96 flex items-center justify-center">
        <Image
          src="/images/kitchen.jpg"
          alt="Plan your stay at HEMNRY"
          fill
          className="object-cover -z-10"
        />
        <Reveal className="text-center px-4 max-w-2xl">
          <h2 className="heading-2 text-[#F9F7F2]! mb-6">
            Ready for Your Luxury Escape?
          </h2>
          <p className="font-body text-lg text-[#F9F7F2]/85 mb-10">
            Turn inspiration into experience at HEMNRY with world-class rooms,
            dining, and hospitality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/rooms" className="btn-primary">
              Explore Rooms
            </Link>
            <Link href="/contact" className="btn-glass">
              Plan Your Stay
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
