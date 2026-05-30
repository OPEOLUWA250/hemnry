import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    price: 199,
    image: "/images/room-deluxe.jpg",
    capacity: 2,
    beds: "King Bed",
    sqft: 320,
    description:
      "Elegantly designed rooms offering comfort and modern amenities for a pleasant stay.",
    fullDescription:
      "Our Standard Rooms are the perfect choice for travelers seeking quality accommodation without unnecessary frills. Each room features premium bedding, modern furnishings, and all essential amenities to ensure a comfortable stay.",
    amenities: [
      "Flat-screen TV with Cable",
      "Free High-Speed Wi-Fi",
      "Air Conditioning",
      "Work Desk & Chair",
      "Luxury Bath Amenities",
      "Safe Box",
      "Telephone",
      "Wake-up Service",
    ],
    features: [
      "Spacious layout with modern decor",
      "Floor-to-ceiling windows",
      "Premium mattress and pillows",
      "Rainfall shower",
    ],
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: 299,
    image: "/images/room-deluxe.jpg",
    capacity: 2,
    beds: "King or Twin Beds",
    sqft: 420,
    description:
      "Spacious rooms with enhanced furnishings and exclusive amenities for the discerning traveler.",
    fullDescription:
      "Deluxe Rooms offer an elevated experience with enhanced aesthetics and premium amenities. Featuring city views and upgraded furnishings, these rooms provide the perfect balance of luxury and comfort.",
    amenities: [
      "City View Balcony",
      "Premium Toiletries",
      "Mini Bar",
      "Robes & Slippers",
      "Nespresso Machine",
      "Smart TV",
      "Electronic Safe",
      "Complimentary Newspaper",
    ],
    features: [
      "Spacious layout with city views",
      "Premium decor and furnishings",
      "Separate seating area",
      "Marble-tiled bathroom",
    ],
  },
  {
    id: 3,
    name: "Executive Room",
    price: 399,
    image: "/images/room-premium.jpg",
    capacity: 2,
    beds: "King Bed",
    sqft: 520,
    description:
      "Luxurious accommodations with executive lounge privileges and personalized service.",
    fullDescription:
      "Executive Rooms are designed for the business traveler and those seeking enhanced amenities. Enjoy executive lounge access with complimentary breakfast, beverages, and evening refreshments.",
    amenities: [
      "Executive Lounge Access",
      "Premium Minibar",
      "Bathrobes & Premium Amenities",
      "Complimentary Breakfast & Drinks",
      "Priority Room Service",
      "Nespresso Machine",
      "Work Desk with Ergonomic Chair",
      "Turndown Service",
    ],
    features: [
      "Luxurious furnishings throughout",
      "Panoramic city views",
      "Spacious marble bathroom",
      "Premium bedding and linens",
    ],
  },
  {
    id: 4,
    name: "Premium Suite",
    price: 499,
    image: "/images/room-premium.jpg",
    capacity: 2,
    beds: "King Bed + Living Area",
    sqft: 750,
    description:
      "Opulent suites featuring separate living spaces and unparalleled luxury amenities.",
    fullDescription:
      "Our Premium Suites represent the pinnacle of luxury at HEMNRY. With separate bedroom and living areas, marble bathrooms, and butler service, every detail is designed for indulgence.",
    amenities: [
      "Separate Bedroom & Living Room",
      "Marble Bathroom with Jacuzzi Tub",
      "Premium Minibar & Wine Selection",
      "Butler Service 24/7",
      "Personal Concierge",
      "Nespresso Machine",
      "Premium Linens & Bedding",
      "Complimentary Spa Credits",
    ],
    features: [
      "Separate living and bedroom areas",
      "Full marble bathroom with tub & shower",
      "Premium furnishings and decor",
      "Panoramic city views from multiple rooms",
    ],
  },
  {
    id: 5,
    name: "Family Suite",
    price: 599,
    image: "/images/room-premium.jpg",
    capacity: 4,
    beds: "2 Bedrooms",
    sqft: 950,
    description:
      "Spacious family accommodations with multiple bedrooms and complete amenities.",
    fullDescription:
      "Perfect for families, our Family Suites offer multiple bedrooms, a full kitchen, and complete amenities. This is luxury living with space and comfort for the entire family.",
    amenities: [
      "Two Bedrooms",
      "Full Kitchen",
      "Two Full Bathrooms",
      "Living & Dining Area",
      "Kids Amenities & Toys",
      "PlayStation Console",
      "Washer & Dryer",
      "Premium Bedding",
    ],
    features: [
      "Two bedrooms with separate entrances",
      "Full kitchen with appliances",
      "Spacious living and dining areas",
      "Multiple bathrooms for convenience",
    ],
  },
];

export default async function RoomDetail({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const room = rooms.find((r) => r.id === parseInt(resolvedParams.id));

  if (!room) {
    return (
      <>
        <Navigation />
        <div className="section-padding text-center">
          <h1 className="heading-1">Room Not Found</h1>
          <Link href="/rooms" className="btn-primary inline-block mt-6">
            Back to Rooms
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

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden mt-20 md:mt-0">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-12 pb-8 md:pb-12">
            <div className="max-w-6xl mx-auto">
              <h1 className="heading-1 page-hero-heading mb-2">{room.name}</h1>
              <p className="font-body text-lg md:text-xl text-white/90 font-medium">
                From ${room.price} per night
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="section-padding bg-[#FFEFD7]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="mb-10 pb-8 border-b border-[#E8E3DA]">
                <h2 className="heading-2 text-[#121212] mb-3">{room.name}</h2>
                <p className="font-body text-2xl text-[#C5A059] font-medium mb-4">
                  From ${room.price} per night
                </p>
                <p className="font-body text-lg text-[#121212] leading-relaxed max-w-3xl">
                  {room.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="border border-[#E8E3DA] bg-[#F9F7F2] p-5">
                  <p className="font-body text-sm text-[#B8B0A5] mb-2">
                    Capacity
                  </p>
                  <p className="font-heading text-xl font-bold text-[#121212]">
                    {room.capacity} Guests
                  </p>
                </div>
                <div className="border border-[#E8E3DA] bg-[#F9F7F2] p-5">
                  <p className="font-body text-sm text-[#B8B0A5] mb-2">
                    Bed Type
                  </p>
                  <p className="font-heading text-xl font-bold text-[#121212]">
                    {room.beds}
                  </p>
                </div>
                <div className="border border-[#E8E3DA] bg-[#F9F7F2] p-5">
                  <p className="font-body text-sm text-[#B8B0A5] mb-2">
                    Room Size
                  </p>
                  <p className="font-heading text-xl font-bold text-[#121212]">
                    {room.sqft} sqft
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="heading-2 text-[#121212] mb-4">Overview</h2>
                <p className="font-body text-lg text-[#121212] mb-6 leading-relaxed">
                  {room.fullDescription}
                </p>
                <p className="font-body text-base text-[#5F5A52] leading-relaxed">
                  Every room is thoughtfully designed for comfort, privacy, and
                  a refined stay experience. Expect rich textures, premium
                  bedding, and attentive service throughout your visit.
                </p>
              </div>

              <h2 className="heading-2 text-[#121212] mb-6">Room Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {room.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 border border-[#E8E3DA] bg-[#F9F7F2] p-4"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-[#C5A059] mt-1"
                    />
                    <span className="font-body text-[#121212]">{amenity}</span>
                  </div>
                ))}
              </div>

              <h2 className="heading-2 text-[#121212] mb-6">Room Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
                {room.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 border border-[#E8E3DA] bg-white p-4"
                  >
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="text-[#C5A059] text-[8px] mt-2"
                    />
                    <span className="font-body text-[#121212]">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#E8E3DA] pt-8">
                <h2 className="heading-2 text-[#121212] mb-4">
                  Why Guests Choose This Room
                </h2>
                <p className="font-body text-base text-[#121212] leading-relaxed mb-6">
                  Ideal for guests who want comfort without compromise, this
                  room combines elegant design, practical amenities, and a calm
                  atmosphere for a memorable stay.
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Book This Room
                </Link>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="md:col-span-1">
              <div className="sticky top-24 bg-[#F9F7F2] p-8 border border-[#E8E3DA]">
                <div className="mb-6 pb-6 border-b border-[#E8E3DA]">
                  <p className="font-body text-sm text-[#B8B0A5] mb-2">
                    Price per night
                  </p>
                  <p className="heading-2 text-[#121212]">${room.price}</p>
                </div>

                <div className="space-y-3 mb-8">
                  <div>
                    <p className="font-body text-xs text-[#B8B0A5] uppercase">
                      Room Capacity
                    </p>
                    <p className="font-body font-medium text-[#121212]">
                      Up to {room.capacity} guests
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#B8B0A5] uppercase">
                      Room Size
                    </p>
                    <p className="font-body font-medium text-[#121212]">
                      {room.sqft} sq. feet
                    </p>
                  </div>
                </div>

                <div className="mb-8 p-4 bg-[#F0F0F0]">
                  <p className="font-body text-xs text-[#B8B0A5] mb-1">
                    Availability
                  </p>
                  <p className="font-body font-medium text-[#121212]">
                    Available All Year
                  </p>
                </div>

                <div className="mb-8">
                  <p className="font-body text-xs text-[#B8B0A5] uppercase mb-2">
                    Highlights
                  </p>
                  <ul className="space-y-2">
                    {room.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="font-body text-sm text-[#121212] flex items-start gap-2"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-[#C5A059] mt-1"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="btn-primary w-full text-center block mb-3"
                >
                  Reserve Now
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary w-full text-center block"
                >
                  Request Information
                </Link>

                <div className="mt-8 pt-8 border-t border-[#E8E3DA]">
                  <p className="font-body text-xs text-[#B8B0A5] text-center mb-4">
                    Need help? Contact our concierge team
                  </p>
                  <p className="font-body text-sm font-medium text-[#121212] text-center mb-2">
                    +1 (555) 123-4567
                  </p>
                  <p className="font-body text-sm text-[#C5A059] text-center">
                    reservations@hemnry.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Rooms */}
      <section className="section-padding bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Other Room Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rooms
              .filter((r) => r.id !== room.id)
              .slice(0, 3)
              .map((r) => (
                <Link key={r.id} href={`/rooms/${r.id}`}>
                  <div className="group cursor-pointer">
                    <div className="relative h-64 overflow-hidden mb-4">
                      <Image
                        src={r.image}
                        alt={r.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#121212] mb-2">
                      {r.name}
                    </h3>
                    <p className="font-body text-[#C5A059] font-medium">
                      From ${r.price}/night
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
