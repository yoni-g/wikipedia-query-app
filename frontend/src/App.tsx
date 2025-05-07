import React, { useState } from 'react';
import styles from './App.module.css';
import UserInfoStep from './components/UserInfoStep';
import LanguageSelectionStep from './components/LanguageSelectionStep';
import TopicSelectionStep from './components/TopicSelectionStep';
import ArticlePreviewStep from './components/ArticlePreviewStep';
import LeftPanel from './components/LeftPanel';
import FAQBar from './components/FAQBar';

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  const [leftPanelTitle, setLeftPanelTitle] = useState<string>("Welcome to Pery!");

  const mockArticle = {
    title: "Introduction to " + topic,
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis urna in dolor blandit, id eleifend sapien consequat. Suspendisse porta elit in tellus vehicula, a pulvinar risus lobortis. Aliquam iaculis leo elementum sapien malesuada consequat. Donec non turpis tincidunt, imperdiet nisl ut, pretium lacus. Maecenas quis mi lacinia, porta enim nec, ultricies ante. Cras ex nibh, accumsan vel justo sit amet, ullamcorper tincidunt sapien. Pellentesque quis diam eu nulla luctus consequat. Nam eget lacus risus. Quisque dapibus, leo at porta pellentesque, velit ex condimentum risus, luctus lacinia lectus nisl nec nisi. Mauris facilisis dictum eros ut tincidunt. Vestibulum ultricies turpis vitae massa elementum elementum. Ut interdum aliquet dapibus. Fusce non gravida sapien. Nam tempus accumsan lectus vitae hendrerit. Morbi gravida dolor vitae imperdiet porta."
  };

  const handleEmailContinue = (): void => {
    setStep(2);
  };

  const handleLanguageContinue = (): void => {
    setStep(3);
  };

  const handleTopicContinue = (selectedTopic: string): void => {
    setTopic(selectedTopic);
    setStep(4);
    setLeftPanelTitle("All set! read your article");
  };

  const handleBackToEmail = (): void => {
    setStep(1);
    setLeftPanelTitle("Welcome to Pery!");
  };

  const handleBackToLanguage = (): void => {
    setStep(2);
  };

  const handleStartOver = (): void => {
    setTopic('');
    setStep(3);
    setLeftPanelTitle("Welcome to Pery!");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LeftPanel title={leftPanelTitle} />
        <div className={styles.rightPanel}>
          <div className={`${styles.screen} ${step === 1 ? styles.visible : styles.hidden}`}>
            <UserInfoStep 
              onContinue={handleEmailContinue}
              email={email}
              onEmailChange={setEmail}
            />
          </div>
          <div className={`${styles.screen} ${step === 2 ? styles.visible : styles.hidden}`}>
            <LanguageSelectionStep 
              onBack={handleBackToEmail}
              onContinue={handleLanguageContinue}
              selectedLanguage={language}
              onLanguageChange={setLanguage}
            />
          </div>
          <div className={`${styles.screen} ${step === 3 ? styles.visible : styles.hidden}`}>
            <TopicSelectionStep 
              onBack={handleBackToLanguage}
              onContinue={handleTopicContinue}
              topic={topic}
              onTopicChange={setTopic}
            />
          </div>
          <div className={`${styles.screen} ${step === 4 ? styles.visible : styles.hidden}`}>
            <ArticlePreviewStep 
              onStartOver={handleStartOver}
              articleIntro={mockArticle.intro}
            />
          </div>
        </div>
        <FAQBar />
      </div>
    </div>
  );
};

export default App;