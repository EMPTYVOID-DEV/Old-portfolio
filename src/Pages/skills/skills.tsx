import   styles from "./skills.module.css"
import { motion as m} from "framer-motion"
import {  useEffect, useRef, useState } from "react"
import { Hack } from "../../Functions/utlity"
import { Link } from "react-router-dom"
import { MAP } from "./brain"
import ImageMapper from "react-img-mapper"
import Brain from "../../assets/images/brain.png"

function defaultSkillColor(){
    return new Map([["figma","#121212"],["css","#121212"],["DSAL","#121212"],["react","#121212"],["node","#121212"],["mongodb","#121212"],["express","#121212"],["libraries","#121212"],["tailwind","#121212"],["typescript","#121212"],["html","#121212"]])
}

export default function Skills() {
  let [MapOfSkills,SetSkillColor]=useState<Map<string,string>>(defaultSkillColor)
  const blob=useRef<HTMLDivElement>(null)
  let [skills ,Animate]=useState<string>("Skills")

  useEffect(()=>{
      const track=(event:PointerEvent)=>{
        let {clientX,clientY}=event
        blob.current?.animate({top:`${clientY+40}px`,left:`${clientX+40}px`},{duration:2000,fill:"forwards"})
      }
      document.body.addEventListener("pointermove",track)
      return ()=>{
        removeEventListener("pointermove",track)
      }
  },[])
  return (
    <m.div
      initial={{ y: "100%"}}
      animate={{ y: "0"}}
      transition={{ ease: "easeOut", duration: 0.6 }}
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
        <div className={styles.BrainSet}>
             <div className={styles.leftside} >
                <div className={styles.sections}>
                   <h3>Front End 32%</h3>
                   <span style={{color:`${MapOfSkills.get("html")}`}}>Html</span>
                   <span style={{color:`${MapOfSkills.get("css")}`}}>Css</span>
                   <span style={{color:`${MapOfSkills.get("tailwind")}`}}>Tailwind</span>
                   <span style={{color:`${MapOfSkills.get("typescript")}`}}>Typescript</span>
                   <span style={{color:`${MapOfSkills.get("react")}`}}>React Js</span>                   
                </div>
                <div className={styles.sections}>
                   <h3>Back End 38%</h3>
                   <span style={{color:`${MapOfSkills.get("node")}`}}>Node Js</span>
                   <span style={{color:`${MapOfSkills.get("mongodb")}`}}>Mongo DB</span>
                   <span style={{color:`${MapOfSkills.get("express")}`}}>Express Js</span>
                </div>
                <div className={styles.sections}>
                   <h3 style={{color:`${MapOfSkills.get("libraries")}`}}>Famous Technologies 20%</h3>
                   <span>React Query</span>
                   <span>Mongoose</span>
                   <span>Zustand</span>
                   <span>Jotai</span>
                   <span>React Motion</span>
                   <span>Jest</span>
                </div>
                <div className={styles.sections}>
                    <h3>Other Skills 10%</h3>
                    <span style={{color:`${MapOfSkills.get("figma")}`}}> Figma</span>
                    <span style={{color:`${MapOfSkills.get("DSAL")}`}}>Data Structures and Algoritmes</span>
                </div>
             </div>
             <ImageMapper  imgWidth={967}  width={560} src={Brain} map={MAP} onMouseEnter={(area)=>{
                  const newmap=defaultSkillColor()
                  newmap.set(area.id as string,area.fillColor as string)    
                  SetSkillColor(newmap)
             }}  onMouseLeave={()=>{SetSkillColor(defaultSkillColor())}}/>
        </div>
    <m.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", delay: 0.5, duration: 1.2 }} className={styles.lastlayer}>
        <Link to="/" className={styles.button}>Back to Home</Link>
        <Link to="/Project" className={styles.button}>Preceed to Next Section</Link>
      </m.div>
    </m.div>
  )
      
}
