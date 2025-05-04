import React from 'react';
import Header from './Header';
import { Sidebar } from './Sidebar';
import { Breadcrumb } from './Breadcrumb';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  breadcrumbItems: { label: string; path: string }[];
  currentPath: string;
  title?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  breadcrumbItems,
  currentPath,
  title
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="flex-grow flex flex-col md:flex-row">
        <Sidebar currentPath={currentPath} />
        
        <main className="flex-grow p-4 md:p-8 bg-white">
          {title && (
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-amber-900 mb-6 border-b border-amber-200 pb-4">
              {title}
            </h1>
          )}
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};