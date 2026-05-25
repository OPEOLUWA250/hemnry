import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Restaurant() {
  return (
    <>
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden mt-20 md:mt-0">
        <Image
          src="/images/restaurant.jpg"
          alt="Fine Dining at HEMNRY"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="heading-1 text-white mb-4">
            Culinary Excellence
          </h1>
          <p className="font-body text-lg text-[#F9F7F2]">
            An unforgettable dining experience awaits
          </p>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 md:h-[450px]">
              <Image
                src="/images/restaurant.jpg"
                alt="The Henry Grill & Bar"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="heading-2 text-[#121212] mb-6">The Henry Grill & Bar</h2>
              <p className="font-body text-lg text-[#121212] mb-6 leading-relaxed">
                Experience the pinnacle of culinary artistry at The Henry Grill & Bar. Our award-winning chefs craft exquisite dishes using the finest local and international ingredients, combined with impeccable wine pairings.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Michelin-inspired cuisine',
                  'Curated wine selection from around the world',
                  'Signature cocktails by our master mixologists',
                  'Seasonal menu updates',
                  'Private dining options available',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#C5A059] text-lg mt-1">✓</span>
                    <span className="font-body text-[#121212]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#F9F7F2] p-6 rounded">
                <p className="font-body text-sm text-[#B8B0A5] mb-2">Hours of Operation</p>
                <p className="font-body font-medium text-[#121212] mb-4">Lunch: 12:00 PM - 3:00 PM</p>
                <p className="font-body font-medium text-[#121212]">Dinner: 6:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Menu Preview */}
          <div className="mb-16 pb-16 border-b border-[#E8E3DA]">
            <h3 className="heading-2 text-[#121212] mb-8">Featured Dishes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Pan-Seared Diver Scallops',
                  description: 'Delicate scallops with buerre blanc, seasonal vegetables, and microgreens',
                  price: '$38',
                },
                {
                  name: 'Prime Ribeye Steak',
                  description: '16oz USDA Prime cut with truffle butter, roasted potatoes, and asparagus',
                  price: '$65',
                },
                {
                  name: 'Mediterranean Sea Bass',
                  description: 'Whole roasted sea bass with olive oil, lemon, and fresh herbs',
                  price: '$48',
                },
                {
                  name: 'Lobster Thermidor',
                  description: 'Classic preparation with cognac, mustard sauce, and gratin',
                  price: '$55',
                },
              ].map((dish, idx) => (
                <div key={idx} className="border-b border-[#E8E3DA] pb-6 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-heading text-lg font-bold text-[#121212]">{dish.name}</h4>
                    <span className="font-body font-medium text-[#C5A059]">{dish.price}</span>
                  </div>
                  <p className="font-body text-sm text-[#B8B0A5]">{dish.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bar Section */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-[#121212] mb-6">The Henry Bar & Lounge</h2>
              <p className="font-body text-lg text-[#121212] mb-6 leading-relaxed">
                Escape to our sophisticated bar and lounge, where expert mixologists craft bespoke cocktails using premium spirits and fresh ingredients. An ideal venue for relaxation and celebration.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Signature cocktails & mocktails',
                  'Premium spirits and wines',
                  'Live music every weekend',
                  'Private events & celebrations',
                  'Happy hour specials',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#C5A059] text-lg mt-1">✓</span>
                    <span className="font-body text-[#121212]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white p-6 rounded">
                <p className="font-body text-sm text-[#B8B0A5] mb-2">Hours of Operation</p>
                <p className="font-body font-medium text-[#121212] mb-4">Daily: 5:00 PM - 2:00 AM</p>
                <p className="font-body text-sm text-[#B8B0A5]">Happy Hour: 5:00 PM - 7:00 PM</p>
              </div>
            </div>
            <div className="relative h-96 md:h-[450px]">
              <Image
                src="/images/bar.jpg"
                alt="The Henry Bar & Lounge"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Signature Cocktails</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'The Henry Martini',
                description: 'Premium vodka, dry vermouth, and a twist of lemon essence',
              },
              {
                name: 'Gold Reserve Old Fashioned',
                description: 'Bourbon, bitters, sugar, and a hint of orange zest',
              },
              {
                name: 'Luxe Mojito',
                description: 'White rum, fresh mint, lime, soda, and premium ingredients',
              },
              {
                name: 'The Presidential Martini',
                description: 'Gin, vermouth, olives, and served with distinction',
              },
            ].map((cocktail, idx) => (
              <div key={idx} className="p-6 bg-[#F9F7F2]">
                <h4 className="font-heading text-lg font-bold text-[#121212] mb-2">{cocktail.name}</h4>
                <p className="font-body text-sm text-[#121212]">{cocktail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-[#F9F7F2] mb-6">Make a Reservation</h2>
          <p className="font-body text-lg text-[#B8B0A5] mb-8">
            Reserve your table at The Henry Grill & Bar for an unforgettable dining experience.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Reserve Table
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
