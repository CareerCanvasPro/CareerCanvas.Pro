import { GraduationCap, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Social Media - Left */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
             <Image src="https://i.postimg.cc/Sx1xzz7C/logo-bg-ts.png" alt="Logo" width={50} height={50} />
              <span className="font-bold text-xl text-gradient">Career Canvas</span>
            </div>
            <div className="flex space-x-5">
              <a 
                href="#" 
                className="transform hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-[#1877F2] hover:text-[#0052CC]" />
              </a>
              <a 
                href="#" 
                className="transform hover:scale-110 transition-transform duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 text-[#1DA1F2] hover:text-[#0052CC]" />
              </a>
              <a 
                href="#" 
                className="transform hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-[#E4405F] hover:text-[#0052CC]" />
              </a>
              <a 
                href="#" 
                className="transform hover:scale-110 transition-transform duration-300"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 text-[#EA4335] hover:text-[#0052CC]" />
              </a>
            </div>
            <p className="text-gray-600 max-w-xs">
              Transform your learning journey with our innovative educational platform.
            </p>
          </div>

          {/* Contact Information - Middle */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className="font-semibold text-gray-900 text-xl mb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 group">
                <Mail className="h-5 w-5 text-[#0052CC] group-hover:scale-110 transition-transform" />
                <a href="mailto:support@careercanvas.com" className="hover:text-[#0052CC] transition-colors">
                  support@careercanvas.pro
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 group">
                <Phone className="h-5 w-5 text-[#0052CC] group-hover:scale-110 transition-transform" />
                <a href="tel:+15551234567" className="hover:text-[#0052CC] transition-colors">
                  +88 (000) 001-001
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 group">
                <MapPin className="h-5 w-5 text-[#0052CC] group-hover:scale-110 transition-transform" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Newsletter - Right */}
          <div className="flex flex-col items-end text-right">
            <h3 className="font-semibold text-gray-900 text-xl mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest updates and learning resources.
            </p>
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border-2 border-[#0052CC]/20 focus:border-[#0052CC] focus:outline-none transition-colors"
              />
              <button className="mt-3 w-full bg-[#0052CC] text-white px-6 py-2 rounded-lg hover:bg-[#3CB371] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Career Canvas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}