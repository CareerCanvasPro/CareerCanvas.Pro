import { GraduationCap, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-[#0052CC]" />
              <span className="font-bold text-xl text-gradient">CareerCanvas</span>
            </div>
            <p className="text-gray-600">
              Transform your learning journey with our innovative educational platform.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#0052CC] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 hover:text-[#0052CC] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#0052CC] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">support@careercanvas.com</li>
              <li className="text-gray-600">+1 (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#0052CC] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0052CC] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0052CC] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#0052CC] transition-colors">
                <Mail className="h-6 w-6" />
              </a>
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