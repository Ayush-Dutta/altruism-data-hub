
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Donation Tracker', path: '/donations' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div 
              className="font-bold text-xl md:text-2xl text-primary cursor-pointer" 
              onClick={() => navigate('/')}
            >
              <span className="text-accent">Edu</span>Care NGO
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <div 
                key={item.name}
                className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </div>
            ))}
            <Button 
              className="bg-primary hover:bg-primary-600 rounded-full px-6"
              onClick={() => navigate('/donate')}
            >
              Donate Now
            </Button>
            <Button 
              className="border-primary text-primary hover:bg-primary-50"
              variant="outline"
              onClick={() => navigate('/admin')}
            >
              Admin Login
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-1 text-gray-700"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-3 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map(item => (
                <div 
                  key={item.name}
                  className="text-gray-600 hover:text-primary transition-colors py-1.5 cursor-pointer"
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </div>
              ))}
              <div className="pt-2 flex flex-col space-y-3">
                <Button 
                  className="bg-primary hover:bg-primary-600 rounded-full"
                  onClick={() => {
                    navigate('/donate');
                    setIsMenuOpen(false);
                  }}
                >
                  Donate Now
                </Button>
                <Button 
                  className="border-primary text-primary hover:bg-primary-50"
                  variant="outline"
                  onClick={() => {
                    navigate('/admin');
                    setIsMenuOpen(false);
                  }}
                >
                  Admin Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
