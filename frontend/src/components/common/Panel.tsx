import React from 'react';
import styles from '../../App.module.css';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
}

export const Panel: React.FC<PanelProps> = ({ children, className }) => {
  return (
    <div className={`${styles.panel} ${className || ''}`}>
      {children}
    </div>
  );
};