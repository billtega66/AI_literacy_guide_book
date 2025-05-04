import React from 'react';
import { Link } from './Navigation';

interface SidebarProps {
  currentPath: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentPath }) => {
  const sidebarItems = [
    { 
      title: 'Defining AI Literacy',
      path: '/defining-ai-literacy'
    },
    { 
      title: 'AI Literacy at The CoW',
      path: '/ai-literacy-cow'
    },
    { 
      title: 'AI Literacy Principles',
      path: '/ai-literacy-principles'
    },
    { 
      title: 'AI and Equity',
      path: '/ai-and-equity',
      subItems: [
        { title: 'Understanding AI-Inherent Inequalities', path: '/ai-and-equity/inequalities' },
        { title: 'Equitable Access to AI Tools', path: '/ai-and-equity/access' }
      ]
    },
    { 
      title: 'Ethical Use of AI',
      path: '/ethical-use'
    },
    { 
      title: 'Students\' Use of AI',
      path: '/student-use'
    },
    { 
      title: 'Challenges and Concerns when using AI in Education',
      path: '/challenges'
    },
    { 
      title: 'Plagiarism Issue of Using AI',
      path: '/plagiarism'
    },
    { 
      title: 'AI Citation in College',
      path: '/ai-citation'
    },
    { 
      title: 'AI Use for Education',
      path: '/ai-education'
    },
    { 
      title: 'Faculty Use of AI',
      path: '/faculty-use'
    },
    { 
      title: 'AI Detection tools\' reliability',
      path: '/detection-tools'
    },
    { 
      title: 'Dynamic AI Policy',
      path: '/dynamic-policy'
    },
  ];

  return (
    <aside className="w-full md:w-64 bg-white border-r border-amber-200">
      <div className="p-4">
        <h3 className="font-serif text-xl font-bold mb-4 text-amber-900 border-b border-amber-200 pb-2">
          AI Literacy Topics
        </h3>
        <nav>
          <ul className="space-y-1">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`block py-2 px-3 rounded transition-colors duration-200 ${
                    currentPath === item.path
                      ? 'bg-amber-100 text-amber-900 font-medium'
                      : 'text-amber-800 hover:bg-amber-50'
                  }`}
                >
                  {item.title}
                </Link>
                {item.subItems && (
                  <ul className="ml-6 mt-1 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={`${index}-${subIndex}`}>
                        <Link
                          href={subItem.path}
                          className={`block py-1 px-3 rounded text-sm transition-colors duration-200 ${
                            currentPath === subItem.path
                              ? 'bg-amber-100 text-amber-900 font-medium'
                              : 'text-amber-700 hover:bg-amber-50'
                          }`}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};