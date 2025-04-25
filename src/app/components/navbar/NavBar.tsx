"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    if (window.location.pathname === "/login" || window.location.pathname === "/signup") {
      setActiveTab("");
    }
  }, []);

  const toggleSlider = () => setIsOpen(!isOpen);

  const handleAuthClick = () => {
    setActiveTab("");
  };

  return (
    <>
      <section className="w-full border-b-2 border-gray-300 py-2 bg-white fixed top-0 z-50">
        <div className="flex items-center justify-between px-5 sm:px-7 lg:px-20 h-16 lg:h-20">
          <div className="w-fit h-fit flex items-center gap-x-3">
            <img src="/images/NavBar_images/img1.svg" alt="Logo" className="h-9" />
            <Link href="/" className="font-bold text-2xl" onClick={() => setActiveTab("/")}>
              FindTutors
            </Link>
          </div>

          <div className="w-fit h-fit flex items-center gap-x-2">
            <div className="hidden lg:flex items-center gap-x-2">
              <ul className="flex items-center gap-x-2">
                {[
                  { link: "Home", route: "/" },
                  { link: "Tutors", route: "/tutors" },
                  { link: "Become a Tutor", route: "/become-a-tutor" },
                  { link: "Contact Us", route: "/contactus" },
                ].map((tab) => (
                  <Link
                    key={tab.route}
                    href={tab.route}
                    className={`px-4 py-2 rounded-lg text-sm cursor-pointer transition ${
                      activeTab === tab.route
                        ? "bg-purple-100 text-primary"
                        : "hover:bg-purple-100 hover:text-primary"
                    }`}
                    onClick={() => setActiveTab(tab.route)}
                  >
                    {tab.link}
                  </Link>
                ))}
              </ul>

              {/* Hover dropdown */}
              <div className="relative group">
                <p
                  className={`px-4 py-2 flex rounded-lg gap-x-2 text-sm items-center cursor-pointer ${
                    ["/about", "/blog", "/faqs", "/how-it-works"].includes(activeTab)
                      ? "bg-purple-100 text-primary"
                      : "hover:bg-purple-100 hover:text-primary"
                  }`}
                >
                  More <FaChevronDown className="text-xs" />
                </p>
                <div className="absolute right-0 mt-2 w-48 border border-black bg-white rounded-lg shadow py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                  <ul className="flex flex-col gap-y-2">
                    {[
                      { link: "About", route: "/about" },
                      { link: "Blog", route: "/blog" },
                      { link: "FAQs", route: "/faqs" },
                      { link: "How it Works", route: "/how-it-works" },
                    ].map((tab) => (
                      <Link
                        key={tab.route}
                        href={tab.route}
                        className={`flex px-2 py-2 gap-x-1 items-center cursor-pointer transition ${
                          activeTab === tab.route
                            ? "bg-gray-100 text-primary"
                            : "hover:bg-gray-100 hover:text-primary"
                        }`}
                        onClick={() => setActiveTab(tab.route)}
                      >
                        <LuDot className="text-2xl" />
                        {tab.link}
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-3">
              <FaBars className="lg:hidden cursor-pointer text-xl" onClick={toggleSlider} />
              <Link
                href="/login"
                className="border hidden sm:block px-4 py-2 text-sm xl:text-base cursor-pointer rounded-md hover:bg-purple-600 hover:text-white transition"
                onClick={handleAuthClick}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="border hidden sm:block px-4 py-2 text-sm xl:text-base cursor-pointer bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                onClick={handleAuthClick}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-sm shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col gap-4">
          <RxCross2 className="self-start cursor-pointer text-xl" onClick={toggleSlider} />
          {[
            { link: "Home", route: "/" },
            { link: "Tutors", route: "/tutors" },
            { link: "Become a Tutor", route: "/becomeatutor" },
            { link: "Contact Us", route: "/contactus" },
          ].map((tab) => (
            <Link
              key={tab.route}
              href={tab.route}
              className={`px-4 py-2 text-base rounded-lg cursor-pointer transition ${
                activeTab === tab.route ? "bg-gray-200 text-primary" : "hover:bg-gray-100"
              }`}
              onClick={() => {
                setActiveTab(tab.route);
                setIsOpen(false);
              }}
            >
              {tab.link}
            </Link>
          ))}

          {/* Mobile dropdown (click-based) */}
          <div className="dropdown">
            <p
              className={`px-4 py-2 cursor-pointer flex items-center gap-2 ${
                ["/about", "/blog", "/faqs", "/how-it-works"].includes(activeTab)
                  ? "bg-gray-200 text-primary"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              More <FaChevronDown className="text-sm" />
            </p>
            {mobileDropdownOpen && (
              <div className="pl-4 flex flex-col">
                {[
                  { link: "About", route: "/about" },
                  { link: "Blog", route: "/blog" },
                  { link: "FAQs", route: "/faqs" },
                  { link: "How it Works", route: "/how-it-works" },
                ].map((tab) => (
                  <Link
                    key={tab.route}
                    href={tab.route}
                    className={`px-4 py-2 cursor-pointer transition ${
                      activeTab === tab.route ? "bg-gray-200 text-primary" : "hover:bg-gray-200"
                    }`}
                    onClick={() => {
                      setActiveTab(tab.route);
                      setMobileDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    {tab.link}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              className="border px-4 py-2 cursor-pointer rounded-md hover:bg-purple-600 hover:text-white transition"
              onClick={() => {
                handleAuthClick();
                setIsOpen(false);
              }}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="border px-4 py-2 cursor-pointer bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
              onClick={() => {
                handleAuthClick();
                setIsOpen(false);
              }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden" onClick={toggleSlider}></div>
      )}
    </>
  );
};

export default NavBar;
