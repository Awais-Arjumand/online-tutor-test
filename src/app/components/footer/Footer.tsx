"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { IoIosPlay, IoLogoYoutube, IoMdMail } from "react-icons/io";
import { HiMapPin } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { FooterSocialLinks } from "./FooterSocialLinks";

const URL = {
  COURSES: "/courses",
  SUBJECTS: "/subjects",
  REQUEST_A_TUTOR: "/request-tutor",
  ABOUT: "/about",
  BLOG: "/blog",
  CONTACT_US: "/contact",
  FAQ: "/faq",
};

const Footer = () => {
  const pathname = usePathname(); 
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  const FooterSocialIcons = [
    { href: "https://www.instagram.com/", icon: <FaInstagram className="text-white text-xl" /> },
    { href: "https://www.facebook.com/", icon: <FaFacebookF className="text-white text-xl" /> },
    { href: "https://www.youtube.com/", icon: <IoLogoYoutube className="text-white text-xl" /> },
    { href: "https://twitter.com/", icon: <FaTwitter className="text-white text-xl" /> },
    { href: "https://www.linkedin.com/", icon: <FaLinkedinIn className="text-white text-xl" /> },
  ];

  return (
    <footer
    id="footer"
    className={`w-full bg-[#f6ebfd] ${
      isAuthPage ? "mt-10" : "mt-40 md:mt-[300px]"
    }`}
  >
      <div className="w-[93%] xl:w-[86%] mx-auto relative">
        {/* Hide Newsletter Section on Login and Signup pages */}
        {!(pathname === "/login" || pathname === "/signup") && (
          <div className="absolute w-full -top-40 md:-top-64 left-1/2 -translate-x-1/2 px-4">
            <div className="relative w-full max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-purple-600 rounded-xl translate-x-2 translate-y-2 md:translate-x-5 md:translate-y-5" />
              <div className="relative bg-primary rounded-xl py-8 md:py-14 lg:py-28 px-6 md:px-12 lg:px-24">
                <div className="flex flex-col items-center text-center gap-4 md:gap-6">
                  <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Subscribe to our newsletter
                  </h1>
                  <p className="text-white text-sm md:text-base lg:text-lg max-w-2xl font-normal mx-auto">
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                    lacus. Sed magna purus, fermentum eu
                  </p>
                  <div className="w-full max-w-md md:max-w-xl flex flex-col justify-start md:justify-center items-center md:flex-row gap-3 mt-4">
                    <input
                      className="w-full md:w-[50%] py-2 md:py-3 px-4 bg-white placeholder:text-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                      placeholder="Your Email"
                      type="email"
                    />
                    <button className="w-full md:w-[23%] bg-secondary hover:bg-gray-600 cursor-pointer text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-lg transition-colors duration-200 text-sm md:text-base">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Content */}
        <div className={`${isAuthPage ? "pt-32 pb-7" : "pt-36 lg:pt-72 pb-12"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Column 1 */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <Image
                src="/images/Footer_images/img5.svg"
                alt="Company Logo"
                width={160}
                height={40}
                className="w-40 md:w-48"
              />
              <p className="text-secondary text-sm md:text-base text-center md:text-left">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat
              </p>
              <div className="flex gap-3">
                {FooterSocialIcons.map((item, index) => (
                  <FooterSocialLinks key={index} href={item.href} icon={item.icon} />
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-start lg:items-center gap-6">
              <h2 className="text-secondary text-xl font-bold ">Links</h2>
              <nav className="w-fit flex flex-col gap-3 text-center md:text-left self-start lg:self-center pl-0 lg:pl-20">
                {[
                  { href: "/", text: "Home" },
                  { href: URL.COURSES, text: "Courses" },
                  { href: URL.SUBJECTS, text: "Subjects" },
                  { href: URL.REQUEST_A_TUTOR, text: "Request a tutor" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center gap-2 hover:text-primary transition-colors text-secondary text-sm md:text-base">
                    <IoIosPlay className="text-primary shrink-0" />
                    {link.text}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-start lg:items-center gap-6">
              <h2 className="text-secondary text-xl font-bold">Support</h2>
              <nav className="flex flex-col gap-3 text-center md:text-left">
                {[
                  { href: URL.ABOUT, text: "About Us" },
                  { href: URL.BLOG, text: "Blogs" },
                  { href: URL.CONTACT_US, text: "Contacts" },
                  { href: URL.FAQ, text: "FAQ" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-center gap-2 hover:text-primary transition-colors text-secondary text-sm md:text-base">
                    <IoIosPlay className="text-primary shrink-0" />
                    {link.text}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-start gap-6">
              <h2 className="text-secondary text-xl font-bold">Contact Us</h2>
              <div className="flex flex-col gap-3 text-center md:text-left">
                <div className="flex items-center gap-2">
                  <HiMapPin className="text-primary text-xl shrink-0" />
                  <p className="text-secondary text-sm md:text-base">
                    1700 W Blancke St, kiyev port south USA, American
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoCall className="text-primary text-xl shrink-0" />
                  <p className="text-secondary text-sm md:text-base">
                    +(92) 336 1016020
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoMdMail className="text-primary shrink-0" />
                  <p className="text-secondary text-sm md:text-base">
                    info@findtutors.pk
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-secondary/30 mt-12 pt-10 text-center">
            <p className="text-secondary text-xs md:text-sm">
              Copyright © 2023 Ragzon. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
