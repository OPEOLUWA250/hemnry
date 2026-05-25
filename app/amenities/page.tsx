import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Amenities() {
  const amenities = [
    {
      icon: '🏊',
      title: 'Swimming Pool',
      description: 'Olympic-size infinity pool with heated water and poolside bar service.',
      availability: 'Available year-round',
    },
    {
      icon: '💆',
      title: 'Spa & Wellness Center',
      description: 'Full-service spa offering massages, facials, and wellness treatments.',
      availability: '8 AM - 10 PM daily',
    },
    {
      icon: '🏋️',
      title: 'Fitness Center',
      description: 'State-of-the-art gym with personal trainers and group fitness classes.',
      availability: '24/7 access',
    },
    {
      icon: '🍽️',
      title: 'Fine Dining',
      description: 'Award-winning restaurant with Michelin-inspired cuisine.',
      availability: 'Lunch & Dinner',
    },
    {
      icon: '🍸',
      title: 'Bar & Lounge',
      description: 'Sophisticated bar with signature cocktails and premium spirits.',
      availability: '5 PM - 2 AM daily',
    },
    {
      icon: '📶',
      title: 'Free High-Speed Wi-Fi',
      description: 'Complimentary Wi-Fi throughout the hotel with excellent coverage.',
      availability: 'All areas',
    },
    {
      icon: '🚗',
      title: 'Valet Parking',
      description: 'Professional valet service and secure underground parking.',
      availability: '24/7',
    },
    {
      icon: '🎉',
      title: 'Event Halls',
      description: 'Multiple banquet rooms for conferences, weddings, and celebrations.',
      availability: 'Available daily',
    },
    {
      icon: '🛎️',
      title: '24/7 Concierge',
      description: 'Expert concierge team available around the clock for assistance.',
      availability: 'Always available',
    },
    {
      icon: '✈️',
      title: 'Airport Pickup',
      description: 'Convenient airport transfer service to and from the hotel.',
      availability: 'By arrangement',
    },
    {
      icon: '🧺',
      title: 'Laundry Service',
      description: 'Professional laundry and dry cleaning services available.',
      availability: 'Same-day service',
    },
    {
      icon: '🔒',
      title: 'Security Services',
      description: 'Professional security team ensuring guest safety and privacy.',
      availability: '24/7',
    },
  ]

  return (
    <>
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] flex items-center justify-center overflow-hidden mt-20 md:mt-0">
        <Image
          src="/images/spa.jpg"
          alt="HEMNRY Amenities"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="heading-1 text-white mb-4">
            Amenities & Services
          </h1>
          <p className="font-body text-lg text-[#F9F7F2]">
            Everything you need for a perfect stay
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">World-Class Facilities</h2>
            <p className="font-body text-base md:text-lg text-[#B8B0A5] max-w-2xl mx-auto">
              From relaxation to recreation, HEMNRY provides comprehensive amenities to enhance your stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="bg-[#F9F7F2] p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h3 className="heading-3 text-[#121212] mb-2">{amenity.title}</h3>
                <p className="font-body text-sm text-[#121212] mb-4">{amenity.description}</p>
                <p className="font-body text-xs font-medium text-[#C5A059] uppercase">{amenity.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Section */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[450px]">
              <Image
                src="/images/spa.jpg"
                alt="Spa & Wellness"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="heading-2 text-[#121212] mb-6">Spa & Wellness</h2>
              <p className="font-body text-lg text-[#121212] mb-6 leading-relaxed">
                Our world-renowned spa offers a sanctuary for relaxation and rejuvenation. Our experienced therapists provide personalized treatments using premium products.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Swedish and deep tissue massages',
                  'Facials and skincare treatments',
                  'Hot stone therapy',
                  'Aromatherapy sessions',
                  'Wellness consultations',
                ].map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#C5A059] text-lg mt-1">✓</span>
                    <span className="font-body text-[#121212]">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Facilities */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Business Facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Meeting Rooms',
                description: 'Fully equipped conference rooms with modern technology and catering services.',
                features: ['Video conferencing', 'High-speed internet', 'Conference equipment'],
              },
              {
                title: 'Business Center',
                description: 'Complete office services including printing, faxing, and secretarial support.',
                features: ['Computer access', 'Printing services', 'Private office space'],
              },
              {
                title: 'Event Halls',
                description: 'Multiple banquet rooms accommodating from 20 to 500 guests.',
                features: ['Flexible layouts', 'Professional catering', 'Audio/visual support'],
              },
              {
                title: 'Concierge Services',
                description: 'Expert assistance with reservations, bookings, and local arrangements.',
                features: ['Restaurant reservations', 'Transportation', 'Local recommendations'],
              },
            ].map((facility, idx) => (
              <div key={idx} className="bg-[#F9F7F2] p-8">
                <h3 className="heading-3 text-[#121212] mb-3">{facility.title}</h3>
                <p className="font-body text-[#121212] mb-4">{facility.description}</p>
                <ul className="space-y-2">
                  {facility.features.map((feature, fidx) => (
                    <li key={fidx} className="font-body text-sm text-[#B8B0A5] flex items-start gap-2">
                      <span className="text-[#C5A059]">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-[#F9F7F2] mb-6">Experience Our Amenities</h2>
          <p className="font-body text-lg text-[#B8B0A5] mb-8">
            Book your stay now and enjoy all that HEMNRY has to offer.
          </p>
          <a href="/rooms" className="btn-primary inline-block">
            Book Your Stay
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
