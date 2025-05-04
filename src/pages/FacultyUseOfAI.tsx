import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const FacultyUseOfAIPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Faculty Use of AI', path: '/faculty-use' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/faculty-use"
      title="Faculty Use of AI"
    >
      <ContentSection title="AI Integration for Faculty">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
            This guide provides faculty members with information and best practices for integrating AI tools into their teaching and research while maintaining academic integrity.
          </p>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default FacultyUseOfAIPage;