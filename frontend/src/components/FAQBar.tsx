import React from "react";
import styles from "../App.module.css";

const FAQBar: React.FC = () => {
    return (
        <div className={styles.faqBar}>
            <a
                href="https://www.mypery.com/#faqs"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.faqButton}
            >
            <img
              src="/FAQ_sales_person.png"
              alt="avatar"
              className={styles.avatar}
            />
            FAQs &amp; help
          </a>
        </div>
    );
}
 
export default FAQBar;