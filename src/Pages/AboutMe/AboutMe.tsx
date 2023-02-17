import  "./About.css"
import PersonalImg from "../../assets/images/Pers.jpg"
import {motion as m} from "framer-motion"
import { Link } from "react-router-dom"
import { useState } from "react"
let letters="abcdefghijklmnopqrstuvwxyz"
export default function AboutMe() {
  let [about ,Animate]=useState<string>("ABOUT ME")
  const Hack=(Str:string)=>{
    let iterations=0
    const interval=setInterval(()=>{ 
        let newstr=Str.split("").map((el,idx)=>{
          if(idx<iterations) return Str[idx]
          return letters[Math.floor(Math.random()*26)]
        }).join("")
        if(iterations>=Str.length)
            clearTimeout(interval)
        iterations+=1/3
        Animate(newstr)
    },90)
  }
  return (
     <m.div 
     initial={{y:"100%"}}
     animate={{y:"0"}}
     transition={{ease:"easeOut",duration:0.75}}
     exit={{y:"-100%"}}
     className="about">
        <div className="firstlayer">
        <Link to="/" reloadDocument className="tag" >
            <div>
             <m.span  
               initial={{y:"100%"}}
               animate={{y:"0"}}
               transition={{ease:"easeOut",delay:0.5,duration:1}}
               >Keskas</m.span>
            </div>
            <div>
            <m.span  
               initial={{y:"100%"}}
               animate={{y:"0"}}
               transition={{ease:"easeOut",delay:0.5,duration:1}}
               >Aymen</m.span>
             </div>
        </Link>
        <div>
            <m.h1
              initial={{y:"100%"}}
              animate={{y:"0"}}
              transition={{ease:"easeOut",delay:0.5,duration:1}}
              onMouseOver={()=>{Hack("ABOUT ME")}}>{about}</m.h1>
         </div>
        </div>
        <div className="middlelayer">
          <div className="ImgContainer">
             <m.img 
              initial={{height:"0"}}
              animate={{height:"300px"}}
              transition={{ease:"easeOut",delay:0.5,duration:1}}
             src={PersonalImg} alt="Personal img"/>
          </div>
            <div className="Content">
               <div>
                <m.h2
                  initial={{y:"100%"}}
                  animate={{y:"0"}}
                  transition={{ease:"easeOut",delay:0.5,duration:1}}
                  >WHO AM I? LET FIND OUT...</m.h2>
               </div>             
               <p>My name is Aymen Keskas a 20 year old web developer lives in algeria.I bring creativity in design and precision in solving problems furthermore Building large infrastructure with nodeJs is my passion.I want to share my experience with people and work with them to deliver our best to society.</p>
               <span>Why hiring me?</span>
               <div className="skills">
                  <div className="skill">
                    <m.span
                      initial={{y:"100%"}}
                      animate={{y:"0"}}
                      transition={{ease:"easeOut",delay:0.5,duration:1}}
                      >Web development</m.span>
                    <i className="fa-sharp fa-solid fa-check"></i>
                  </div>
                  <div className="skill">
                    <m.span
                      initial={{y:"100%"}}
                      animate={{y:"0"}}
                      transition={{ease:"easeOut",delay:0.5,duration:1}}
                      >Web design</m.span>
                    <i className="fa-sharp fa-solid fa-check"></i>
                  </div>
                  </div>
                  <div className="skills">
                  <div className="skill">
                  <m.span
                      initial={{y:"100%"}}
                      animate={{y:"0"}}
                      transition={{ease:"easeOut",delay:0.5,duration:1}}
                      >Creativity</m.span>
                    <i className="fa-sharp fa-solid fa-check"></i>
                  </div>
                  <div className="skill">
                  <m.span
                      initial={{y:"100%"}}
                      animate={{y:"0"}}
                      transition={{ease:"easeOut",delay:0.5,duration:1}}
                      >Hardwork</m.span>
                    <i className="fa-sharp fa-solid fa-check"></i>
                  </div>
                  </div>
               
            </div>
        </div>
        <div className="lastlayer">
           <Link to="/" className="button">Back to Home</Link>
           <Link to="/Skill" className="button">Preceed to Next Section</Link>
        </div>
     </m.div>
  )
}
