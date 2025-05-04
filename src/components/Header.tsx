import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link, Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <header className={`w-full sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Top bar */}
      <div className="bg-white border-b border-amber-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/about" className="text-amber-800 hover:text-amber-600 text-sm">
              About
            </Link>
            <Link href="/contact" className="text-amber-800 hover:text-amber-600 text-sm">
              Contact
            </Link>
            <Link href="/calendar" className="text-amber-800 hover:text-amber-600 text-sm">
              Calendar
            </Link>
          </div>
          <form onSubmit={handleSearch} className="hidden md:flex items-center border border-amber-300 rounded">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 text-sm bg-transparent focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="px-2 py-1 text-amber-800">
              <Search size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-amber-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/wooster.jpg" 
                alt="School Logo" 
                className="h-12 w-12 object-contain bg-amber-400"
              />
              <span className="font-serif text-2xl font-bold text-amber-900">
                AI Literacy <span className="font-normal text-amber-700">Guidebook</span>
              </span>
            </Link>
          </div>

          <Navigation />

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-amber-800 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;