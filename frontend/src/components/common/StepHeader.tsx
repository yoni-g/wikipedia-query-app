import React from 'react';
import styles from '../../App.module.css';

interface StepHeaderProps {
  children: React.ReactNode;
}

export const StepHeader: React.FC<StepHeaderProps> = ({ children }) => {
  return (
    <h3 className={styles.headline}>
      {children}
    </h3>
  );
};