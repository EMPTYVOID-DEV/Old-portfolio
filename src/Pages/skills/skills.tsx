import   styles from "./skills.module.css"
import { motion as m} from "framer-motion"
import {  useEffect, useRef, useState } from "react"
import { Hack } from "../../Functions/utlity"
import { Link } from "react-router-dom"
export default function Skills() {
  let [skills ,Animate]=useState<string>("Skills")
  const blob=useRef<HTMLDivElement>(null)

  useEffect(()=>{
      const track=(event:PointerEvent)=>{
        let {clientX,clientY}=event
        blob.current?.animate({top:`${clientY}px`,left:`${clientX}px`},{duration:2000,fill:"forwards"})
      }
      document.body.addEventListener("pointermove",track)
      return ()=>{
        removeEventListener("pointermove",track)
      }
  },[])
  return (
    <><m.div
      initial={{ y: "100%"}}
      animate={{ y: "0"}}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ y: "-100%" }}
      className={styles.skills}>
      <div className={styles.firstlayer}>
        <Link to="/" reloadDocument className={styles.tag}>
          <div>
            <m.span
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            >Keskas</m.span>
          </div>
          <div>
            <m.span
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            >Aymen</m.span>
          </div>
        </Link>
        <div>
          <m.h1
            initial={{ y: "100%"}}
            animate={{ y: "0" }}
            transition={{ ease: "easeOut", delay: 0.5, duration: 1 }}
            onMouseOver={() => { Hack("skills", Animate) } }>{skills}</m.h1>
        </div>
      </div>
      <h1>Let Know about my capabilities and <br/> dive into my skill set</h1>
        <div className={styles.front} ref={blob}></div>
        <div className={styles.back}></div>
    </m.div>
    <m.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", delay: 0.5, duration: 1.2 }} className={styles.lastlayer}>
        <Link to="/" className={styles.button}>Back to Home</Link>
        <Link to="/Project" className={styles.button}>Preceed to Next Section</Link>
      </m.div></>
  )
      
}
