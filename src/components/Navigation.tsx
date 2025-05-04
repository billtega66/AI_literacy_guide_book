import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItemProps {
  title: string;
  items?: string[];
  href: string;
}

export const NavItem: React.FC<NavItemProps> = ({ title, items, href }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center px-4 py-2 text-amber-900 hover:text-amber-700 focus:outline-none"
        onClick={toggleDropdown}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span className="font-medium">{title}</span>
        {items && items.length > 0 && (
          <ChevronDown size={16} className="ml-1 transition-transform duration-200 ease-in-out" 
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
        )}
      </button>
      
      {items && items.length > 0 && isOpen && (
        <div 
          className="absolute z-10 w-48 py-2 mt-1 bg-white rounded-md shadow-lg border border-amber-200"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item, index) => (
            <Link 
              key={index} 
              href={`${href}/${item.toLowerCase().replace(/ /g, '-')}`} 
              className="block px-4 py-2 text-sm text-amber-900 hover:bg-amber-50"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const Link: React.FC<{
  href: string;
  className?: string;
  children: React.ReactNode;
}> = ({ href, className, children }) => {
  return (
    <a
      href={href}
      className={`transition-colors duration-200 ${className || ''}`}
    >
      {children}
    </a>
  );
};

export const Navigation: React.FC = () => {
  const navItems = [
    {
      title: 'Introduction',
      href: '/introduction',
      items: ['What is AI Ethics?', 'Importance in Academia', 'Course Overview']
    },
    {
      title: 'Principles',
      href: '/principles',
      items: ['Fairness', 'Accountability', 'Transparency', 'Human Rights']
    },
    {
      title: 'Case Studies',
      href: '/case-studies',
      items: ['Academic Research', 'Student Projects', 'Industry Examples']
    },
    {
      title: 'Resources',
      href: '/resources',
      items: ['Publications', 'Tools', 'Guidelines', 'References']
    },
    {
      title: 'Contact',
      href: '/contact',
      items: []
    },
  ];

  return (
    <nav className="hidden md:flex items-center justify-between">
      <div className="flex space-x-2">
        {navItems.map((item, index) => (
          <NavItem 
            key={index} 
            title={item.title} 
            items={item.items} 
            href={item.href} 
          />
        ))}
      </div>
    </nav>
  );
};