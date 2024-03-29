import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function NavBar() {
  const [isNavVisible, changeNavVisibility] = useState<boolean>(false);
  return (
    <>
      <span
        className={styles.toggle}
        onClick={() => {
          changeNavVisibility(true);
        }}
      >
        Menu
      </span>
      <div
        className={styles.NavSections}
        id={isNavVisible ? styles.visible : styles.hidden}
      >
        <div className={styles.navigation}>
          <h3>Navigation</h3>
          <div className={styles.sections}>
            <Link to="/About" className={styles.section}>
              About
            </Link>
            <Link to="/Skill" className={styles.section}>
              Skills
            </Link>
            <Link to="/Project" className={styles.section}>
              Projects
            </Link>
            <Link to="/Contact" className={styles.section}>
              Contact
            </Link>
          </div>
        </div>
        <div className={styles.social}>
          <h3>Socials</h3>
          <div className={styles.sections}>
            <a
              target={"_blank"}              href="https://www.linkedin.com/in/aymen-keskas"
            >
              Linkedin
            </a>
            <a target={"_blank"} href={"https://twitter.com/soskue_aizen"}>
              Twitter
            </a>
            <a href="https://github.com/Shinji13" target={"_blank"}>
              Github
            </a>
          </div>
        </div>
        <i
          className="fa-solid fa-xmark"
          id={styles.close}
          onClick={() => {
            changeNavVisibility(false);
          }}
        ></i>
      </div>
    </>
  );
}
