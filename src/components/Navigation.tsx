import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavItemProps {
  title: string;
  items?: { label: string; href: string }[];
  href: string;
}

export const NavItem: React.FC<NavItemProps> = ({ title, items, href }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // 300ms delay before closing
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // If there are no items, render as a direct link
  if (!items || items.length === 0) {
    return (
      <Link 
        href={href}
        className="flex items-center px-4 py-2 text-amber-900 hover:text-amber-700 focus:outline-none"
      >
        <span className="font-medium">{title}</span>
      </Link>
    );
  }

  // Otherwise render as a dropdown
  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center px-4 py-2 text-amber-900 hover:text-amber-700 focus:outline-none"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown 
          size={16} 
          className="ml-1 transition-transform duration-200 ease-in-out" 
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} 
        />
      </button>
      
      {isOpen && (
        <div 
          className="absolute z-10 w-64 py-2 mt-1 bg-white rounded-md shadow-lg border border-amber-200"
        >
          {items.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className="block px-4 py-2 text-sm text-amber-900 hover:bg-amber-50"
            >
              {item.label}
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
      title: 'Fundamentals',
      href: '/introduction',
      items: [
        { label: 'Define AI Literacy', href: '/defining-ai-literacy' },
        { label: 'AI Literacy at The Cow', href: '/ai-literacy-cow' },
        { label: 'AI Literacy Principles', href: '/ai-literacy-principles' },
      ]
    },
    {
      title: 'Ethics & Equity',
      href: '/principles',
      items: [
        { label: 'AI and Equity', href: '/ai-and-equity' },
        { label: 'Ethical Use of AI', href: '/ethical-use' },
      ]
    },
    {
      title: 'Academic Use',
      href: '/case-studies',
      items: [
        { label: 'Students\' Use of AI', href: '/student-use' },
        { label: 'Faculty\'s Use of AI', href: '/faculty-use' },
        { label: 'AI Use for Education', href: '/ai-education' },
      ]
    },
    {
      title: 'Guidelines & Policies',
      href: '/resources',
      items: [
        { label: 'AI Detection Tools\' Reliability', href: '/detection-tools' },
        { label: 'Plagiarism Issue of Using AI', href: '/plagiarism' },
        { label: 'AI Citation in College', href: '/ai-citation' },
        { label: 'Challenges and Concerns when using AI in Education', href: '/challenges' },
      ]
    },
    {
      title: 'Contact',
      href: '/contact',
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