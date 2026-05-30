import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const blogPosts = [
  {
    slug: "art-of-luxury-hospitality",
    title: "The Art of Luxury Hospitality: A Guide to Exceptional Service",
    category: "Hospitality",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    image: "/images/restaurant.jpg",
    content: `Luxury hospitality is more than just comfortable beds and gourmet food—it's about creating an experience that touches the heart and mind of every guest. At HEMNRY, we believe that true luxury lies in the details and in the genuine care we extend to each person who walks through our doors.

The Foundation of Excellence

What sets luxury hospitality apart is a commitment to anticipating guest needs before they are expressed. Our team members are trained not just to respond to requests, but to observe, listen, and understand the unique preferences and requirements of each guest. This personalized approach transforms a simple hotel stay into a memorable experience.

From the moment guests arrive at HEMNRY, they are greeted with warmth and respect. Our staff takes time to learn names, remember preferences, and create an atmosphere of genuine welcome. This human touch cannot be replicated by technology or automation—it comes from the heart of our team members.

The Details Matter

In luxury hospitality, we understand that small details create lasting impressions. Whether it's the thread count of our linens, the temperature of the water in our baths, or the way our concierge remembers a guest's favorite wine—these details matter. We invest in quality not for the sake of appearance, but because we believe our guests deserve the best.

Every aspect of our service is designed with care. From the moment a guest makes a reservation to their departure, we consider every interaction as an opportunity to exceed expectations. Our housekeeping team takes pride in the pristine condition of our rooms. Our chefs work tirelessly to create memorable culinary experiences. Our concierge team goes above and beyond to make every wish a reality.

Creating Memories

Ultimately, luxury hospitality is about creating memories that last a lifetime. Our guests don't just remember the amenities—they remember the moments, the emotions, and the sense of being truly cared for. That's what HEMNRY is all about.

We invite you to experience the difference that authentic luxury hospitality can make in your next escape.`,
  },
  {
    slug: "michelin-cuisine-behind-scenes",
    title: "Michelin-Starred Cuisine: Behind the Scenes at The Henry",
    category: "Dining",
    date: "March 10, 2024",
    author: "Marcus Chen",
    image: "/images/kitchen.jpg",
    content: `The kitchen at The Henry Grill & Bar is where magic happens. It's a place of precision, creativity, and unwavering dedication to culinary excellence. Today, I want to take you behind the scenes to share what it takes to create Michelin-inspired cuisine night after night.

The Philosophy Behind Our Menu

Our approach to cooking starts with respect for ingredients. We source the finest local and international products, building relationships with our suppliers to ensure that every ingredient meets our exacting standards. A perfect tomato, a fresh piece of fish, a quality cut of meat—these are the foundation of our cuisine.

Our menu is seasonal and ever-evolving. We believe that cooking should celebrate the bounty of each season, showcasing ingredients at their peak. Spring brings fresh vegetables and delicate flavors. Summer offers ripe fruits and light preparations. Fall and winter inspire rich, warming dishes that comfort the soul.

The Art of Preparation

In our kitchen, technique is paramount. Every member of our culinary team is trained in classical French cooking methods, refined through years of experience and continuous learning. We execute plating with precision, understanding that we eat first with our eyes.

But technique alone is not enough. True culinary excellence requires creativity and innovation. Our chefs are constantly experimenting, tasting, and refining. We attend international culinary events, study modern cooking methods, and draw inspiration from cuisines around the world. Yet we always remain true to our core philosophy: create dishes that are delicious, beautiful, and memorable.

The Team Behind It All

A Michelin-inspired kitchen cannot succeed with just one brilliant chef. It requires a dedicated team of culinary professionals who share the same passion and commitment to excellence. Every person in our kitchen, from the sous chefs to the commis, plays a vital role in our success.

Training is continuous. We invest in our team's development, sending them to seminars, workshops, and stages at renowned restaurants. We encourage them to push boundaries and express their creativity. The result is a kitchen that's both structured and innovative, professional yet passionate.

The Dining Experience

What happens in the kitchen is only half the story. The other half takes place in our dining room, where our front-of-house team brings our culinary creations to life. The perfect wine pairing, the well-timed service, the warm hospitality—these elements elevate a good meal into an unforgettable experience.

At The Henry, we're not just serving food. We're creating moments, telling stories, and creating connections. Every dish that leaves our kitchen carries with it the passion and expertise of our entire team.

We invite you to join us for a culinary journey that celebrates the finest ingredients, masterful technique, and genuine hospitality.`,
  },
  {
    slug: "wellness-retreats-mind-body",
    title: "Wellness Retreats: Recharge Your Mind and Body",
    category: "Wellness",
    date: "March 5, 2024",
    author: "Victoria Lopez",
    image: "/images/spa.jpg",
    content: `In today's fast-paced world, the need for wellness retreats has never been greater. At HEMNRY, we understand that true luxury is about more than material comfort—it's about nourishing your mind, body, and spirit.

The Power of Wellness

Wellness is not merely the absence of illness; it's a state of complete physical, mental, and social wellbeing. In our spa and wellness center, we believe in a holistic approach to health and rejuvenation. Whether you're seeking relief from stress, recovery from physical exertion, or simply time to reconnect with yourself, we have treatments and programs designed to support your wellness journey.

Our Signature Treatments

Our spa team is trained in traditional and modern therapeutic techniques from around the world. From Swedish massage to deep tissue therapy, from aromatherapy to hot stone treatments, we offer a wide range of services designed to relax your muscles, calm your mind, and restore your energy.

We use only premium, natural products in our treatments. Our therapists take time to understand your needs and customize each session to address your specific concerns. Whether you're looking for muscle relief, stress reduction, or simply pampering, you'll find the perfect treatment in our spa.

The Wellness Experience at HEMNRY

Your wellness retreat at HEMNRY goes beyond spa treatments. We've designed our facilities and services to support your overall wellbeing. Our fitness center is equipped with state-of-the-art equipment. Our yoga and meditation classes help you find inner peace. Our nutritious cuisine supports your health goals. And our serene spa environment provides a sanctuary away from the stresses of daily life.

We encourage our guests to take advantage of multiple services during their stay. Combine a morning yoga class with an afternoon massage. Follow your spa treatment with a healthy meal at our restaurant. Use our fitness facilities while enjoying the holistic support of our wellness team.

The Results

Many of our guests leave HEMNRY feeling more relaxed, energized, and balanced than when they arrived. They report better sleep, reduced stress, improved physical health, and a renewed sense of wellbeing. These are the results that matter most to us.

We invite you to book your wellness retreat at HEMNRY and experience the transformative power of our spa and wellness services.`,
  },
];

export default async function BlogDetail({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="section-padding text-center">
          <h1 className="heading-1">Article Not Found</h1>
          <Link href="/blogs" className="btn-primary inline-block mt-6">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <WhatsAppButton />
      <BackToTop />

      {/* Hero Image */}
      <section className="relative w-full h-screen overflow-hidden mt-20 md:mt-0">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover scale-110 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-12 pb-8 md:pb-12">
            <div className="max-w-6xl mx-auto text-left">
              <div className="flex items-center justify-start gap-3 mb-3 md:mb-4">
                <span className="font-body text-sm font-medium text-[#C5A059] uppercase">
                  {post.category}
                </span>
                <span className="font-body text-sm text-white/70">•</span>
                <span className="font-body text-sm text-white/80">
                  {post.date}
                </span>
              </div>
              <h1 className="heading-1 page-hero-heading max-w-4xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <article className="max-w-3xl mx-auto">
          {/* Article Header */}
          <header className="mb-8 pb-8 border-b border-[#E8E3DA]">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-body text-sm font-medium text-[#C5A059] uppercase">
                {post.category}
              </span>
              <span className="font-body text-sm text-[#B8B0A5]">•</span>
              <span className="font-body text-sm text-[#B8B0A5]">
                {post.date}
              </span>
            </div>

            <h2 className="heading-2 text-[#121212] mb-4">{post.title}</h2>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-body text-sm text-[#B8B0A5]">By</p>
                <p className="font-body font-medium text-[#121212]">
                  {post.author}
                </p>
              </div>
              <div className="text-right">
                <p className="font-body text-sm text-[#B8B0A5]">Share</p>
                <div className="flex gap-3 mt-2">
                  <button
                    className="text-lg hover:text-[#C5A059] transition-colors duration-300"
                    aria-label="Share on Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>
                  <button
                    className="text-lg hover:text-[#C5A059] transition-colors duration-300"
                    aria-label="Share on Twitter"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button
                    className="text-lg hover:text-[#C5A059] transition-colors duration-300"
                    aria-label="Share by email"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, idx) => {
              if (paragraph.endsWith(":")) {
                return (
                  <h2 key={idx} className="heading-2 text-[#121212] mt-8 mb-4">
                    {paragraph.slice(0, -1)}
                  </h2>
                );
              }
              return (
                <p
                  key={idx}
                  className="font-body text-base md:text-lg text-[#121212] leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </article>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blogs/${relatedPost.slug}`}
                >
                  <article className="group cursor-pointer">
                    <div className="relative h-48 overflow-hidden mb-4">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="font-body text-xs font-medium text-[#C5A059] uppercase mb-2">
                      {relatedPost.category}
                    </p>
                    <h3 className="heading-3 text-[20px]! text-[#121212] group-hover:text-[#C5A059] transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
