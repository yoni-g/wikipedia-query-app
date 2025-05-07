import React, { useState } from "react";
import styles from "../App.module.css";
import { Input } from './common/Input';
import { Button } from './common/Button';
import { Panel } from './common/Panel';
import { StepHeader } from './common/StepHeader';
import { TermsMessage } from './common/TermsMessage';

interface UserInfoStepProps {
  onContinue: (email: string) => void;
  email: string;
  onEmailChange: (email: string) => void;
}

const UserInfoStep: React.FC<UserInfoStepProps> = ({ onContinue, email, onEmailChange }) => {
  const [error, setError] = useState<string>('');

  const handleContinue = () => {
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    if (!/^[^@]+@[^@]{2,}\.[^@]{2,}$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    onContinue(email);
  };

  return (
    <Panel className={styles.formContainer}>
      <StepHeader>
        Love learning new stuff?<br />
        get an article on any subject you like!
      </StepHeader>
      <div>
        <Input
          type="email"
          id="email"
          label="Type your email address"
          placeholder="me@email.com"
          value={email}
          onChange={(e) => {
            onEmailChange(e.target.value);
            if (error) setError('');
          }}
          error={error}
        />
        <Button 
          onClick={handleContinue}
        >
          Continue &gt;
        </Button>
        <TermsMessage>
          By clicking "continue" I agree to Pery's terms
        </TermsMessage>
      </div>
    </Panel>
  );
};

export default UserInfoStep;