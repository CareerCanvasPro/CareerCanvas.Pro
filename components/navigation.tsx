"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 hover-scale"
          >
            <Image 
              src="/images/logo.png"
              alt="Logo" 
              width={50} 
              height={50} 
            />
            <span className="font-bold text-xl text-gradient">
              Career Canvas
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#0052CC] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-gray-700 hover:text-[#0052CC] transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#0052CC] transition-colors"
            >
              About Us
            </button>
            <Button className="bg-[#0052CC] hover:bg-[#3CB371] transition-colors">
              Download App
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
