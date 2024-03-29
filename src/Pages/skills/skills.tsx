import styles from "./skills.module.css";
import { motion as m } from "framer-motion";
import { useState } from "react";
import { Hack } from "../../Functions/utlity";
import { Link } from "react-router-dom";
import { MAP } from "./brain";
import ImageMapper from "react-img-mapper";
import { UseResize } from "../../Functions/CustomHooks";

function defaultSkillColor() {
  return new Map([
    ["figma", "#121212"],
    ["css", "#121212"],
    ["puppeteer", "#121212"],
    ["react", "#121212"],
    ["node", "#121212"],
    ["mongodb", "#121212"],
    ["express", "#121212"],
    ["libraries", "#121212"],
    ["tailwind", "#121212"],
    ["svelte", "#121212"],
    ["html", "#121212"],
  ]);
}

export default function Skills() {
  let [MapOfSkills, SetSkillColor] =
    useState<Map<string, string>>(defaultSkillColor);
  let [skills, Animate] = useState<string>("Skills");
  let width = UseResize();
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ ease: "easeOut", duration: 0.6 }}
      exit={{ y: "-100%" }}
      className={styles.skills}
    >
      <div className={styles.firstlayer}>
        <Link to="/" reloadDocument className={styles.tag}>
          <div>
            <m.span
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            >
              Keskas
            </m.span>
          </div>
          <div>
            <m.span
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            >
              Aymen
            </m.span>
          </div>
        </Link>
        <div>
          <m.h1
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            onMouseOver={() => {
              Hack("skills", Animate);
            }}
          >
            {skills}
          </m.h1>
        </div>
      </div>
      <h1>Let Know about my capabilities</h1>
      <div className={styles.BrainSet}>
        <div className={styles.leftside}>
          <div className={styles.sections}>
            <h3>Front End 42%</h3>
            <span style={{ color: `${MapOfSkills.get("html")}` }}>Html</span>
            <span style={{ color: `${MapOfSkills.get("css")}` }}>Css</span>
            <span style={{ color: `${MapOfSkills.get("tailwind")}` }}>
              Tailwind/Postcss
            </span>
            <span style={{ color: `${MapOfSkills.get("svelte")}` }}>
              sveltekit
            </span>
            <span style={{ color: `${MapOfSkills.get("react")}` }}>
              React Js
            </span>
          </div>
          <div className={styles.sections}>
            <h3>Back End 30%</h3>
            <span style={{ color: `${MapOfSkills.get("node")}` }}>Node Js</span>
            <span style={{ color: `${MapOfSkills.get("mongodb")}` }}>
              MongoDb/Postgresql
            </span>
            <span style={{ color: `${MapOfSkills.get("express")}` }}>
              Express Js
            </span>
          </div>
          <div className={styles.sections}>
            <h3 style={{ color: `${MapOfSkills.get("libraries")}` }}>
              Famous Skills 20%
            </h3>
            <span>React Query</span>
            <span>Mongoose/Prisma</span>
            <span>Zustand/valtio</span>
            <span>Typescript</span>
            <span>React Motion</span>
            <span>Axios</span>
            <span>Reveal js</span>
          </div>
          <div className={styles.sections}>
            <h3>Other Skills 8%</h3>
            <span style={{ color: `${MapOfSkills.get("figma")}` }}> Figma</span>
            <span style={{ color: `${MapOfSkills.get("puppeteer")}` }}>
              Puppeteer
            </span>
          </div>
        </div>
        <ImageMapper
          imgWidth={967}
          width={width}
          src="/brain.png"
          map={MAP}
          onMouseEnter={(area) => {
            const newmap = defaultSkillColor();
            newmap.set(area.id as string, area.fillColor as string);
            SetSkillColor(newmap);
          }}
          onMouseLeave={() => {
            SetSkillColor(defaultSkillColor());
          }}
        />
      </div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.5, duration: 1.2 }}
        className={styles.lastlayer}
      >
        <Link to="/" className={styles.button}>
          Back to Home
        </Link>
        <Link to="/Project" className={styles.button}>
          Preceed to Next Section
        </Link>
      </m.div>
    </m.div>
  );
}
