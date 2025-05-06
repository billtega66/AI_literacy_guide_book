import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const FacultyUseOfAIPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Faculty Use of AI', path: '/faculty-use' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/faculty-use"
      title="Faculty Use of AI"
    >
      <ContentSection title="AI Integration for Faculty">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
          Generative AI, such as ChatGPT, is becoming increasingly relevant to faculty work. While the applicability of such tools varies by discipline, all faculty are encouraged to explore the benefits and limitations of incorporating AI into their teaching practices in ways that align with their specific field. In doing so, faculty should specify their findings to their students in the form of AI use expectations, typically in syllabi. Faculty should identify acceptable, encouraged, and unacceptable uses of AI in their course. Furthermore, while applicability will vary by the type of course, generativeAI has promise for academic teaching and learning .

          </p>
          <p className="mb-4">
          In general, faculty use of AI can enhance efficiency, increase student access to support, and foster more student engagement [3]. AI can support faculty in various ways, including [6]:
          </p>
          <ol style={{ marginLeft: "1.5em", paddingLeft: "1em" }}>
             <li><strong>1.</strong> Creating presentations and visual aids</li>
             <li><strong>2.</strong>Developing lesson plans and instructional content</li>
             <li><strong>3.</strong>Generating quizzes and assignments</li>
             <li><strong>4.</strong>Supplementing Syllabi</li>
             <li><strong>5.</strong>Brainstorming or outlining ideas</li>
             <li><strong>6.</strong>Conducting research</li>
             <li><strong>7.</strong>Increasing student accessibility</li>
           </ol>
          <p className="mb-4">
          When using AI, faculty must uphold academic integrity and the College of Wooster’s values. This includes: 
          </p>
          <ol style={{ marginLeft: "1.5em", paddingLeft: "1em" }}>
             <li><strong>1.</strong>Verifying the accuracy and credibility of AI-generated content</li>
             <li><strong>2.</strong>Citing AI-generated material appropriately and acknowledging sources used by AI</li>
             <li><strong>3.</strong>Recognizing that AI may produce outdated, biased, or fabricated information</li>
             <li><strong>4.</strong>Ensuring that AI use does not compromise the rigor or learning objectives of the course</li>
          </ol>
          <p className="mb-4">
          There are some uses of AI that are not recommended and, in some cases, are expressly prohibited. Faculty must use AI in a manner that upholds academic integrity, student trust, and the College’s values. It is unacceptable for faculty to:
          </p>
          <ol style={{ marginLeft: "1.5em", paddingLeft: "1em" }}>
             <li><strong>1.</strong>Use AI to generate content that is not properly cited or attributed</li>  
             <li><strong>2.</strong>Use generative AI or any AI tools for grading without prior administrative approval and without human oversight *</li>
              <li><strong>3.</strong>Use AI-detection tools to make disciplinary decisions without additional human review **</li>
              <li><strong>4.</strong>Submit private data to GenerativeAI ***</li>
          </ol>
        </div>
      </ContentSection>
      <ContentSection title="Grading and AI">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
          <strong>* Faculty should very carefully consider AI for grading purposes. Despite its benefits, AI has notable limitations, including [5]:</strong>
          </p>
          <ol style={{ marginLeft: "1.5em", paddingLeft: "1em" }}>
              <li><strong>1.</strong>Hallucinations or generating wrong answers, evaluations, or feedback in a convincing format</li>
              <li><strong>2.</strong>Inconsistency in response</li>
              <li><strong>3.</strong>Perpetuating or amplifying bias</li>
          </ol>
          <p className="mb-4">
          Given these limitations, faculty should approach AI use in grading with extreme caution, ensuring that human judgment remains central to all evaluative processes.
          </p>
        </div>
      </ContentSection>
      <ContentSection title="Disciplinary Decisions and AI">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
          <strong>** The use of AI-based plagiarism or AI-use detectors is currently not justifiable as a sole means of identifying academic dishonesty. These tools have well-documented limitations [4], including the potential for false positives and bias against individuals whose first language is not English [5]. Faculty are expected to understand these limitations and must not rely solely on AI detection tools for disciplinary decisions. </strong>
          </p>
        </div>
      </ContentSection>
      <ContentSection title="Data Privacy and AI">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
          <strong>*** GenerativeAI models use chat data for further training. This means that the data is stored and could be repurposed in later responses. While there are options to opt out of using one’s data for further training, it is best practice to not input sensitive data to the model.</strong>
          </p>
          

          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">References</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800">
              <li>
              College of Wooster. (2024). The Scot’s Key. https://inside.wooster.edu/student-rights/scots-key/

              </li>
              
              <li>
              Dwivedi et al. (2023). Opinion Paper: “So what if ChatGPT wrote it?” Multidisciplinary perspectives on opportunities, challenges and implications of generative conversational AI for research, practice and policy. International Journal of Information Management, 71, https://doi.org/10.1016/j.ijinfomgt.2023.102642


              </li>
              <li>
              Klein, E. (2025, January 15). How artificial intelligence is transforming higher education. American College of Education. https://ace.edu/news/how-artificial-intelligence-is-transforming-higher-education/

              </li>
              <li>
              Columbia University Office of the Provost. (n.d.). Generative AI Policy. Columbia University. https://provost.columbia.edu/content/office-senior-vice-provost/ai-policy
              </li>
              <li>
              Yale Poorvu Center for Teaching and Learning. (n.d.). AI Guidance for Teachers. Yale University. https://poorvucenter.yale.edu/AIguidance
              </li>
              <li>
              Mowreader, A. (2024, February 6). How college professors are using generative AI to teach. Inside Higher Ed. https://www.insidehighered.com/news/student-success/academic-life/2024/02/06/how-college-professors-are-using-generative-ai-teach 

              </li>
            </ol>
          </div>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default FacultyUseOfAIPage;