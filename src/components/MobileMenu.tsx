import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from './Navigation';
import ContactPage from '../pages/ContactPage';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      title: 'Introduction',
      href: '/introduction',
      submenu: [{label: 'Define AI Literacy', href:'/def/defining-ai-literacy'},
                {label: 'AI Literacy at The Cow', href: '/ai-literacy-cow'},
                {label: 'AI Literacy Principles', href: '/ai-literacy-principles'},]
    },
    {
      title: 'AI and Ethical Use',
      href: '/principles',
      submenu: ['Fairness', 'Accountability', 'Transparency', 'Human Rights']
    },
    {
      title: 'Case Studies',
      href: '/case-studies',
      submenu: ['Academic Research', 'Student Projects', 'Industry Examples']
    },
    {
      title: 'Resources',
      href: '/resources',
      submenu: ['Publications', 'Tools', 'Guidelines', 'References']
    },
    {
      title: 'Contact',
      href: '/contact'
    },
  ];

  const [openSubmenu, setOpenSubmenu] = React.useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={onClose}>
      <div 
        className="bg-white h-full w-4/5 max-w-sm py-6 px-4 overflow-y-auto transform transition-transform duration-300 ease-in-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-amber-200 pb-4 mb-4">
          <Link href="/" className="font-serif text-2xl font-bold text-amber-900">
            AI Ethics <span className="font-normal text-amber-700">Guidebook</span>
          </Link>
        </div>

        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <div className="flex items-center justify-between py-2">
                  <Link 
                    href={item.href} 
                    className="text-amber-900 font-medium"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                  {item.submenu.length > 0 && (
                    <button 
                      onClick={() => toggleSubmenu(index)}
                      className="text-amber-700 p-2 focus:outline-none"
                    >
                      <ChevronRight 
                        size={16} 
                        className={`transform transition-transform ${openSubmenu === index ? 'rotate-90' : ''}`} 
                      />
                    </button>
                  )}
                </div>
                
                {openSubmenu === index && item.submenu.length > 0 && (
                  <ul className="pl-4 mt-1 border-l-2 border-amber-200">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1">
                        <Link 
                          href={`${item.href}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                          className="text-amber-800 text-sm hover:text-amber-600"
                          onClick={onClose}
                        >
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 pt-6 border-t border-amber-200">
          <Link href="/about" className="block py-2 text-amber-800 hover:text-amber-600">
            About
          </Link>
          <Link href="/contact" className="block py-2 text-amber-800 hover:text-amber-600">
            Contact
          </Link>
          <Link href="/calendar" className="block py-2 text-amber-800 hover:text-amber-600">
            Calendar
          </Link>
        </div>
      </div>
    </div>
  );
};