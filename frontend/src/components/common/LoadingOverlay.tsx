import React from 'react';
import styles from './LoadingOverlay.module.css';

interface LoadingOverlayProps {
  isVisible: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <div className={styles.spinner} />
        <span className={styles.text}>Loading...</span>
      </div>
    </div>
  );
};