import React from 'react';
import HomePage from './pages/HomePage';
import IntroductionPage from './pages/IntroductionPage';
import ContactPage from './pages/ContactPage';
import DefiningAILiteracyPage from './pages/DefiningAILiteracy';
import AILiteracyatTheCowPage from './pages/AILiteracyatTheCow';
import AILiteracyPrinciplesPage from './pages/AILiteracyPrinciples';
import AIandEquityPage from './pages/AIandEquity';
import AIInequalitiesPage from './pages/AIInequalities';
import AIEquitableAccessPage from './pages/AIEquitableAccess';
import EthicalUseOfAIPage from './pages/EthicalUseOfAI';
import AIPlagiarismPage from './pages/AIPlagiarism';
import StudentUseOfAIPage from './pages/StudentUseOfAI';

import ChallengesAndConcernsPage from './pages/ChallengesAndConcerns';
import AIUseForEducationPage from './pages/AIUseForEducation';
import FacultyUseOfAIPage from './pages/FacultyUseOfAI';
import AIDetectionToolsPage from './pages/AIDetectionTools';
import DynamicAIPolicyPage from './pages/DynamicAIPolicy';

function App() {
  const [currentPage, setCurrentPage] = React.useState<string>('home');

  React.useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path.includes('introduction')) {
        setCurrentPage('introduction');
      } else if (path.includes('contact')) {
        setCurrentPage('contact');
      } else if (path.includes('defining-ai-literacy')) {
        setCurrentPage('defining-ai-literacy');
      } else if (path.includes('ai-literacy-cow')) {
        setCurrentPage('ai-literacy-cow'); 
      } else if (path.includes('ai-literacy-principles')) {
        setCurrentPage('ai-literacy-principles');
      } else if (path.includes('ai-and-equity/inequalities')) {
        setCurrentPage('ai-inequalities');
      } else if (path.includes('ai-and-equity/access')) {
        setCurrentPage('ai-equitable-access');
      } else if (path.includes('ai-and-equity')) {
        setCurrentPage('ai-and-equity');
      } else if (path.includes('ethical-use')) {
        setCurrentPage('ethical-use');
      } else if (path.includes('plagiarism')) {
        setCurrentPage('plagiarism');
      } else if (path.includes('student-use')) {
        setCurrentPage('student-use');
      } else if (path.includes('challenges')) {
        setCurrentPage('challenges');
      } else if (path.includes('ai-education')) {
        setCurrentPage('ai-education');
      } else if (path.includes('faculty-use')) {
        setCurrentPage('faculty-use');
      } else if (path.includes('detection-tools')) {
        setCurrentPage('detection-tools');
      } else if (path.includes('dynamic-policy')) {
        setCurrentPage('dynamic-policy');
      } else {
        setCurrentPage('home');
      }
    };

    handleNavigation();

    window.addEventListener('popstate', handleNavigation);

    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        const href = anchor.getAttribute('href') || '/';
        window.history.pushState({}, '', href);
        handleNavigation();
      }
    });

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  return (
    <>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'introduction' && <IntroductionPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'defining-ai-literacy' && <DefiningAILiteracyPage />}
      {currentPage === 'ai-literacy-cow' && <AILiteracyatTheCowPage />}
      {currentPage === 'ai-literacy-principles' && <AILiteracyPrinciplesPage />}
      {currentPage === 'ai-and-equity' && <AIandEquityPage />}
      {currentPage === 'ai-inequalities' && <AIInequalitiesPage />}
      {currentPage === 'ai-equitable-access' && <AIEquitableAccessPage />}
      {currentPage === 'ethical-use' && <EthicalUseOfAIPage />}
      {currentPage === 'plagiarism' && <AIPlagiarismPage />}
      {currentPage === 'student-use' && <StudentUseOfAIPage />}
      {currentPage === 'challenges' && <ChallengesAndConcernsPage />}
      {currentPage === 'ai-education' && <AIUseForEducationPage />}
      {currentPage === 'faculty-use' && <FacultyUseOfAIPage />}
      {currentPage === 'detection-tools' && <AIDetectionToolsPage />}
      {currentPage === 'dynamic-policy' && <DynamicAIPolicyPage />}
    </>
  );
}

export default App;