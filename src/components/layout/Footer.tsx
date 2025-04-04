
import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              <span className="text-accent">Edu</span>
              <span className="text-primary">Care</span> NGO
            </h3>
            <p className="text-gray-600 mb-4">
              Empowering communities through education and support for underprivileged children across multiple schools.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-500 hover:text-accent" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-500 hover:text-primary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="mailto:contact@educarengo.org" className="text-gray-500 hover:text-secondary" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-primary">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-primary">About Us</a></li>
              <li><a href="/donations" className="text-gray-600 hover:text-primary">Donation Tracker</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact Us</a></li>
              <li><a href="/admin" className="text-gray-600 hover:text-primary">Admin</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-accent mt-0.5" />
                <span className="text-gray-600">
                  123 Education Lane,<br />
                  Charity Park, CP 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-accent" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent" />
                <span className="text-gray-600">contact@educarengo.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-600 mb-3">
              Subscribe to stay updated with our work and impact.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-3 py-2 text-sm rounded-l-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary w-full"
              />
              <button className="bg-primary text-white px-3 py-2 text-sm rounded-r-md hover:bg-primary-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <p className="text-gray-500 text-center text-sm">
            © {currentYear} EduCare NGO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
