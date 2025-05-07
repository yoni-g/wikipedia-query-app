import React, { useState } from 'react';
import styles from '../App.module.css';
import { Input } from './common/Input';
import { Button } from './common/Button';
import { Panel } from './common/Panel';
import { StepHeader } from './common/StepHeader';

interface TopicSelectionStepProps {
  onBack: () => void;
  onContinue: () => void;
}

const TopicSelectionStep: React.FC<TopicSelectionStepProps> = ({ onBack, onContinue }) => {
  const [topic, setTopic] = useState('');

  return (
    <Panel className={styles.formContainer}>
      <StepHeader>
        What would you like to read about?
      </StepHeader>
      <div className={styles.hint}>
        <p>
          Dogs? molecular culinary? everything goes...
        </p>
      </div>
      <div>
        <Input
          label="Article subject"
          placeholder="e.g., Quantum Physics, History of Rome, Climate Change"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <div className={styles.buttonGroup}>
          <Button variant="secondary" onClick={onBack}>
            &lt; Back
          </Button>
          <Button onClick={onContinue} disabled={!topic.trim()}>
            Continue &gt;
          </Button>
        </div>
      </div>
    </Panel>
  );
};

export default TopicSelectionStep;