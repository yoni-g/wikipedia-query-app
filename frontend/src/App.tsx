import React, { useState } from 'react';
import styles from './App.module.css';
import UserInfoStep from './components/UserInfoStep';
import LanguageSelectionStep from './components/LanguageSelectionStep';
import TopicSelectionStep from './components/TopicSelectionStep';
import LeftPanel from './components/LeftPanel';
import FAQBar from './components/FAQBar';

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [leftPanelTitle, setLeftPanelTitle] = useState<string>("Welcome to Pery!");

  const handleEmailContinue = (): void => {
    setStep(2);
  };

  const handleLanguageContinue = (): void => {
    setStep(3);
  };

  const handleBackToEmail = (): void => {
    setStep(1);
  };

  const handleBackToLanguage = (): void => {
    setStep(2);
  };

  const handlePerformSearch = (): void => {
    console.log("handlePerformSearch");
    
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
              onContinue={handlePerformSearch}
            />
          </div>
        </div>
        <FAQBar />
      </div>
    </div>
  );
};

export default App;