import React from 'react';
import styles from '../../App.module.css';

interface TermsMessageProps {
  children: React.ReactNode;
  icon?: string;
}

export const TermsMessage: React.FC<TermsMessageProps> = ({ children, icon = '🔒' }) => {
  return (
    <p className={styles.terms}>
      <span role="img" aria-label="icon">{icon}</span>
      {children}
    </p>
  );
};