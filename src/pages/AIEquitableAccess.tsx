import React from 'react';
import { MainLayout } from '../components/MainLayout';
import { ContentSection } from '../components/ContentSection';

const AIEquitableAccessPage: React.FC = () => {
  const breadcrumbItems = [
    { label: 'AI and Equity', path: '/ai-and-equity' },
    { label: 'Equitable Access to AI Tools', path: '/ai-and-equity/access' }
  ];

  return (
    <MainLayout
      breadcrumbItems={breadcrumbItems}
      currentPath="/ai-and-equity/access"
      title="Equitable Access to AI Tools at The College of Wooster"
    >
      <ContentSection>
        <div className="prose prose-amber max-w-none">
          
          <p className="mb-4">
          Aside from educating students, staff, and faculty about the above-mentioned inequalities embedded in AI systems, the Academic Resource Center should do its utmost to safeguard digital equity within the institution.
          </p>
          <p className="mb-4">
[Digital] equity in education means ensuring that every learner, regardless of socioeconomic status, language, race, geography, physical restrictions, cultural background, gender, or other attributes historically associated with inequities, has equitable access to advanced technologies, communication and information resources, and the learning experiences they provide[1]. 
          </p>
          <p className="mb-4">
Equitable access to AI technology at The College of Wooster can be ensured by combating the digital divide via the provision of fair and personalized AI education [1][2]; by establishing and adhering to the advice given by an AI equity committee; and by implementing an institution-wide AI feedback mechanism to evaluate patterns and influence trends in students’ and faculty members’ AI use.
          </p>
        </div>
      </ContentSection>
      <ContentSection title="Combating the Digital Divide">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4">
          One major issue of inequitable access to AI-systems is the widening of the digital divide [2]. For instance, while Yu and colleagues’ [3] study showed that LLM-availability significantly narrowed the gap in the quality of academic writing submissions between linguistically advantaged vs. disadvantaged students, it was also observed that students from a higher socioeconomic status profited more than individuals from lower socioeconomic backgrounds. Besides, studies have shown gender disparities regarding AI-use, indicating an overall higher skepticism towards AI among females, as well as differences in AI use across disciplines, noting higher attitudes towards AI in STEM fields such as engineering or biological sciences compared to humanities, for example [4][5]. These are only a selection of research findings highlighting the consequences of inequitable access to AI systems and AI literacy. Thus, to promote inclusivity and democratization of education rather than perpetuating existing inequalities, staff and students – regardless of their socio-economic and cultural backgrounds, gender, ability levels, as well as academic fields – must have equal access to and personalized training in the use of AI technology [1][6].
          </p>
        </div>  
      </ContentSection>
      <ContentSection title="Establishment of an AI Equity Committee">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4" >
          Another means for ensuring equitable access to AI technology at The College of Wooster is the establishment and implementation of an AI equity committee that provides guidance on and ensures the enforcement of college-wide as well as course-specific AI use regulations. Such a committee could, for example, be established as a branch of the Academic Resource Center or a sub-committee of the Educational Policy Committee [7], and should allocate the institution’s financial means for the adoption of AI tools, as, for example, the provision of paid LLMs, like ChatGPT-4 or ChatGPT EDU, fairly across all academic disciplines [6][8]. Additionally, as mentioned in the previous section, the utilization of AI tools presents privacy hazards, such as information leakage [9]. Hence, College of Wooster students should never be mandated to use AI for the successful completion of a class, and the college’s AI equity committee should consider the provision of institutionally licensed AI tools, which, for example, allow for the encryption of chat information, and thus increase data security [4][10]. Besides, considering the lack of reliable AI detection tools, Wooster’s AI equity committee must not only provide transparent, unanimous guidelines for permissible AI use that may be adapted to individual class syllabi, it must also ensure – in alignment with the Scot’s Key’s Academic Integrity Policies (p. 14) – an equal enforcement of AI-related violation penalties to prevent potential discrimination or bias against students from minority groups, who are often at higher risk of being suspected of cheating [11][12].
          </p>
        </div>
      </ContentSection>
      <ContentSection title="Establishment of an AI Feedback Mechanism">
        <div className="prose prose-amber max-w-none">
          <p className="mb-4" >
          Finally, The College of Wooster’s Academic Resource Center should consider the installment of an institution-wide feedback mechanism to monitor and gather useful insights into student and staff AI-related experiences, which can help with the improvement of applied AI practices, as well as foster valuable cross-institutional networking on the advancement of AI policies [13][14]. Such a feedback mechanism could potentially be established by the Educational Policy Committee [7]. For example, information extracted from student and faculty feedback may serve to evaluate AI guidelines as well as to modify and optimize Wooster’s AI policy as needed, thereby improving all stakeholders’ AI learning outcomes[14][15]. Besides, Wooster’s Educational Policy Committee [7] may discuss feedback received from students and faculty with external associations, societies, or other universities dedicated to the advancement of equitable AI use and standards, and thus, might even influence legislation for AI technology in higher education [13].
          </p>
          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-4">References</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-amber-800">
              <li>
              Dwivedi et al. (2023). Opinion Paper: “So what if ChatGPT wrote it?” Multidisciplinary perspectives on opportunities, challenges and implications of generative conversational AI for research, practice and policy. International Journal of Information Management, 71, https://doi.org/10.1016/j.ijinfomgt.2023.102642
              </li>
              
              <li>
              Roshannaei, M., Olivares, H., & Lopez, R. (2023). Harnessing AI to foster equity in education: Opportunities, challenges, and emerging strategies. Journal of Intelligent Learning Systems and Applications, 15(4), 123-143. https://doi.org/10.4236/jilsa.2023.154009

              </li>
              <li>
              Yu, R., Xu, Z., CH-Wang, S., & Arum, R. (2024). Whose ChatGPT? Unveiling real-world educational inequalities introduced by large language models. Teachers College, Columbia University. arXiv:2410.22282. https://doi.org/10.48550/arXiv.2410.22282

              </li>
              <li>
              Balabdaoui, F., Dittmann-Domenichini, N., Grosse, H., & et al. (2024). A survey on students’ use of AI at a technical university. Discover Education, 3, 51. https://doi.org/10.1007/s44217-024-00136-4

              </li>
              <li>
              Stöhr, C., Ou, A. W., & Malmström, H. (2024). Perceptions and usage of AI chatbots among students in higher education across genders, academic levels and fields of study. Computers and Education: Artificial Intelligence, 7,100259. https://doi.org/10.1016/j.caeai.2024.100259

              </li>
              <li>
              Peláez-Sánchez, I. C., Velarde-Camaqui, D., & Glasserman-Morales, L. D. (2024). The impact of large language models on higher education: Exploring the connection between AI and Education 4.0. Frontiers in Education, 9, Article 1392091. https://doi.org/10.3389/feduc.2024.1392091

              </li>
              <li>
              The College of Wooster. (n.d.). FAQs for Educational Policy Committee (EPC). Inside Wooster.https://inside.wooster.edu/academic-affairs/faqs-for-educational-policy-committee-epc/
              </li>
              <li>
              Complete College America. (2024). The AI divide: Equitable applications of AI in higher education to advance the completion agenda. https://completecollegeamerica.org/resource/complete-college-america-releases-ai-resources-to-transform-equitable-student-success-and-postsecondary-attainment/
              </li>
              <li>
              Weidinger, L., Uesato, J., Rauh, M., Griffin, C., Huang, P.-S., Mellor, J., Glaese, A., Cheng, M., Balle, B., Kasirzadeh, A., Biles, C., Brown, S., Kenton, Z., Hawkins, W., Stepleton, T., Birhane, A., Hendricks, L. A., Rimell, L., Isaac, W., Haas, J., Legassick, S., Irving, G., & Gabriel, I. (2022). Taxonomy of risks posed by language models. Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency (FAccT '22), June 21–24, 2022, Seoul, Republic of Korea. ACM, New York, NY, USA, 16 pages. https://doi.org/10.1145/3531146.3533088
              </li>
              <li>
              Yale University, Office of the Provost. (2023, September 20). Guidelines for the use of generative AI tools. https://provost.yale.edu/news/guidelines-use-generative-ai-tools
              </li>
              <li>
              Dwivedi et al. (2023). Opinion Paper: “So what if ChatGPT wrote it?” Multidisciplinary perspectives on opportunities, challenges and implications of generative conversational AI for research, practice and policy. International Journal of Information Management, 71, https://doi.org/10.1016/j.ijinfomgt.2023.102642
              </li>
              <li>
              Mathewson, T. G. (2023, August 14). AI detection tools falsely accuse international students of cheating: Stanford study found AI detectors are biased against non-native English speakers. The Markup. https://themarkup.org/machine-learning/2023/08/14/ai-detection-tools-falsely-accuse-international-students-of-cheating
              </li>
              <li>
              Robert, J., & McCormack, M. (2024, May 23). EDUCAUSE Action Plan: AI Policies and Guidelines. EDUCAUSE.https://www.educause.edu/research/2024/2024-educause-action-plan-ai-policies-and-guidelines

              </li>
              <li>
              Gan, W., Qi, Z., Wu, J., & Lin, J. C.-W. (2023). Large language models in education: Vision and opportunities. In Proceedings of the IEEE International Conference on Big Data (BigData), Sorrento, Italy, December 2023 (pp. 4776–4785). IEEE. https://arxiv.org/abs/2311.13160
              </li>
              <li>
              Idris, M. D., Feng, X., & Dyo, V. (2024). Revolutionizing higher education: Unleashing the potential of large language models for strategic transformation. IEEE Access, 12, 1–1. https://doi.org/10.1109/ACCESS.2024.3400164
              </li>
            </ol>
          </div>
        </div>
      </ContentSection>
    </MainLayout>
  );
};

export default AIEquitableAccessPage;