import { useRef, useState } from "react";
import SayHi from "../../assets/images/SendMsg.svg";
import MsgSend from "../../assets/images/MsgSend.svg";
import Error from "../../assets/images/Error.svg";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { Hack } from "../../Functions/utlity";
import discord from "../../assets/images/discord.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

export default function Contact() {
  const form = useRef<any>();
  const [SendWord, SetWord] = useState("Send");
  const [ContactImg, SetImg] = useState(SayHi);
  let [contact, Animate] = useState<string>("Contact Me");

  const sendEmail = async (e) => {
    e.preventDefault();
    SetWord("Sending");
    await emailjs
      .sendForm(
        "service_1mq0vw9",
        "template_grx5z2m",
        form.current,
        "izrbZm5kyHwl1s3sT"
      )
      .then(
        (result) => {
          SetImg(MsgSend);
        },
        (error) => {
          SetImg(Error);
        }
      );
    SetWord("Send");
  };
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0" }}
      transition={{ ease: "easeOut", duration: 0.75 }}
      exit={{ y: "-100%" }}
      className={styles.Contact}
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
              Hack("CONTACT ME", Animate);
            }}
          >
            {contact}
          </m.h1>
        </div>
      </div>
      <h2>
        Feel Free to communicate with me
        <br /> through this form
      </h2>
      <div className={styles.EmailContact}>
        <img src={ContactImg} alt="Something did go wrong" id={styles.Img} />
        <form ref={form} onSubmit={sendEmail} id={styles.Contact_form}>
          <input
            type="text"
            name="First_name"
            required
            placeholder="First Name"
          />
          <input
            type="text"
            name="Last_name"
            required
            placeholder="Last Name"
          />
          <input type="email" name="User_Email" required placeholder="Email" />
          <input type="number" name="Phone_Number" placeholder="Phone No." />
          <textarea name="message" required placeholder="message" />
          <input type="submit" value={SendWord} id={styles.send} />
          <input
            type="reset"
            value="Rest"
            id={styles.reset}
            onClick={() => {
              SetImg(SayHi);
            }}
          />
        </form>
      </div>
      <div className={styles.social}>
        <h2>Follow me on social media</h2>
        <div className={styles.svgContainer}>
          <svg
            preserveAspectRatio="xMidYMax meet"
            viewBox="0 0 372 138"
            fill="none"
          >
            <path
              d="M371.609 0.652252L356.402 8.94317L371.185 17.9676L371.609 0.652252ZM363.309 11.3709C285.864 131.512 126.895 170.91 1.75003 98.6576L0.250031 101.256C126.787 174.312 287.523 134.475 365.831 12.9963L363.309 11.3709Z"
              fill="#121212"
            />
          </svg>
        </div>
        <div className={styles.medias}>
          <img src={facebook} className={styles.media} />
          <img src={twitter} className={styles.media} />
          <img src={discord} className={styles.media} />
        </div>
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
