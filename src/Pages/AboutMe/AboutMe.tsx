import "./About.css";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Hack } from "../../Functions/utlity";
export default function AboutMe() {
  let [about, Animate] = useState<string>("ABOUT ME");

  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ ease: "easeOut", duration: 0.75 }}
      exit={{ y: "-100%" }}
      className="about"
    >
      <div className="firstlayer">
        <Link to="/" reloadDocument className="tag">
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
              Hack("ABOUT ME", Animate);
            }}
          >
            {about}
          </m.h1>
        </div>
      </div>
      <div className="middlelayer">
        <div className="ImgContainer">
          <m.img src="/AboutPic.png" alt="Personal img" />
        </div>
        <div className="Content">
          <div>
            <m.h2
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            >
              WHO AM I? LET FIND OUT...
            </m.h2>
          </div>
          <p>
            I am a highly creative and solution-oriented web developer with a
            passion for building robust infrastructures using Node.js. With a
            strong focus on design and problem-solving, I brings a unique
            perspective to every project.I hold a bachelor's degree in computer
            science and I am currently pursuing a master's degree at Farhat
            Abbas University.
          </p>
          <span>Why hiring me?</span>
          <div className="skills">
            <div className="skill">
              <m.span
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
              >
                Web development
              </m.span>
              <i className="fa-sharp fa-solid fa-check"></i>
            </div>
            <div className="skill">
              <m.span
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
              >
                Web design
              </m.span>
              <i className="fa-sharp fa-solid fa-check"></i>
            </div>
          </div>
          <div className="skills">
            <div className="skill">
              <m.span
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
              >
                Creativity
              </m.span>
              <i className="fa-sharp fa-solid fa-check"></i>
            </div>
            <div className="skill">
              <m.span
                initial={{ y: "100%" }}
                animate={{ y: "0" }}
                transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
              >
                Hardwork
              </m.span>
              <i className="fa-sharp fa-solid fa-check"></i>
            </div>
          </div>
        </div>
      </div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.5, duration: 1.2 }}
        className="lastlayer"
      >
        <Link to="/" className="button">
          Back to Home
        </Link>
        <Link to="/Skill" className="button">
          Preceed to Next Section
        </Link>
      </m.div>
    </m.div>
  );
}
