import React from "react";
import styles from "../App.module.css";

interface UserInfoStepProps {
  onContinue: () => void;
}

const UserInfoStep: React.FC<UserInfoStepProps> = ({ onContinue }) => {
  return (
    <>
      <div className={styles.rightPanel}>
        <div className={styles.formContainer}>
          <h3 className={styles.headline}>
            Love learning new stuff?<br />
            get an article on any subject you like!
          </h3>
          <div>
            <label htmlFor="email" className={styles.label}>
              Type your email address
            </label>
            <input 
              type="email" 
              id="email" 
              className={styles.input} 
              placeholder="me@email.com" 
            />
            <button 
              className={styles.button} 
              onClick={onContinue}>
                Continue 	&gt;
            </button>
            <p className={styles.terms}>
              <span role="img" aria-label="lock">🔒</span>
              By clicking "continue" I agree to Pery's terms
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoStep;
