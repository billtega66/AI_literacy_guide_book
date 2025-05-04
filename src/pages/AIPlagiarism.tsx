import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const AIPlagiarismPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'AI, Plagiarism, and Citation', path: '/plagiarism' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/plagiarism"
      title="AI, Plagiarism, and the Need for Proper Citation"
    >
      <ContentSection title="Understanding AI Plagiarism">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
             Plagiarism remains a critical concern in academic settings. Traditionally, plagiarism is understood as directly copying another’s work without proper acknowledgment. However, plagiarism also includes the misappropriation of ideas, structure, or paraphrased content without sufficient attribution. The use of AI introduces new dimensions to this problem.
          </p>
          
          <p className="mb-4">
 The College of Wooster library website [1] introduced AI in professional learning for students, The website mentions that wooster students should confirm with the professor whether AI can be used in the class or assignment, and to what extent AI is involved. McAdoo (2024)'s tutorial on How to cite Chatgpt mentions using mainstream formats such as APA and MLA to cite chatgpt [3]. Newcastle University [2] has a particularly interesting citation method, saying that in addition to formal citations, you can also add how to interact with artificial intelligence in the appendix. While citing Chatgpt and other AI, most professors' course outlines suggest that if any AI is used for any purpose, write a statement about the use of AI at the end of the article.
          </p>
          <p className="mb-4">
The ethical use of AI in academia requires careful adherence to established principles of academic integrity, critical engagement with AI-generated content, and transparent citation practices. While AI presents valuable opportunities to assist students in academic work, its responsible use is paramount to preserving the fundamental goals of higher education—developing independent, critical, and ethical thinkers.

          </p>
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">References</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800">
              <li>
              College of Wooster Library (2023). Artificial Intelligence- Professional Learning Community Resources. https://libguides.wooster.edu/AIPLC/citation
              </li>
              <li>
              Newcastle University. (2023). Citing AI-generated content in academic work. Retrieved from https://www.ncl.ac.uk
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


export default AIPlagiarismPage;