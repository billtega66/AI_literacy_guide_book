import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const DynamicAIPolicyPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Dynamic AI Policy', path: '/dynamic-policy' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/dynamic-policy"
      title="Dynamic AI Policy"
    >
      <ContentSection>
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
           Artificial intelligence (AI) is a rapidly evolving field where technological capabilities and applications can quickly change. The College of Wooster is committed to the review of its AI guidelines in light of these potential changes. 

          </p>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default DynamicAIPolicyPage;