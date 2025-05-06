import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const AIDetectionToolsPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'AI Detection Tools', path: '/detection-tools' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/detection-tools"
      title="AI Detection Tools' Reliability"
    >
      <ContentSection title="Understanding AI Detection Tools">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
            AI detection tools can be handy, but at the same time, they are not perfect[1]. While many tools are being used widely, such as GPTZero, Copyleaks, and WRITER, which have accuracy rates exceeding 80% [1], this might depend on what data is being used to train the model and the context of writing.
          </p>
          <p className="mb-4">
          According to Elkhatat [3], detection tools make really good detections for some of the older models, like ChatGPT 3.5. However, when being tested on newer models like ChatGPT 4, the same tools showed increased uncertainty and false-negative results when assessing content, as they mention in their study:  “There were a few instances where the tools provided an uncertain or false-negative classification”[3]. In some cases, they even misclassified human-written content. This suggests that while AI detectors can assist educators, their predictions should be handled with caution.

          </p>
          <p className="mb-4">
          Additionally, in van Oijen [2], the study shows that the detection tools’ overall accuracy in detecting AI-generated context is only around 27.9%, and the maximum accuracy that was achieved in the test is 50% by the “Corrector App”. On the other hand, two of the most-used detection tools are <strong>“WRITER” </strong>and <strong>“Content at Scale,”</strong> have the worst performance out of all 7 tools, which is 0% [2].  This seems to be unpredictable. Also, in the study, when testing with different prompts in different types of languages, some tools fail to predict Dutch as they have no support in that type of language itself[2]. Up to a certain point, some tools still have limitations in detecting different languages other than English. Although achieving benefits in the use of detection tools in academic review is thoughtful, their prediction should be approached carefully. 

          </p>
        </div>
      </ContentSection>
      <ContentSection title="Result">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
          These findings indicate that, although detection tools can be a beneficial addition to academic review, their predictions should be approached with prudence. At The College of Wooster, students and faculty are recommended to view AI detection results as one point of information among numerous others, rather than as definitive evidence. In the modern age, the College's strategy to academic integrity should be characterized by open discussion, transparent goals, and thoughtful evaluation.
          </p>
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">References</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800">
              <li>
             Scribbr. (n.d.). How do plagiarism checkers work? Retrieved from https://www.scribbr.com/plagiarism/how-do-plagiarism-checkers-work/

              </li>
              
              <li>
              van Oijen, V. (2023). AI-generated text detectors: Do they work?. SURF Communities. https://communities.surf.nl/en/ai-in-education/article/ai-generated-text-detectors-do-they-work

              </li>
              <li>
              Elkhatat, A. M., Elsaid, K., & Almeer, S. (2023, September 1). Evaluating the efficacy of AI content detection tools in differentiating between human and AI-generated text - International Journal for Educational Integrity. BioMed Central. https://edintegrity.biomedcentral.com/articles/10.1007/s40979-023-00140-5/tables/4 
              </li>
            </ol>
          </div>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default AIDetectionToolsPage;