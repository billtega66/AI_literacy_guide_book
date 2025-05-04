import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const AILiteracyatTheCowPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'AI Literacy at The College of Wooster', path: '/ai-literacy-cow' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/ai-literacy-cow"
      title="AI Literacy at The College of Wooster"
    >
      <ContentSection>
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
           The goal of defining AI literacy for students, faculty, and staff at The College of Wooster is to establish a common foundation for academic integrity that can help anyone in our community learn how to use AI tools effectively. According to the College’s mission statement, “Wooster graduates are creative and independent thinkers with exceptional abilities to ask important questions, research complex issues, solve problems, and communicate new knowledge and insight” [1]. Fully understanding generative artificial intelligence and its implications is a new challenge for our community. Open dialogue and shared understandings of AI literacy support Wooster’s motto of Independent Minds, Working Together and reflect our commitment to uphold collective learning in a new digital age. Navigating this new technology creates meaningful opportunities for both students and staff to learn with and from one another. Scots who are AI-literate are empowered to make thoughtful, informed decisions about their use of AI, reinforcing rather than replacing the value of independent thought. AI tools are increasingly integrated into research, writing, and communication in academia, and understanding how to use them responsibly is essential to upholding the College of Wooster’s mission as a liberal arts institution. The College of Wooster has outlined its core values in The Scots Key, all of which should be adhered to when using AI tools and considered when learning about AI.
      
          </p>
          <p className="mb-4">
            Pursuant to the Scot’s Key, all members of The College of Wooster should adhere to the Community Values and Principles, Wooster Ethic, Civility Statement, and Statement on Freedom of Expression and Inquiry when using artificial intelligence (AI) [2].
          </p>
          <p className="mb-4">
          In alignment with the College’s Community Values and Principles and the Wooster Ethic, all uses of AI should uphold academic and personal integrity, a culture of honesty, and trust in all academic endeavors, social interactions, and College-related official business. 
          </p>
          <p className="mb-4">
          In alignment with the College’s Civility Statement, the use of AI should also reflect a commitment to fostering respectful and inclusive environments. AI should not be used in ways that perpetuate bias, exclusion, or harm.
          </p>
          <p className="mb-4">
          In alignment with the College’s Statement on Freedom of Expression and Inquiry, the use of AI should uphold the College’s commitment to freedom of expression by supporting open inquiry, critical engagement, and the pursuit of knowledge. At the same time, it should not be used in ways that cause dignitary harm or undermine the inclusive and equitable environment essential to our academic community. 

          </p>
        
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">References</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800">
              <li>
              Mission and Vision. (n.d.). The College of Wooster. https://wooster.edu/about/mission-and-vision/

              </li>
              
              <li>
              College of Wooster. (2024). The Scot’s Key. https://inside.wooster.edu/student-rights/scots-key/
              </li>
            </ol>
          </div>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default AILiteracyatTheCowPage;