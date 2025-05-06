import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';
import { ExternalLink } from 'lucide-react';

const AIUseForEducationPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'AI Use for Education', path: '/ai-education' }
  ];

  const aiTools = [
    {
      name: 'ChatGPT EDU',
      logo: '/chatgpt.png',
      url: 'https://openai.com/index/introducing-chatgpt-edu/',
      description: 'OpenAI\'s educational version of ChatGPT designed specifically for academic use.',
      bgColor: 'bg-[#74AA9C]'
    },
    {
      name: 'Khanmigo',
      logo: '/Khanmigo.png',
      url: 'https://www.khanacademy.org/khan-labs',
      description: 'Khan Academy\'s AI-powered learning assistant for personalized education.',
      bgColor: 'bg-[#502D16]'
    },
    {
      name: 'SchoolAI',
      logo: '/schoolAI.jpg',
      url: 'https://schoolai.com/',
      description: 'A comprehensive AI platform designed for educational institutions.',
      bgColor: 'bg-black'
    }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/ai-education"
      title="AI Use for Education"
    >
      <ContentSection title="Educational Applications of AI">
        <div className="prose prose-amber max-w-none mb-8">
          <p className="mb-4">
          There are already some colleges that enhance their work by letting their student access the use of AI for education. Having an AI-powered specifically for education purposes is an outstanding step in this industry because of how the ethical use of AI in the academic field responds to it. As the ethical issues are becoming more important along with the growth of the AI industry, colleges must establish clear guidelines to ensure responsible use.
          </p>
          <p className="mb-4">
          As noted in Frontiers in Education [1], Artificial intelligence is changing universities of higher education by improving learning and instruction techniques, reducing administrative tasks, and pushing innovations. However, the articles also point out that the use of AI can be "challenging" if the institution does not have a clear policy on how to use AI[2]. The College of Wooster is one of the colleges that has not yet established a clear policy on how to use AI, and it is important to establish a clear policy in order to avoid ethical issues.
          </p>
          <p className="mb-4">
          The College of Wooster has an opportunity to rise better with the help of the AI industry movement. Popular schools such as Harvard and CSU have played a role as leaders in applying the use of AI in research and study. This step could be the next great move in the educational field, resulting in improved teaching and learning in the future. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiTools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${tool.bgColor} rounded-t-lg p-8 flex items-center justify-center h-48`}>
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="h-24 w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-amber-900">{tool.name}</h3>
                  <ExternalLink size={20} className="text-amber-500" />
                </div>
                <p className="text-amber-700">{tool.description}</p>
              </div>
            </a>
          ))}

          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">References</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800">
              <li>
              Ocen, S., Elasu, J., Aarakit, S. M., & Olupot, C. (2025, March). Artificial intelligence in higher education institutions: review of innovations, opportunities and challenges. In Frontiers in Education (Vol. 10, p. 1530247). Frontiers Media SA.
              </li>
              <li>
              Liang, Y. (2023). Balancing: the effects of AI tools in educational context. Front. Hum. Soc. Res. 3, 7–10. doi: 10.54691/fhss.v3i8.5531
              </li>
                
            </ol>
          </div>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default AIUseForEducationPage;