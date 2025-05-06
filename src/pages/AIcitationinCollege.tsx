import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const AIcitationinCollegePage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'AI citation in College', path: '/ai-citation' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/ai-citation"
      title="AI citation in College"
    >
      <ContentSection>
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
          As AI is increasingly used, universities are gradually introducing various policies on AI. One of them is how to cite AI. The College of Wooster Library Website released a guideline for students on how to cite AI in 2023[1].

          </p>
          <p className="mb-4">
          The College of Wooster Library [1] website suggests that before using AI, students should confirm with professors whether AI can be used in class or assignments, and to what extent. Professors will also mention the instructions for using AI in the syllabus. It is the students' ethical responsibility to confirm with professors whether AI can be used
          </p>
          <p className="mb-4">
            The website also points out how to use main citation formats such as APA and MLA to write citations, and also adds How to Cite ChatGPT by McAdoo [2].  Regarding APA, the general format for citing existing literature, such as works, follows the format by author, year, title, and URL. However, when citing ChatGPT, the format is slightly different. In the reference column at the end of the article, OpenAI should be used as the author, and the year should be indicated in brackets. Then ChatGPT is the heading, and the URL is attached at the end.
          </p>

          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">References</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800">
              <li>
              College of Wooster Library (2023). Artificial Intelligence- Professional Learning Community Resources. https://libguides.wooster.edu/AIPLC/citation
              </li>
              <li>
              McAdoo, T. (2024). How to Cite ChatGPT. American Psychological Association. https://apastyle.apa.org/blog/how-to-cite-chatgpt
              </li>
            </ol>
          </div>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default AIcitationinCollegePage;