import { useRef, useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { Hack } from "../../Functions/utlity";

export default function Contact() {
  const fields = [
    { placeholder: "mohammad amin", label: "What's your name?", name: "name" },
    {
      placeholder: "mohammad@gmail.com",
      label: "What's your email?",
      name: "email",
    },
    {
      placeholder: "Web Development,Web Design",
      label: "What services are you looking for?",
      name: "subject",
    },
    {
      placeholder: "mohammad enterprise",
      label: "What's your organization name?",
      name: "company",
    },
    {
      placeholder: "Hello aymen can you help me with",
      label: "Your message",
      name: "message",
    },
  ];
  const form = useRef<HTMLFormElement>(null);
  let [contact, Animate] = useState<string>("Contact Me");
  let [sendingState, changeSendingState] = useState<
    "send" | "sending" | "send failed" | "send successful"
  >("send");

  const sendEmail = async (e) => {
    e.preventDefault();
    changeSendingState("sending");
    const res = await emailjs.sendForm(
      import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
      import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
      form.current as HTMLFormElement,
      import.meta.env.VITE_PUBLIC_KEY
    );
    if (res.status < 400) changeSendingState("send successful");
    else changeSendingState("send failed");
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
      <div className={styles.main}>
        <h1>
          <span>Let's start a</span>
          <span>project together</span>
        </h1>
        <div className={styles.imgContainer}></div>
        <form className={styles.form} ref={form}>
          {fields.map((field, index) => (
            <div className={styles.field} key={field.label}>
              <h3>0{index}</h3>
              <label htmlFor="">{field.label}</label>
              {index == fields.length - 1 ? (
                <textarea
                  required
                  placeholder={field.placeholder}
                  name={field.name}
                />
              ) : (
                <input
                  type="text"
                  name={field.name}
                  required
                  placeholder={field.placeholder}
                ></input>
              )}
            </div>
          ))}
          <button type="submit" onClick={(evt) => sendEmail(evt)}>
            {sendingState}
          </button>
        </form>
        <div className={styles.info}>
          <h3>Contact details</h3>
          <div>
            <span>keskasaymen08@gmail.com</span>
            <span>+213 775210076</span>
            <span>19107 algeria</span>
          </div>
          <h3>Socials</h3>
          <div className={styles.social}>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/aymen-keskas"
            >
              Linkedin
            </a>
            <a target={"_blank"} href="https://twitter.com/soskue_aizen">
              Twitter
            </a>
            <a href="https://github.com/Shinji13" target={"_blank"}>
              Github
            </a>
          </div>
        </div>
      </div>
    </m.div>
  );
}
