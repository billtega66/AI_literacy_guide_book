import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const StudentUseOfAIPage: React.FC = () => {
  const breadcrumbItems = [
    { label: "Students' Use of AI", path: '/student-use' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/student-use"
      title="Students' Use of AI"
    >
      <ContentSection title="Understanding Student AI Usage">
        <div className="prose prose-amber max-w-none">
          <p>
            The way students interact with learning, research, and academic support has changed as a result of AI’s introduction into higher education. Students might depend more and more on these tools to increase productivity, optimize processes, and access individualized learning experiences, such as automated writing helpers or AI-powered tutoring systems. AI has become a versatile tool for students, supporting multiple academic tasks across majors. There are different purposes that students can use AI to help with: 
          </p>
          <ol style={{ marginLeft: "1.5em", paddingLeft: "1em" }}>
            <li><strong>Writing and Research:</strong> ChatGPT, Grammarly, Claude, Perplexity, etc., for drafting, editing, and summarizing resources.</li>
            <li><strong>Personalized Learning:</strong> AI can assist students in customizing their content to each student’s needs and learning preferences. This way can increase student motivation and engagement. </li>
            <li><strong>Tutoring Systems:</strong> Students can use AI to act as a simulated “lecturer” and assist in the learning process. Moreover, students can change the AI's tone and way of speaking to suit their learning style.</li>
            <li><strong>Language:</strong> AI can correct users’ pronunciation in real time. Furthermore, users can simulate conversations with AI chatbots to practice. With specific courses, materials such as books and lectures can also be translated into certain languages. For instance, the language learning app Duolingo created Duolingo Max, which is a combination of Duolingo and GPT-4, to make language learning easier [1].</li>
            <li> <strong>Creative and Art Designs:</strong> Individuals can use AI on certain platforms to aid in artistic creations. In most AI applications today, users can use prompts to generate artwork for specific projects. AI-generated pictures can support users in the process of thinking and generating ideas. Moreover, students can edit videos and photos with AI tools. For example, Adobe introduced Generative Fill in Adobe Photoshop with many features to help users easily adjust their materials as desired, such as removing background, adding objects, changing colors, etc. [2].</li>
            <li><strong>AI assists STEM students:</strong> With its pre-programmed thinking, AI is a perfect tool for STEM students. Students with computer science backgrounds can benefit from AI tools by allowing them to detect errors and suggest fixes in the coding process. As for students studying mathematics and related subjects like physics or chemistry, AI can be used to solve complex equations step-by-step, help them with the experiments, and explain instructions carefully.</li>
          </ol>
          <p>
          These examples highlight how AI may be used to increase productivity and support education, but their use requires careful engagement to prevent over-reliance. 
          </p>
        </div>
      </ContentSection>
      <ContentSection title="Example for Students’ Use of AI through ChatGPT">
        <div className="prose prose-amber max-w-none">
          <p>
          Students can benefit significantly from the use of AI tools like ChatGPT in higher education, which improves accessibility, engagement, and learning efficiency. In a college environment, most students will be involved in writing theses, papers, and multiple tasks for their assignments. This section focuses on looking at applications of AI, specifically ChatGPT, for college students. 
          </p>
          <p>
          When using AI for personalized and adaptive learning, AI chatbots leverage self-learning abilities to tailor responses to individual student needs, which creates a symbiotic learning environment [3]. ChatGPT adapts to users’ query patterns, providing customized explanations and resources connected with their proficiency level. Similar to human tutoring, this customization helps students learn and apply information more effectively. 
          </p>
          <p>
          By performing tasks like drafting, editing, and data analysis, AI applications improve academic processes. Students report improved task completion speed and productivity when using ChatGPT for research and writing [3][4]. Furthermore, AI’s instant feedback and 24/7 availability support students who cannot participate in class sessions.
          </p>
          <p>
          Because ChatGPT allows asynchronous communication, students can participate in group projects and conversations outside of regular class times[4]. The term “Asynchronous communication” refers to interaction in which people and AI can communicate at different periods without requiring real-time engagement, since responses are not immediate [5]. Its interactive features, which include creating quiz questions and simulating debates, encourage critical thinking and active learning.
          </p>
          <p>
          AI has the potential to completely transform assessment design by creating personalized learning environments or customized assignments. For instance, professors/teachers can focus on providing more complex feedback because ChatGPT can generate quizzes in real time or check written assignments [4]. 
          </p>
          <p>
          Given these benefits, there are still many obstacles to overcome before AI can be widely used in education, especially when it comes to equity and academic integrity.
          </p>
          
            <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">References</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800">
              <li>
              Team, D. (2025, February 4). Introducing Duolingo Max, a learning experience powered by GPT-4. Duolingo Blog. https://blog.duolingo.com/duolingo-max/ 
              </li>
              
              <li>
              Adobe. (n.d.). Photoshop generative fill: Use ai to fill in images - adobe. Next-level Generative Fill. Now in Photoshop. https://www.adobe.com/products/photoshop/generative-fill.html 

              </li>
              <li>
              Jo, H. (2024). From concerns to benefits: A comprehensive study of ChatGPT usage in education. International Journal of Educational Technology in Higher Education, 21(1), 35. https://doi.org/10.1186/s41239-024-00471-4
              </li>
              <li>
              Cotton, D. R. E., Cotton, P. A., & Shipway, J. R. (2023). Chatting and cheating: Ensuring academic integrity in the era of ChatGPT. Innovations in Education and Teaching International. https://doi.org/10.1080/14703297.2023.2190148

              </li>
              <li>
              Staff, O. L. (n.d.). What is asynchronous communication + how do you use it? https://resources.owllabs.com/blog/asynchronous-communication 
              </li>
            </ol>
          </div>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default StudentUseOfAIPage;