import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function About() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden mt-20 md:mt-0">
        <Image
          src="/images/hotel-exterior.jpg"
          alt="HEMNRY Hotels"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="heading-1 text-white mb-4">
            About HEMNRY
          </h1>
          <p className="font-body text-lg text-[#F9F7F2]">
            A Legacy of Luxury Since 1922
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="heading-2 text-[#121212] mb-6">Our Heritage</h2>
            <p className="font-body text-lg text-[#121212] mb-4 leading-relaxed">
              HEMNRY Hotels stands as a beacon of excellence in the hospitality industry. Founded over a century ago, our legacy is built on a foundation of unwavering commitment to elegance, comfort, and authentic hospitality.
            </p>
            <p className="font-body text-lg text-[#121212] leading-relaxed">
              Each guest who walks through our doors becomes part of our extended family. We don&apos;t just offer rooms; we curate experiences that leave lasting impressions and inspire people to return again and again.
            </p>
          </div>

          <div className="mb-12 py-8 border-y border-[#E8E3DA]">
            <p className="font-heading text-3xl md:text-4xl text-[#C5A059] italic text-center">
              &quot;Luxury is not an indulgence; it is a discipline.&quot;
            </p>
          </div>

          <div>
            <h2 className="heading-2 text-[#121212] mb-6">Our Philosophy</h2>
            <p className="font-body text-lg text-[#121212] mb-4 leading-relaxed">
              We believe that true luxury transcends material comfort. It&apos;s about creating spaces where guests feel genuinely valued, where every detail is thoughtfully considered, and where time seems to slow down.
            </p>
            <p className="font-body text-lg text-[#121212] leading-relaxed">
              Our team of dedicated professionals works tirelessly to anticipate your needs, exceed your expectations, and ensure that every moment at HEMNRY is extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We pursue perfection in every aspect of our service, from the finest linens to personalized attention.',
              },
              {
                title: 'Authenticity',
                description: 'We celebrate genuine hospitality and create meaningful connections with our guests and community.',
              },
              {
                title: 'Sustainability',
                description: 'We are committed to environmental responsibility and ethical practices in all operations.',
              },
            ].map((value) => (
              <div key={value.title} className="bg-white p-8">
                <h3 className="heading-3 text-[#C5A059] mb-4">{value.title}</h3>
                <p className="font-body text-[#121212]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Guided by Visionaries</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Elena Roussi',
                title: 'Founder & Chief Executive Officer',
                description: 'With over 30 years of experience in luxury hospitality, Elena founded HEMNRY with a vision to redefine elegance.',
                image: '/images/hotel-exterior.jpg',
              },
              {
                name: 'Marcus Chen',
                title: 'Executive Chef',
                description: 'Award-winning chef with Michelin stars, Marcus leads our culinary vision with innovation and tradition.',
                image: '/images/kitchen.jpg',
              },
              {
                name: 'Victoria Lopez',
                title: 'Director of Guest Experience',
                description: 'Victoria ensures every guest interaction reflects our commitment to exceptional service and care.',
                image: '/images/spa.jpg',
              },
            ].map((person) => (
              <div key={person.name}>
                <div className="relative h-64 md:h-72 overflow-hidden mb-4">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#121212] mb-1">{person.name}</h3>
                <p className="font-body text-sm text-[#C5A059] font-medium mb-3">{person.title}</p>
                <p className="font-body text-sm text-[#121212]">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-12">Recognition & Awards</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'World&apos;s Best Hotel 2024',
              'Michelin-Starred Restaurant',
              'Luxury Spa of the Year',
              'Best Hospitality Team',
              'Sustainable Luxury Award',
              'Design Excellence 2023',
              'Guest Choice Award',
              'Innovation in Dining',
            ].map((award) => (
              <div key={award} className="bg-white p-6 rounded">
                <p className="font-body text-sm font-medium text-[#121212]">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
