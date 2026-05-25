import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Luxury Hospitality: A Guide to Exceptional Service',
    category: 'Hospitality',
    date: 'March 15, 2024',
    author: 'Sarah Johnson',
    excerpt: 'Discover what sets luxury hospitality apart from ordinary hotels. Learn the principles that guide our service philosophy at HEMNRY.',
    image: '/images/restaurant.jpg',
    slug: 'art-of-luxury-hospitality',
  },
  {
    id: 2,
    title: 'Michelin-Starred Cuisine: Behind the Scenes at The Henry',
    category: 'Dining',
    date: 'March 10, 2024',
    author: 'Marcus Chen',
    excerpt: 'Explore the culinary artistry and dedication that goes into creating our award-winning menu at The Henry Grill & Bar.',
    image: '/images/kitchen.jpg',
    slug: 'michelin-cuisine-behind-scenes',
  },
  {
    id: 3,
    title: 'Wellness Retreats: Recharge Your Mind and Body',
    category: 'Wellness',
    date: 'March 5, 2024',
    author: 'Victoria Lopez',
    excerpt: 'Learn how to make the most of our spa and wellness facilities during your stay. Discover treatments that promote relaxation and rejuvenation.',
    image: '/images/spa.jpg',
    slug: 'wellness-retreats-mind-body',
  },
  {
    id: 4,
    title: 'Luxury Travel Tips: Maximizing Your Hotel Experience',
    category: 'Travel',
    date: 'February 28, 2024',
    author: 'Elena Roussi',
    excerpt: 'Expert tips on how to make the most of your luxury hotel stay and create unforgettable memories at HEMNRY.',
    image: '/images/room-premium.jpg',
    slug: 'luxury-travel-tips-maximize',
  },
  {
    id: 5,
    title: 'Destination Guide: Exploring the City Like a Local',
    category: 'Travel',
    date: 'February 20, 2024',
    author: 'Sarah Johnson',
    excerpt: 'Our concierge team shares insider recommendations for hidden gems and must-visit attractions near HEMNRY.',
    image: '/images/hotel-exterior.jpg',
    slug: 'destination-guide-explore-city',
  },
  {
    id: 6,
    title: 'Seasonal Menus: What\'s New This Spring',
    category: 'Dining',
    date: 'February 15, 2024',
    author: 'Marcus Chen',
    excerpt: 'Discover our latest spring menu featuring fresh, seasonal ingredients and innovative culinary creations.',
    image: '/images/restaurant.jpg',
    slug: 'seasonal-menus-spring',
  },
]

export default function Blogs() {
  const categories = ['All', ...new Set(blogPosts.map((post) => post.category))]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden mt-20 md:mt-0">
        <Image
          src="/images/hero.jpg"
          alt="HEMNRY Blog"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="heading-1 text-white mb-4">
            Blog & Insights
          </h1>
          <p className="font-body text-lg text-[#F9F7F2]">
            Stories, tips, and insights from the world of luxury hospitality
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="heading-2 mb-8">Latest Articles</h2>

            {/* Category Filter Placeholder */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 font-body text-sm font-medium transition-colors duration-300 ${
                    category === 'All'
                      ? 'bg-[#121212] text-[#F9F7F2]'
                      : 'bg-[#F9F7F2] text-[#121212] hover:bg-[#C5A059] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`}>
                <article className="group h-full flex flex-col cursor-pointer">
                  <div className="relative h-64 md:h-72 overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-body text-xs font-medium text-[#C5A059] uppercase">
                        {post.category}
                      </span>
                      <span className="font-body text-xs text-[#B8B0A5]">•</span>
                      <span className="font-body text-xs text-[#B8B0A5]">{post.date}</span>
                    </div>

                    <h3 className="heading-3 text-[#121212] mb-3 group-hover:text-[#C5A059] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="font-body text-sm text-[#121212] mb-4 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <p className="font-body text-xs text-[#B8B0A5]">By {post.author}</p>
                      <span className="font-body text-sm font-medium text-[#121212] group-hover:text-[#C5A059] transition-colors duration-300">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="flex justify-center gap-2">
            <button className="px-4 py-2 bg-[#121212] text-[#F9F7F2] font-body text-sm font-medium">
              1
            </button>
            <button className="px-4 py-2 bg-[#F9F7F2] text-[#121212] font-body text-sm font-medium hover:bg-[#E8E3DA] transition-colors duration-300">
              2
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Subscribe to Our Newsletter</h2>
          <p className="font-body text-base text-[#121212] mb-8">
            Get the latest insights, travel tips, and exclusive offers delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border border-[#E8E3DA] bg-white text-[#121212] font-body placeholder-[#B8B0A5] focus:outline-none focus:border-[#C5A059]"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>

          <p className="font-body text-xs text-[#B8B0A5] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
