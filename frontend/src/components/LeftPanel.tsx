import React from "react";
import styles from "../App.module.css";

interface LeftPanelProps {
    title: string
}
const LeftPanel: React.FC<LeftPanelProps> = ({title}) => {
  return (
    <>
      <div className={styles.leftPanel}>
        <h1 className={styles.logo}>compete</h1>
        <h2 className={styles.leftPanelText}>{title}</h2>
      </div>
    </>
  );
};

export default LeftPanel;
