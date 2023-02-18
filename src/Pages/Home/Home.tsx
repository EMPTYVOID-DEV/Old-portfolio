import MainHeader from "./MainHeader"
import "./Home.css"
import { Link } from 'react-router-dom'
import useSound from "use-sound"
import HoverSound from "../../assets/audio/Gta1.mp3"
import ClickSound from "../../assets/audio/Gta2.mp3"
import {motion as m} from "framer-motion"
import { useState } from "react"
export default function Home() {
  let [disable,setdisable]=useState<boolean>(false)
  let [play1 ,{stop:stop1}]=useSound(HoverSound)
  let [play2]=useSound(ClickSound)
  
  return (
    <m.div 
    transition={{ease:"easeOut",duration:0.75}}
    exit={{y:"-100%"}}
    className="Home">
        <div className="Leftside">
           <div>
            <m.span
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ease:"easeOut",delay:0.5,duration:1.5}}>Welcome To My</m.span>
            <m.span
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{ease:"easeOut",delay:0.5,duration:1.5}}>Portfolio</m.span>
           </div>
          <Link to="/" reloadDocument className="tag" >
            <div>
              <m.span initial={{y:"100%"}}
                      animate={{y:"0"}}
                      transition={{ease:"easeOut",delay:0.5,duration:1}}>Keskas</m.span>
            </div>
            <div>
              <m.span
                initial={{y:"100%"}}
                animate={{y:"0"}}
                transition={{ease:"easeOut",delay:0.5,duration:1}}>Aymen</m.span>
             </div>
           </Link>
          <MainHeader/>
         </div>
      <div className='Rightside'>          
           <Link to="/About"  onMouseEnter={()=>!disable && play1()}  onClick={()=>{setdisable(true) ;play2();}} className='MenuLink'><m.span initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"easeOut",delay:0.5,duration:1}}>about me</m.span></Link>
           <Link to="/Skill"  onMouseEnter={()=>!disable && play1()}  onClick={()=>{setdisable(true) ;play2();}} className='MenuLink'><m.span initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"easeOut",delay:0.75,duration:1}}>skills</m.span></Link>
           <Link to="/Project"   onMouseEnter={()=>!disable && play1()}  onClick={()=>{setdisable(true) ;play2();}} className='MenuLink'><m.span initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"easeOut",delay:1,duration:1}}>projects</m.span></Link>
           <Link to="/Contact"  onMouseEnter={()=>!disable && play1()}  onClick={()=>{setdisable(true) ;play2();}} className='MenuLink'><m.span initial={{opacity:0}} animate={{opacity:1}} transition={{ease:"easeOut",delay:1.25,duration:1}}>contact me</m.span></Link>
    </div>
    </m.div> 
  )
}
