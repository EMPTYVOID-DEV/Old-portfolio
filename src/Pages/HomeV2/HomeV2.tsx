import React, { useEffect, useRef, useState } from "react";
import styles from "./HomeV2.module.css";
import main from "../../assets/images/main.jpg";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeV2() {
  const [imgStyle, animateImg] = useState<boolean>(true);
  const mediaQuery = useRef<any>(null);
  useEffect(() => {
    let timer = setTimeout(() => {
      animateImg(false);
    }, 1650);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <m.div
      style={{ backgroundColor: `${imgStyle ? "#121212" : "transparent"}` }}
      className={styles.HomeV2}
    >
      <i
        className="fa-sharp fa-solid fa-sun"
        id={styles.star}
        style={{ color: `${imgStyle ? "#e2a115" : ""}` }}
        onClick={() => {
          animateImg(!imgStyle);
        }}
      ></i>
      <m.img className={imgStyle ? styles.imgView : styles.img} src={main} />
      <div className={styles.navBar}>
        <Link to="/" reloadDocument className={styles.tag}>
          <div>
            <m.span
              className={imgStyle ? styles.special : styles.normal}
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            >
              Keskas
            </m.span>
          </div>
          <div>
            <m.span
              className={imgStyle ? styles.special : styles.normal}
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            >
              Aymen
            </m.span>
          </div>
        </Link>
        <i
          className="fa-solid fa-bars"
          id={styles.toggle}
          onClick={() => {
            mediaQuery.current.style.right = "0";
          }}
          style={{ color: `${imgStyle ? "#e2a115" : ""}` }}
        ></i>
        <div className={styles.NavSections} ref={mediaQuery}>
          <Link
            to="/About"
            className={imgStyle ? styles.sectionBlack : styles.section}
          >
            About
          </Link>
          <Link
            to="/Skill"
            className={imgStyle ? styles.sectionBlack : styles.section}
          >
            Skills
          </Link>
          <Link
            to="/Project"
            className={imgStyle ? styles.sectionBlack : styles.section}
          >
            Projects
          </Link>
          <Link
            to="/Contact"
            className={imgStyle ? styles.sectionBlack : styles.section}
          >
            contact
          </Link>
          <i
            className="far fa-window-close"
            id={styles.close}
            onClick={() => {
              mediaQuery.current.style.right = "-200%";
            }}
          ></i>
        </div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.leftside}>
          <div className={imgStyle ? styles.special : styles.normal}>
            <m.h1
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            >
              Designer <span>&</span>
            </m.h1>
          </div>
          <div className={imgStyle ? styles.special : styles.normal}>
            <m.h1
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            >
              Developer
            </m.h1>
          </div>
        </div>
        <div className={styles.rightside}>
          <div>
            <i
              style={{ color: `${imgStyle ? "#e2a115" : ""}` }}
              className="fa-sharp fa-solid fa-quote-left"
            ></i>
            <m.h1
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
              style={{ color: `${imgStyle ? "#ededed" : ""}` }}
            >
              The most beautiful experience we can have is the mysterious.
            </m.h1>
          </div>
          <div>
            <m.h1
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
              style={{ color: `${imgStyle ? "#ededed" : ""}` }}
            >
              It is the fundamental emotion that stands at the cradle of true
              art and true science
              <i
                style={{ color: `${imgStyle ? "#e2a115" : ""}` }}
                className="fa-sharp fa-solid fa-quote-right"
              ></i>
            </m.h1>
          </div>
          <div>
            <m.h3
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
              style={{ color: `${imgStyle ? "#e2a115" : ""}` }}
            >
              Albert Einstein
            </m.h3>
          </div>
        </div>
      </div>
    </m.div>
  );
}
