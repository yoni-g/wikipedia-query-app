import React from 'react';
import styles from '../../App.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  className, 
  ...props 
}) => {
  return (
    <button
      className={`
        ${styles.button}
        ${variant === 'secondary' ? styles.buttonSecondary : ''}
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </button>
  );
};