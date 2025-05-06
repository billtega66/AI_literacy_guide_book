import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const AboutUsPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'About us', path: '/about' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/about"
      title="About us"
    >
      <ContentSection>
        <div className="prose prose-amber max-w-none">
          <p className="italic mb-4">
          “We are a group of undergraduate researchers from The College of Wooster, studying a diverse range of interdisciplinary fields, including Communication, Education, GMDS, Computer Science, and Economics. By contributing our individual areas of study, we collaborated to create an accessible handbook designed to support anyone in our community seeking to better understand and engage with AI. We hope to influence our community by outlining a thoughtful, and informed approach to AI use. We also hope our project sparks ongoing conversations, helping Wooster become a leader in how liberal arts institutions thoughtfully engage with AI in academic life.” 
          </p>
        </div>
       </ContentSection>
       <ContentSection title="Our Team">
        <div className="prose prose-amber max-w-noe">
          <p className="mb-4">
            <strong>Patrick Johnson</strong>: Patrick is a computer science major at The College of Wooster. He has a background in Artificial Intelligence, especially as it overlaps with the legal field. Patrick will be continuing his academic studies at Wake Forest Law School where he intends to \study the intersection of law and emerging technology. 
          </p>
          <p className="mb-4">
            <strong>Clio Sweeney Forsthoefel</strong>: Clio is a Communications Major and Spanish Minor at The College of Wooster. Curious about emerging technology, she wanted to better understand how to utilize AI in her areas of interest, and help provide student-led guidance on ethical and responsible use.
          </p>
          <p className="mb-4">
            <strong>Astrid Kristl</strong>: Astrid is an exchange student and foreign language teaching assistant at The College of Wooster. As a future teacher, her goal in this collaborative project was to gain a comprehensive and well-rounded understanding of AI, particularly large language models (LLMs), and their potential in teaching and learning, not only to improve her own use of AI technology in her role as a teacher but also to educate her future students on responsible and learning-enhancing AI use in secondary education classrooms.
          </p>
          <p className="mb-4">
            <strong>Nguyen Bao Lam Do</strong>: Lam is a student majoring in the Global Media & Digital Studies department at The College of Wooster. As a GMDS student, he is interested in the ways that technology - more specifically, AI - can impact creativity, communication, and culture. His goal through this project is to give students a better understanding of the potential of AI and how to use it effectively.
          </p>
          <p className="mb-4">
            <strong>James Jiang</strong>: James is a Business Economics major at the College of Wooster. This guy is interested in how AI will change the world’s Economic development. James wants to give suggestions about how to use AI ethically for college students.
          </p>
          <p className="mb-4">
            <strong>Quoc Do</strong>: Quoc is a Computer Science major at the College of Wooster. He is interested in the AI field and has already done some projects that are AI-related. His goal is to further his studies in AI for his future PhD studies.
          </p>
        </div>
       </ ContentSection>
       <ContentSection title="Disclosure Statement">
        <div className="prose prose-amber max-w-none">
          <p className="italic mb-4">
          "AI systems, such as ChatGPT, Perplexity, and Gemini, have been used for the creation of some of the content on this website. Primarily, LLMs were used for research, brainstorming, outlining, proofreading, as well as designing images for individual sections. For further information on the exact use cases, please contact us via the contact button."
          </p>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default AboutUsPage;