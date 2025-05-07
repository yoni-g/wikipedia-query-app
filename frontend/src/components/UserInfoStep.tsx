import React, { useState } from "react";
import styles from "../App.module.css";
import { Input } from './common/Input';
import { Button } from './common/Button';
import { Panel } from './common/Panel';

interface UserInfoStepProps {
  onContinue: () => void;
}

const UserInfoStep: React.FC<UserInfoStepProps> = ({ onContinue }) => {
  const [email, setEmail] = useState('');

  return (
    <Panel className={styles.formContainer}>
      <h3 className={styles.headline}>
        Love learning new stuff?<br />
        get an article on any subject you like!
      </h3>
      <div>
        <Input
          type="email"
          id="email"
          label="Type your email address"
          placeholder="me@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button 
          onClick={onContinue}
          disabled={!email.trim()}
          fullWidth
        >
          Continue &gt;
        </Button>
        <p className={styles.terms}>
          <span role="img" aria-label="lock">🔒</span>
          By clicking "continue" I agree to Pery's terms
        </p>
      </div>
    </Panel>
  );
};

export default UserInfoStep;