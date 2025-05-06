import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection, QuoteBlock, InfoCard } from '../components/ContentSection';
import { ArrowRight, Book, Users, Shield, Globe } from 'lucide-react';
import { Link } from '../components/Navigation';

const HomePage: React.FC = () => {
  const breadcrumbItems = [];
  
  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/"
      title="AI Literacy Guidebook"
    >
      <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg mb-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-amber-900 mb-4">
          A Framework for Ethical AI in Academic Settings
        </h2>
        <p className="text-amber-800 text-lg mb-6">
          This guidebook provides faculty, staff, and students with comprehensive guidance
          on the ethical use of artificial intelligence in teaching, learning, and research.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/defining-ai-literacy" className="inline-flex items-center px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors">
            <span>Get Started</span>
            <ArrowRight size={16} className="ml-2" />
          </Link>
          <Link href="/resources" className="inline-flex items-center px-4 py-2 border border-amber-500 text-amber-700 rounded-md hover:bg-amber-50 transition-colors">
            <span>Explore Resources</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <InfoCard title="For Faculty">
          <div className="flex items-start">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <Users size={24} className="text-amber-700" />
            </div>
            <div>
              <p className="mb-3">
                Guidelines for incorporating AI discussions in your curriculum, creating AI policies for your courses, and fostering responsible AI use.
              </p>
              <Link href="/faculty-use" className="text-amber-600 hover:text-amber-800 inline-flex items-center">
                <span>Faculty Guidelines</span>
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </InfoCard>
        
        <InfoCard title="For Students">
          <div className="flex items-start">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <Book size={24} className="text-amber-700" />
            </div>
            <div>
              <p className="mb-3">
                Best practices for using AI tools ethically in your coursework, understanding AI capabilities and limitations, and developing AI literacy.
              </p>
              <Link href="/student-use" className="text-amber-600 hover:text-amber-800 inline-flex items-center">
                <span>Student Guidelines</span>
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </InfoCard>
        
        <InfoCard title="AI and Equity">
          <div className="flex items-start">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <Shield size={24} className="text-amber-700" />
            </div>
            <div>
              <p className="mb-3">
                Core principles of fairness, transparency, accountability, and human-centeredness in AI applications for academic contexts.
              </p>
              <Link href="/ai-and-equity" className="text-amber-600 hover:text-amber-800 inline-flex items-center">
                <span>Explore Principles</span>
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </InfoCard>
        
        <InfoCard title="Ethical Use of AI">
          <div className="flex items-start">
            <div className="bg-amber-100 p-3 rounded-full mr-4">
              <Globe size={24} className="text-amber-700" />
            </div>
            <div>
              <p className="mb-3">
                Real-world examples of ethical challenges and solutions in AI implementation across various academic disciplines.
              </p>
              <Link href="/ethical-use" className="text-amber-600 hover:text-amber-800 inline-flex items-center">
                <span>View Case Studies</span>
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </InfoCard>
      </div>

      <ContentSection title="Why AI Ethics Matters in Academia">
        <p className="mb-4">
          As artificial intelligence becomes increasingly integrated into academic environments, 
          it presents both opportunities and challenges for teaching, learning, and research. 
          This guidebook aims to help our academic community navigate the ethical considerations 
          of AI adoption.
        </p>
        
        <QuoteBlock 
          quote="AI systems should be designed and operated in a way that respects human autonomy, rights, and cultural diversity while ensuring human control and oversight."
          source="UNESCO Recommendation on the Ethics of Artificial Intelligence"
        />
        
        <p>
          By establishing clear literacy guidelines, we can harness the potential of AI 
          to enhance education while mitigating risks and ensuring alignment with our 
          institutional values and academic integrity standards.
        </p>
      </ContentSection>
    </MainLayout>
  );
};

export default HomePage;