import { motion as m } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { changeMorph } from "../../Functions/CustomHooks";
import { Hack } from "../../Functions/utlity";
import style from "./project.module.css";

export default function Projects() {
  const [project, Animate] = useState<string>("Projects");
  const [projectName, Appear] = useState<string>("");
  const morph = changeMorph();
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ ease: "easeOut", duration: 0.75 }}
      exit={{ y: "-100%" }}
      className={style.projects}
    >
      <div className={style.firstlayer}>
        <Link to="/" reloadDocument className={style.tag}>
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
              Hack("Projects", Animate);
            }}
          >
            {project}
          </m.h1>
        </div>
      </div>
      <h1>
        Check out my projects by selecting <br /> a shape{" "}
      </h1>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.5, duration: 1.2 }}
        className={style.wrapper}
        data-roundness={morph.roundness}
        data-configuration={morph.configuration}
      >
        <a
          href="https://github.com/Shinji13/XStream"
          target="_blank"
          className={style.shape}
          onMouseEnter={() => {
            Appear("XStream");
          }}
        ></a>
        <a
          href="https://github.com/Shinji13/RythmeSvelte"
          target="_blank"
          className={style.shape}
          onMouseEnter={() => {
            Appear("PolyRhythms");
          }}
        ></a>
        <a
          href="https://github.com/Shinji13/stackSearch"
          target="_blank"
          className={style.shape}
          onMouseEnter={() => {
            Appear("Stack-search");
          }}
        ></a>
        <a
          href="https://github.com/Shinji13/multiLayerPerceptron"
          target="_blank"
          className={style.shape}
          onMouseEnter={() => {
            Appear("Neural network constructor");
          }}
        ></a>
        <a
          href="https://create-split-app.vercel.app/"
          target="_blank"
          className={style.shape}
          onMouseEnter={() => {
            Appear("Create-split-app");
          }}
        ></a>
        <a
          href="https://github.com/Shinji13/SvelteDocsMaker"
          target="_blank"
          onMouseEnter={() => Appear("SvelteDocsMaker")}
          className={style.shape}
        ></a>
        <a
          href=""
          target="_blank"
          onMouseEnter={() => Appear("")}
          className={style.shape}
        ></a>
      </m.div>
      <h2>{projectName}</h2>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.5, duration: 1.2 }}
        className="lastlayer"
      >
        <Link to="/" className="button">
          Back to Home
        </Link>
        <Link to="/Contact" className="button">
          Preceed to Next Section
        </Link>
      </m.div>
    </m.div>
  );
}
