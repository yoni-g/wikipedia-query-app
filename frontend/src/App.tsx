import React, { useState } from 'react';
import styles from './App.module.css';
import UserInfoStep from './components/UserInfoStep';
import LanguageSelectionStep from './components/LanguageSelectionStep';
import TopicSelectionStep from './components/TopicSelectionStep';
import ArticlePreviewStep from './components/ArticlePreviewStep';
import LeftPanel from './components/LeftPanel';
import FAQBar from './components/FAQBar';
import { LoadingOverlay } from './components/common/LoadingOverlay';
import { ErrorMessage } from './components/common/ErrorMessage';
import { apiService } from './services/api';

interface ArticleData {
  introduction: string;
}

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [topic, setTopic] = useState<string>('');
  const [leftPanelTitle, setLeftPanelTitle] = useState<string>("Welcome to Pery!");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [articleData, setArticleData] = useState<ArticleData | null>(null);

  const handleNameContinue = (submittedName: string): void => {
    // if(submittedName !== name){
    //   apiService.resetToken()
    // }
    setName(submittedName);
    setStep(2);
  };

  const handleLanguageContinue = async (selectedLanguage: string): Promise<void> => {
    setIsLoading(true);
    setError(null);

    // if(selectedLanguage !== language){
    //   apiService.resetToken()
    // }

    try {
      // if (!apiService.isUserRegistered()) {
        await apiService.registerUser({
          userName: name,
          language: selectedLanguage
        });
      // }
      
      setLanguage(selectedLanguage);
      setStep(3);
    } catch (err) {
      setError('Failed to register user. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTopicContinue = async (selectedTopic: string): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const article = await apiService.getArticleIntroduction(selectedTopic);
      setTopic(selectedTopic);
      setArticleData({
        introduction: article.introduction
      });
      setStep(4);
      setLeftPanelTitle("All set! Read your article");
    } catch (err) {
      
      console.error('Article fetch error:', err);

      if((err as Error).message.includes("404")){
        setError('Oops... Couldn\'t find an article.. Please try a different topic.');
      } else {
        setError('Failed to fetch article.');
      }
    } finally {
      setIsLoading(false);
    }
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
    setArticleData(null);
    setStep(3);
    setLeftPanelTitle("Welcome to Pery!");
  };

  return (
    <div className={styles.wrapper}>
      <LoadingOverlay isVisible={isLoading} />
      <div className={styles.container}>
        <LeftPanel title={leftPanelTitle} />
        <div className={styles.rightPanel}>
          <ErrorMessage 
            message={error || ''} 
            onDismiss={() => setError(null)} 
          />
          <div className={`${styles.screen} ${step === 1 ? styles.visible : styles.hidden}`}>
            <UserInfoStep 
              onContinue={handleNameContinue}
              email={name}
              onEmailChange={setName}
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
              articleIntro={articleData?.introduction || ''}
            />
          </div>
        </div>
        <FAQBar />
      </div>
    </div>
  );
};

export default App;