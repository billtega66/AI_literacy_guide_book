import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection, InfoCard } from '../components/ContentSection';
import { Link } from '../components/Navigation';
import { ArrowRight } from 'lucide-react';

const AIandEquityPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'AI and Equity', path: '/ai-and-equity' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/ai-and-equity"
      title="AI and Equity"
    >
      <ContentSection>
        <div className="prose prose-amber max-w-none mb-8">
          <p className="text-amber-800 italic">
            Note: Unless indicated otherwise, the use of the term AI system or AI technology refers to large language models (LLMs), "a type of AI system designed to understand and generate human language based on the text input it receives" (AI at Yale, 2025), like ChatGPT or Gemini operated by OpenAI and Google, respectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/ai-and-equity/inequalities" className="block">
            <InfoCard title="Understanding General AI-Inherent Inequalities">
              <div className="flex items-start">
                <div>
                  <p className="mb-3 text-amber-800">
                    Explore the inherent biases and inequalities present in AI systems and their impact on different communities.
                  </p>
                  <span className="text-amber-600 hover:text-amber-800 inline-flex items-center">
                    Learn More <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </InfoCard>
          </Link>

          <Link href="/ai-and-equity/access" className="block">
            <InfoCard title="Equitable Access to AI Tools at The College of Wooster">
              <div className="flex items-start">
                <div>
                  <p className="mb-3 text-amber-800">
                    Learn about initiatives and resources ensuring fair access to AI tools across the College community.
                  </p>
                  <span className="text-amber-600 hover:text-amber-800 inline-flex items-center">
                    Learn More <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </InfoCard>
          </Link>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default AIandEquityPage;