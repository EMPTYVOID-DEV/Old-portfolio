import MainHeader from "./MainHeader"
import "./Home.css"
import { Link } from 'react-router-dom'
import useSound from "use-sound"
import HoverSound from "../../assets/audio/Gta1.mp3"
import ClickSound from "../../assets/audio/Gta2.mp3"
import {motion as m} from "framer-motion"
export default function Home() {
  let [play1 ,{stop:stop1}]=useSound(HoverSound)
  let [play2]=useSound(ClickSound)

  return (
    <m.div 
    transition={{ease:"easeOut",duration:0.75}}
    exit={{y:"-100%"}}
    className="Home">
        <div className="Leftside">
           <div>
            <span>Welcome To My</span>
            <span>Portfolio</span>
           </div>
          <Link to="/" reloadDocument className="tag" >
            <div>
              <span>Keskas</span>
            </div>
            <div>
              <span>Aymen</span>
             </div>
           </Link>
          <MainHeader/>
         </div>
      <div className='Rightside'>
           <Link to="/About" onMouseEnter={()=>play1()} onMouseLeave={()=>stop1()} onClick={()=>play2()} className='MenuLink'style={{animation:"ShowUp 450ms linear 300ms 1 normal forwards"}}>About Me</Link>
           <Link to="/Skill" onMouseEnter={()=>play1()} onMouseLeave={()=>stop1()} onClick={()=>play2()} className='MenuLink'style={{animation:"ShowUp 450ms linear 200ms 1 normal forwards"}}>Skills</Link>
           <Link to="/Project"  onMouseEnter={()=>play1()} onMouseLeave={()=>stop1()} onClick={()=>play2()} className='MenuLink'style={{animation:"ShowUp 450ms linear 100ms 1 normal forwards"}}>Projects</Link>
           <Link to="/Contact" onMouseEnter={()=>play1()} onMouseLeave={()=>stop1()} onClick={()=>play2()} className='MenuLink' style={{animation:"ShowUp 450ms linear 0s 1 normal forwards"}}>Contact me</Link>
    </div>
    </m.div> 
  )
}
