import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link, Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

// Define search result type
interface SearchResult {
  title: string;
  path: string;
  category: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Define searchable content
  const searchableContent: SearchResult[] = [
    { title: 'Define AI Literacy', path: '/defining-ai-literacy', category: 'Fundamentals' },
    { title: 'AI Literacy at The Cow', path: '/ai-literacy-cow', category: 'Fundamentals' },
    { title: 'AI Literacy Principles', path: '/ai-literacy-principles', category: 'Fundamentals' },
    { title: 'AI and Equity', path: '/ai-and-equity', category: 'Ethics & Equity' },
    { title: 'Ethical Use of AI', path: '/ethical-use', category: 'Ethics & Equity' },
    { title: 'Students\' Use of AI', path: '/student-use', category: 'Academic Use' },
    { title: 'Faculty Use of AI', path: '/faculty-use', category: 'Academic Use' },
    { title: 'AI Use for Education', path: '/ai-education', category: 'Academic Use' },
    { title: 'AI Detection Tools', path: '/detection-tools', category: 'Guidelines & Policies' },
    { title: 'Plagiarism and AI', path: '/plagiarism', category: 'Guidelines & Policies' },
    { title: 'AI Citation', path: '/ai-citation', category: 'Guidelines & Policies' },
    { title: 'Challenges and Concerns', path: '/challenges', category: 'Guidelines & Policies' },
    { title: 'Contact Us', path: '/contact', category: 'General' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = searchableContent.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchFocus = () => {
    setShowResults(true);
  };

  const handleSearchBlur = () => {
    // Delay hiding results to allow for clicking
    setTimeout(() => {
      setShowResults(false);
    }, 200);
  };

  const handleResultClick = (path: string) => {
    setSearchQuery('');
    setShowResults(false);
    window.location.href = path;
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
          </div>
          <div className="hidden md:block relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-64 px-4 py-2 text-sm bg-white border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-amber-400" />
            </div>
            
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-amber-200 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
                {Object.entries(
                  searchResults.reduce((acc, result) => {
                    if (!acc[result.category]) {
                      acc[result.category] = [];
                    }
                    acc[result.category].push(result);
                    return acc;
                  }, {} as Record<string, SearchResult[]>)
                ).map(([category, results]) => (
                  <div key={category} className="border-b border-amber-100 last:border-b-0">
                    <div className="px-4 py-2 bg-amber-50 text-xs font-semibold text-amber-800 uppercase tracking-wider">
                      {category}
                    </div>
                    {results.map((result, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 hover:bg-amber-50 cursor-pointer transition-colors duration-150"
                        onClick={() => handleResultClick(result.path)}
                      >
                        <div className="text-sm font-medium text-amber-900">{result.title}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
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