import React, { useState } from 'react';
import ApiTest from './components/ApiTest';
import styles from './App.module.css';
import UserInfoStep from './components/UserInfoStep';
import LeftPanel from './components/LeftPanel';
import FAQBar from './components/FAQBar';

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [leftPanelTitle, setLeftPanelTitle] = useState<string>("Welcome to Pery!");

  const handleContinue = (): void => {
    setStep(2);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LeftPanel title={leftPanelTitle}/>
        <div className={styles.rightPanel}>
          <div className={`${styles.screen} ${step === 1 ? styles.visible : styles.hidden}`}>
            <UserInfoStep onContinue={handleContinue} />
          </div>

        </div>
        <FAQBar />
      </div>
    </div>
  );
};

export default App;