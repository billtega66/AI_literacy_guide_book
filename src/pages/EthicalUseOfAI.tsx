import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const EthicalUseOfAIPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Ethical Use of AI', path: '/ethical-use' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/ethical-use"
      title="Ethical Use of AI in Academia"
    >
      <ContentSection title="Introduction">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
            Combining artificial intelligence (AI) into academic environments has introduced a range of ethical challenges. Ethical issues arise primarily from improper behaviors that compromise academic integrity. Among college students, a common concern involves the excessive use of AI tools, such as ChatGPT, to produce assignments without appropriate acknowledgment or involving the critical thinking process. Although AI models demonstrate impressive capabilities in generating coherent written work, they fundamentally lack autonomous human reasoning. Overreliance on AI-generated content undermines the core educational objective of fostering independent thinking skills among students.
          </p>
        </div>
      </ContentSection>
      <ContentSection title="Ethical Guidelines for AI Use">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
            Recognizing these challenges, many universities have established policies to guide the ethical use of AI. Students need to understand and comply with these guidelines to uphold academic integrity. For instance, the University of Melbourne indicated"Writing with GenAI" guidance mandates that students include an AI Use Statement at the end of any assignment utilizing AI tools [1] . This statement must specify which AI tools were used and describe their role in the production of the assignment.
          </p>
          <p className="mb-4">
          Furthermore, students are encouraged to critically evaluate the potential risks associated with AI outputs, including the possibility of bias, inaccuracies, or unintentional plagiarism. Before incorporating AI-generated content, students should evaluate whether the output aligns with academic standards and ethical practices [2].
          </p>
          
            <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">References</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800">
              <li>
              University of Melbourne. (2023). Academic Integrity: Writing with GenAI. Retrieved from https://academicintegrity.unimelb.edu.au

              </li>
              
              <li>
            Cotton, D. R. E., Cotton, P. A., & Shipway, J. R. (2023). Chatting and cheating: Ensuring academic integrity in the era of ChatGPT. Innovations in Education and Teaching International. https://doi.org/10.1080/14703297.2023.2190148

              </li>
            </ol>
          </div>
        </div>
      </ContentSection>
    </MainLayout>
  );
};
export default EthicalUseOfAIPage;