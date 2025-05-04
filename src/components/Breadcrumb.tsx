import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from './Navigation';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="py-4 px-4 md:px-6 bg-amber-50">
      <ol className="flex flex-wrap items-center text-sm">
        <li className="flex items-center">
          <Link href="/" className="text-amber-700 hover:text-amber-900">
            Home
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight size={14} className="mx-2 text-amber-400" />
            {index === items.length - 1 ? (
              <span className="font-medium text-amber-900">{item.label}</span>
            ) : (
              <Link href={item.path} className="text-amber-700 hover:text-amber-900">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};