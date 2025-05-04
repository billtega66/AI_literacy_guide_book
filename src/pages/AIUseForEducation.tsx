import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const AIUseForEducationPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'AI Use for Education', path: '/ai-education' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/ai-education"
      title="AI Use for Education"
    >
      <ContentSection title="Educational Applications of AI">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
            Artificial Intelligence offers numerous opportunities to enhance educational experiences and outcomes. This section explores various ways AI can be effectively integrated into educational practices.
          </p>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default AIUseForEducationPage;