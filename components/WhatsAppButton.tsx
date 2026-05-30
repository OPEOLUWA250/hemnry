"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
  const message =
    "Hello HEMNRY, I would like to inquire about your rooms and services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40"
      aria-label="Chat on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 text-white" />
    </Link>
  );
};

export default WhatsAppButton;
