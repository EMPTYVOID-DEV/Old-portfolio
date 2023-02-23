import React from 'react'
import {motion as m} from "framer-motion"
export default function MainHeader() {
  let [counter,Increment]=React.useState(19)
  let clearTime=React.useRef({sentence:["Hi Im web developer","Hi Im UX/UI DESIGNER"],toggle:true,index:0});
  React.useEffect(()=>{
        const id=setInterval(()=>{
            Increment((prev)=>{
                if(prev===4){            
                    clearTime.current.toggle=true;
                    (clearTime.current.index===0)? clearTime.current.index=1:clearTime.current.index=0;
                 } 
                if(prev===clearTime.current.sentence[clearTime.current.index].length){            
                   clearTime.current.toggle=false
                }       
                if(clearTime.current.toggle){
                  return prev+1;
                }
                else{
                  return prev-1;
                }
            })
        },580)
        return ()=>{
          clearInterval(id)
        }
  },[])
  return (
      <div>
        <m.h1 
        initial={{y:"100%"}}
        animate={{y:"0"}}
        transition={{ease:"easeOut",delay:0.5,duration:1}} id='MainHeader'>{clearTime.current.sentence[clearTime.current.index].slice(0,counter+1)} </m.h1>
      </div>  
  )
}

