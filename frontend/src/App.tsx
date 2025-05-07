import React, { useState } from 'react';
import styles from './App.module.css';
import UserInfoStep from './components/UserInfoStep';
import TopicSelectionStep from './components/TopicSelectionStep';
import LeftPanel from './components/LeftPanel';
import FAQBar from './components/FAQBar';

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [leftPanelTitle, setLeftPanelTitle] = useState<string>("Welcome to Pery!");

  const handleContinue = (): void => {
    setStep(2);
    setLeftPanelTitle("Choose Your Topic");
  };

  const handleBack = (): void => {
    setStep(1);
    setLeftPanelTitle("Welcome to Pery!");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LeftPanel title={leftPanelTitle} />
        <div className={styles.rightPanel}>
          <div className={`${styles.screen} ${styles.screenTransition} ${step === 1 ? styles.visible : styles.hidden}`}>
            <UserInfoStep onContinue={handleContinue} />
          </div>
          <div className={`${styles.screen} ${styles.screenTransition} ${step === 2 ? styles.visible : styles.hidden}`}>
            <TopicSelectionStep onBack={handleBack} onContinue={() => console.log('Next step')} />
          </div>
        </div>
        <FAQBar />
      </div>
    </div>
  );
};

export default App;