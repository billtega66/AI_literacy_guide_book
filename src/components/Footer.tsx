import React from 'react';
import { Mail, FileText, Download, ExternalLink } from 'lucide-react';
import { Link } from './Navigation';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-50 border-t border-amber-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-amber-900 mb-4">
              AI Ethics Guidebook
            </h3>
            <p className="text-amber-800 mb-4">
              A comprehensive guide to ethical considerations in artificial intelligence
              for academic settings.
            </p>
            <div className="flex space-x-4">
              <Link href="/contact" className="text-amber-700 hover:text-amber-900">
                <Mail size={20} />
              </Link>
              <Link href="/resources" className="text-amber-700 hover:text-amber-900">
                <FileText size={20} />
              </Link>
              <Link href="/download" className="text-amber-700 hover:text-amber-900">
                <Download size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-amber-900 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/defining-ai-literacy" className="text-amber-700 hover:text-amber-900">
                  Define AI Literacy
                </Link>
              </li>
              <li>
                <Link href="/ai-and-equity" className="text-amber-700 hover:text-amber-900">
                  AI and Equity
                </Link>
              </li>
              <li>
                <Link href="/student-use" className="text-amber-700 hover:text-amber-900">
                  Students' Use of AI
                </Link>
              </li>
              <li>
                <Link href="/ethical-use" className="text-amber-700 hover:text-amber-900">
                  Ethical Use of AI
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-amber-900 mb-3">External Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" className="flex items-center text-amber-700 hover:text-amber-900">
                  <span>UNESCO AI Ethics</span>
                  <ExternalLink size={12} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link href="https://www.nist.gov/artificial-intelligence" className="flex items-center text-amber-700 hover:text-amber-900">
                  <span>NIST AI</span>
                  <ExternalLink size={12} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link href="https://hai.stanford.edu/" className="flex items-center text-amber-700 hover:text-amber-900">
                  <span>Stanford HAI</span>
                  <ExternalLink size={12} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-200 mt-8 pt-4 text-center text-amber-700 text-sm">
          <p>© {new Date().getFullYear()} AI Ethics Guidebook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;