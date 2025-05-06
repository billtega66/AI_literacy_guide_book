import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const AIInequalitiesPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'AI and Equity', path: '/ai-and-equity' },
    { label: 'Understanding AI-Inherent Inequalities', path: '/ai-and-equity/inequalities' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/ai-and-equity/inequalities"
      title="Understanding General AI-Inherent Inequalities"
    >
      <ContentSection title="Overview">
        <div className="prose prose-amber max-w-none">
          <figure className="w-full mb-6">
            <img 
              src="/AI_inherent_inequalities.png"
              alt="AI Inherent Inequalities Diagram"
              className="rounded-lg shadow-lg mx-auto"
              style={{ width: '100%', maxWidth: '600px', height: 'auto', objectFit: 'contain' }}
            />
            <figcaption className="text-sm text-amber-700 mt-2 text-center">
              Overview of AI-Inherent Inequalities and Their Interconnections. Adapted from "Taxonomy of risks posed by language models" by Weidinger et al., 2022, Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency.
            </figcaption>
          </figure>
        </div>
      </ContentSection>

      <ContentSection title="Discrimination">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
            Algorithmic bias in training data and LM output reflect hegemonic power dynamics which reinforce social stereotypes, thereby exacerbating the discrimination of already marginalized groups [1][2]. Aside from racial, ethnic, or cultural biases in the design of LMs, unequal access to AI tools across the globe leads to an underrepresentation and further discrimination of minority groups' viewpoints [3]. Elaborate methods for bias detection and more representative training data are thus necessary to address AI-inherent social, political, and cultural inequalities to counteract growing power asymmetries [2][4]. Raising awareness within the COW community about the potential discrimination against certain groups resulting from LLM outputs is essential to ensure ethical AI use and to uphold The Scot's Key (pp. 6–7) community values and non-discriminatory policies.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Personal Information Hazards">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">

            All COW members should also be taught to be mindful of personal information hazards [1]. Even the application of algorithmic tools like differential privacy methods during LM training cannot rule out the potential leakage of private information[1]. In a process referred to as datafication, AI algorithms collect and retain information, whether it is entered into their system personally or by another party [3][1]. Hence, in cases of data leaks, intellectual property and sensitive information may be used against an individual in harmful ways, violating their privacy [1]. Besides, in the near future, AI algorithms' ability to infer sensitive information will improve and, even when those inferences are incorrect, plausible-sounding analyses may cause harm to individuals [1]. In light of these personal information hazards, as also suggested by Dwivedi et al.[5] and Yale University [6] members of the Wooster community are highly encouraged to never input personal, sensitive, or third-party information into LLMs without the informed consent of all stakeholders involved.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Malicious Uses of Information">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
            The risk of personal information hazards also ties in with malicious uses of information [1]. Wooster's staff and teachers need to carefully monitor and advocate for the responsible use of LMs to address potential misuse for fraud or as a tool for the fast and easy creation and spread of misinformation and fake news – whether intentional or due to LMs' inherent tendencies to fabricate information [1][4][7]. Such malicious misuse of information from LLM output should not only be cautioned against by staff and faculty but should also be explicitly integrated into Wooster's Scot's Key (pp. 13-14) section on principles of academic integrity as a form of academic dishonesty.
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Misinformation Harms">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
            Wooster's Academic Resource Center should consider options for responsible release strategies and granting LLMs access to sources from the internet for fact-checking, filtering, and referencing [1]. These measures could help mitigate malicious LM usage, as well as combat misinformation harms, with the latter often resulting from LM outputs that are based on probability patterns, rather than truthfulness [2]. Users' beliefs in and overreliance on those probability patterns, a phenomenon referred to as automation bias, might put individuals at risk in situations where factual accuracy is crucial [8]. Hence, all College of Wooster members are encouraged to be alert for bias and to review LLM output for potential flaws before adopting its content [6].
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Human-Computer Interaction Harms">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
            In Weidinger and colleagues' [1] LLM-risk-category of human-computer interaction harms, the authors also draw attention to conversational agents' risks for reinforcing stereotypes and exploitation of user trust. Discriminatory stereotypes are embedded in the design of LLMs, for example, by having voice assistants sound female, white, and submissive, thereby perpetuating existing gender and ethnic biases [1][9]. Besides, anthropomorphic speech used by modern LM chatbots wins over users' trust more easily, thus nudging them into revealing more private data [1][10]. Another oftentimes overlooked human-computer interaction harm that poses an equity issue, is that of human labor [3][7]. Highly underpaid contract workers, usually from the Global South (which benefits the least from advances in AI technologies), are tasked with filtering, labelling, and tagging toxic LM inputs and outputs crucial for the training of AI systems [8][11].
          </p>
        </div>
      </ContentSection>

      <ContentSection title="Environmental and Socioeconomic Harms">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
            The last of the six major AI-embedded equity issues highlights AIs' environmental and, by implication, socioeconomic harm inflictions [1]. The sourcing and mining of materials needed to develop, as well as the resources required for the operation of AI systems release significant amounts of CO2 emissions [1][11], whereby the environmental and socioeconomic costs incurred will, similarly to the above example of labor exploitation, affect already marginalized groups the most [2]. To address these issues, architectural model innovations, the deployment of sustainable energy sources, and improvements to training efficiency are necessary [1].
          </p>
        </div>
      </ContentSection>

      <div className="bg-amber-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">References</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800">
          <li>
            Weidinger, L., Uesato, J., Rauh, M., Griffin, C., Huang, P.-S., Mellor, J., Glaese, A., Cheng, M., Balle, B., Kasirzadeh, A., Biles, C., Brown, S., Kenton, Z., Hawkins, W., Stepleton, T., Birhane, A., Hendricks, L. A., Rimell, L., Isaac, W., Haas, J., Legassick, S., Irving, G., & Gabriel, I. (2022). Taxonomy of risks posed by language models. Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency (FAccT '22), June 21–24, 2022, Seoul, Republic of Korea. ACM, New York, NY, USA, 16 pages. https://doi.org/10.1145/3531146.3533088
          </li>
          <li>
            Bender, E. M., Gebru, T., McMillian-Major, A., & Shmitchell, S. (2021, March 1). On the dangers of stochastic parrots | proceedings of the 2021 ACM Conference on Fairness, accountability, and transparency. Association for Computing Machinery. https://dl.acm.org/doi/10.1145/3442188.3445922 
          </li>
          <li>
            Furze, L. (2023, January 26). Teaching AI ethics. https://leonfurze.com/2023/01/26/teaching-ai-ethics/
          </li>
          <li>
            Idris, M. D., Feng, X., & Dyo, V. (2024). Revolutionizing higher education: Unleashing the potential of large language models for strategic transformation. IEEE Access, 12, 1–1. https://doi.org/10.1109/ACCESS.2024.3400164
          </li>
          <li>
          Dwivedi et al. (2023). Opinion Paper: "So what if ChatGPT wrote it?" Multidisciplinary perspectives on opportunities, challenges and implications of generative conversational AI for research, practice and policy. International Journal of Information Management, 71, https://doi.org/10.1016/j.ijinfomgt.2023.102642
          </li>
          <li>
          Yale University, Office of the Provost. (2023, September 20). Guidelines for the use of generative AI tools. https://provost.yale.edu/news/guidelines-use-generative-ai-tools
          </li>
          <li>
          Buchanan, B., Lohn, A., Musser, M., & Sedova, K. (2021, May). Truth, lies, and automation: How language models could change disinformation. Center for Security and Emerging Technologies. https://doi.org/10.51593/2021CA003
          </li>
          <li>
          Kapoor, S., & Narayanan, A. (2023, April 4). A misleading open letter about scientific research and AI. AI Snake Oil.https://www.aisnakeoil.com/p/a-misleading-open-letter-about-sci
          </li>
          <li>
          Cave, S., & Dihal, K. (2020). The whiteness of AI. Philosophical Technology, 33, 685–703. https://doi.org/10.1007/s13347-020-00415-6
          </li>
          <li>
          Ischen, C., Araujo, T., Voorveld, H., van Noort, G., & Smit, E. (2019). Privacy concerns in chatbot interactions. In Chatbot Research and Design: Third International Workshop, CONVERSATIONS 2019 (pp. 34–48). Springer. https://doi.org/10.1007/978-3-030-39540-7_3
          </li>
          <li>
          Regilme, S. S. F. (2024). SAIS Review of International Affairs, 44(2), 75–92. https://doi.org/10.1353/sais.2024.a950958
          </li>
          <li>
          The College of Wooster. (n.d.). Climate action. https://wooster.edu/sustainability/climate-action/
          </li>
        </ol>
      </div>
    </MainLayout>
  );
};

export default AIInequalitiesPage;