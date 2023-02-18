export const container={
    "hidden":{opacity:0},
    "visible":{
        opacity:1,
        transition:{
            delayChildren:0.75,
            staggerChildren:0.2,
            duration:0.75
        },
    },
}
export const item={
   "hidden":{y:"-400%"},
   "visible":{
      y:"0",
      transition:{
          duration:0.5
      }
   }
}