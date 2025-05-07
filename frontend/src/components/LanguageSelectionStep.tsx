import React from 'react';
import styles from '../App.module.css';
import { Button } from './common/Button';
import { Panel } from './common/Panel';
import { RadioGroup } from './common/RadioGroup';
import { StepHeader } from './common/StepHeader';

interface LanguageSelectionStepProps {
  onBack: () => void;
  onContinue: () => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

const languageOptions = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' }
];

const LanguageSelectionStep: React.FC<LanguageSelectionStepProps> = ({
  onBack,
  onContinue,
  selectedLanguage,
  onLanguageChange
}) => {
  return (
    <Panel className={styles.formContainer}>
      <StepHeader>
        Nice to meet you!
      </StepHeader>
      <div className={styles.hint}>
        <p>
          Which language do you prefer to read?
        </p>
      </div>
      <div>
        <RadioGroup
          options={languageOptions}
          name="language"
          value={selectedLanguage}
          onChange={onLanguageChange}
        />
        <div className={styles.buttonGroup}>
          <Button variant="secondary" onClick={onBack}>
            &lt; Back
          </Button>
          <Button onClick={onContinue} disabled={!selectedLanguage}>
            Continue &gt;
          </Button>
        </div>
      </div>
    </Panel>
  );
};

export default LanguageSelectionStep;