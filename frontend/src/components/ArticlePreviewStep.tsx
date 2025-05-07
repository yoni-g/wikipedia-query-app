import React from 'react';
import styles from '../App.module.css';
import { Button } from './common/Button';
import { Panel } from './common/Panel';
import { StepHeader } from './common/StepHeader';

interface ArticlePreviewStepProps {
  onStartOver: () => void;
  articleIntro: string;
}

const ArticlePreviewStep: React.FC<ArticlePreviewStepProps> = ({
  onStartOver,
  articleIntro
}) => {
  return (
    <Panel className={styles.articleContainer}>
      <div className={styles.applauseIcon}>
        👏
      </div>
      <StepHeader>
        All set. Here’s your article:
      </StepHeader>
      
      <div className={styles.articlePreview}>
        <p className={styles.articleIntro}>{articleIntro}</p>
      </div>

      <Button onClick={onStartOver}>
          Start Over
      </Button>
    </Panel>
  );
};

export default ArticlePreviewStep;