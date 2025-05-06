import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const DefiningAILiteracyPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Defining AI Literacy', path: '/defining-ai-literacy' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/defining-ai-literacy"
      title="Defining AI Literacy"
    >
      <ContentSection>
        <div className="prose prose-amber max-w-none">
          {/* FLOAT the figure and give it exactly 304px width */}
          <figure className="float-left w-[304px] mr-6 mb-4">
            <img
              src="/defining_ai_literacy.png"
              alt="Defining AI Literacy"
              width={304}
              height={257}
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <figcaption className="text-sm text-amber-700 mt-2 text-center">
              OpenAI. (n.d.). ChatGPT. https://chatgpt.com/
            </figcaption>
          </figure>

          <p className="mb-4">
            As AI rapidly reshapes academic and professional settings, defining AI literacy at The College of Wooster is essential to maintain a foundation of academic integrity in our liberal arts curriculum. Although "there is no unified and agreed definition of AI literacy" [1], scholars offer a useful perspective on AI literacy, that is applicable to our community: "We define AI literacy as a set of competencies that enables individuals to critically evaluate AI technologies; communicate and collaborate effectively with AI; and use AI as a tool online, at home, and in the workplace." [2] This working definition emphasizes that AI literacy is more than a technical skill, and requires human-centered competencies essential across all areas of life.
          </p>

          <p className="mb-4">
            Yale University created a Generative Artificial Intelligence (GAI) Literacy Framework (2025) that outlines four core domains to help students develop effective AI literacy skills: understanding, using, evaluating, and analyzing GAI. This source serves as a compelling example of how Yale has operationalized the "set of competencies" that Long and Magerko identify as central to AI literacy [2]. By examining how these domains are applied, we can better understand how a liberal arts institution like Wooster might adopt a similarly intentional approach to AI literacy.
          </p>

          <p className="mb-8">
            In preparing students and staff to navigate an AI-influenced future, our community must ensure that the introduction of AI literacy strengthens, and does not replace the mission of our liberal arts institution. The Association of American Colleges and Universities defines the Liberal Arts Tradition as "an approach to learning that empowers individuals and prepares them to deal with complexity, diversity, and change" [3]. Integrating AI literacy requires interdisciplinary thinking as students not only understand the technologies themselves but navigate how this transformative technology adapts traditional academic settings.
          </p>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg mt-8">
          <h3 className="text-lg font-semibold text-amber-900 mb-4">References</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800">
            <li>
              Van Wyk, B. (2024). Exploring the philosophy and practice of AI literacy in higher education in the Global South: a scoping review. Cybrarians Journal, 73, 1–21. https://doi.org/10.70000/cj.2024.73.601
            </li>
            <li>
              Long, D., & Magerko, B. (2020). What is AI Literacy? Competencies and Design Considerations. Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems, 1–16. https://doi.org/10.1145/3313831.3376727
            </li>
            <li>
              What Is Liberal Education? (2024). AAC&U. https://www.aacu.org/trending-topics/what-is-liberal-education
            </li>
          </ol>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default DefiningAILiteracyPage;
