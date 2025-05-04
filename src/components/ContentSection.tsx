import React from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="font-serif text-2xl font-bold text-amber-900 mb-4">{title}</h2>
      <div className="prose prose-amber max-w-none">
        {children}
      </div>
    </section>
  );
};

interface QuoteBlockProps {
  quote: string;
  author?: string;
  source?: string;
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote, author, source }) => {
  return (
    <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50 italic">
      <p className="text-amber-900">{quote}</p>
      {(author || source) && (
        <footer className="text-amber-700 text-sm mt-2 not-italic">
          {author && <span className="font-medium">{author}</span>}
          {author && source && <span>, </span>}
          {source && <cite>{source}</cite>}
        </footer>
      )}
    </blockquote>
  );
};

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white border border-amber-200 rounded-lg shadow-sm p-6 mb-6 transition-shadow hover:shadow-md">
      <h3 className="font-serif text-xl font-semibold text-amber-900 mb-3">{title}</h3>
      <div className="text-amber-800">
        {children}
      </div>
    </div>
  );
};