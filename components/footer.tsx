import Link from "next/link";
import { Facebook, MessageCircle, Linkedin, Circle } from "lucide-react";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <Image
              src="logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-auto h-auto"
            />
            <h3 className="text-[24px] font-medium poppins mt-5">
              Sale Easily & Better with us.
            </h3>
          </div>

          <div className="space-y-10 md:space-y-4 w-full md:w-auto">
            <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link
                href="/about"
                className="text-white hover:text-gray-300 font-medium text-[14px] transition-colors"
              >
                About Live Code
              </Link>
              <Link
                href="/feature"
                className="text-white hover:text-gray-300 font-medium text-[14px] transition-colors"
              >
                Features
              </Link>
              <Link
                href="/plan"
                className="text-white hover:text-gray-300 font-medium text-[14px] transition-colors"
              >
                Packages
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-gray-300 font-medium text-[14px] transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex justify-between space-x-4">
              <Link
                href="#"
                className="border border-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="#"
                className="border border-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <FaTiktok size={20} />
              </Link>
              <Link
                href="#"
                className="border border-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="#"
                className="border border-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <FaFacebookMessenger size={20} />
                <span className="sr-only">Messenger</span>
              </Link>
              <Link
                href="#"
                className="border border-white p-1 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
              >
                <FaTelegram size={20} />
                <span className="sr-only">Telegram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
