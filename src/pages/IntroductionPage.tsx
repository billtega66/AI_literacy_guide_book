import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection, QuoteBlock } from '../components/ContentSection';

const IntroductionPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Introduction', path: '/introduction' }
  ];
  
  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/introduction"
      title="Introduction to AI Literacy"
    >
      <ContentSection title="What is AI Literacy?">
        <p className="mb-4">
          AI Ethics encompasses the moral principles and values that guide the development, deployment, and use of artificial intelligence systems. 
          It addresses questions about how AI should be designed, implemented, and regulated to ensure that these systems benefit humanity 
          and avoid causing harm.
        </p>
        
        <p className="mb-4">
          In academic contexts, AI ethics focuses on how these technologies can be incorporated into teaching, learning, and research 
          in ways that uphold academic integrity, promote fairness, protect privacy, and enhance rather than undermine the educational experience.
        </p>
        
        <QuoteBlock 
          quote="The challenge of AI ethics is not simply to avoid harm but to design AI so that it promotes human flourishing."
          author="Shannon Vallor"
          source="Technology and the Virtues (2016)"
        />
      </ContentSection>
      
      <ContentSection title="Key Issues in AI Ethics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-amber-50 p-5 rounded-lg">
            <h3 className="font-serif text-xl font-semibold text-amber-900 mb-3">Fairness and Bias</h3>
            <p>
              AI systems can perpetuate or amplify existing social biases if they are trained on biased data or designed with biased assumptions. 
              Ensuring fairness means designing systems that do not discriminate against individuals or groups based on protected characteristics.
            </p>
          </div>
          
          <div className="bg-amber-50 p-5 rounded-lg">
            <h3 className="font-serif text-xl font-semibold text-amber-900 mb-3">Transparency and Explainability</h3>
            <p>
              Many AI systems operate as "black boxes," making decisions that are difficult to understand or explain. 
              Transparency requires that the operation of AI systems be understandable to those who use and are affected by them.
            </p>
          </div>
          
          <div className="bg-amber-50 p-5 rounded-lg">
            <h3 className="font-serif text-xl font-semibold text-amber-900 mb-3">Privacy and Data Governance</h3>
            <p>
              AI systems often rely on large amounts of data, raising concerns about privacy, consent, and appropriate use of personal information. 
              Proper data governance frameworks are essential to protect individual rights.
            </p>
          </div>
          
          <div className="bg-amber-50 p-5 rounded-lg">
            <h3 className="font-serif text-xl font-semibold text-amber-900 mb-3">Accountability</h3>
            <p>
              When AI systems cause harm or make mistakes, it can be unclear who is responsible. 
              Establishing clear lines of accountability ensures that there are appropriate responses when problems occur.
            </p>
          </div>
        </div>
      </ContentSection>
      
      <ContentSection title="Why AI Ethics Matters in Academic Settings">
        <p className="mb-4">
          Academic institutions have a responsibility to prepare students for a world increasingly shaped by AI technologies. 
          This includes not only teaching technical skills, but also fostering critical thinking about the ethical implications of these technologies.
        </p>
        
        <p className="mb-4">
          Furthermore, as AI tools become more prevalent in educational settings—from automated grading to personalized learning platforms—institutions 
          must consider how these tools might impact the educational experience, academic integrity, and student privacy.
        </p>
        
        <p>
          By establishing clear ethical guidelines for AI use, academic institutions can harness the potential benefits of these technologies 
          while mitigating risks and ensuring alignment with educational values and objectives.
        </p>
      </ContentSection>
    </MainLayout>
  );
};

export default IntroductionPage;