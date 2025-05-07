import React, { useState } from 'react';
import styles from '../App.module.css';
import { Input } from './common/Input';
import { Button } from './common/Button';
import { Panel } from './common/Panel';

interface TopicSelectionStepProps {
  onBack: () => void;
  onContinue: () => void;
}

const TopicSelectionStep: React.FC<TopicSelectionStepProps> = ({ onBack, onContinue }) => {
  const [topic, setTopic] = useState('');

  return (
    <Panel className={styles.formContainer}>
      <h3 className={styles.headline}>
        What would you like to learn about?
      </h3>
      <div>
        <Input
          label="Enter a topic"
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
        <p className={styles.hint}>
          <span role="img" aria-label="bulb">💡</span>
          Choose any topic you're curious about!
        </p>
      </div>
    </Panel>
  );
};

export default TopicSelectionStep;