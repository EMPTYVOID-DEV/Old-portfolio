const letters="abcdefghijklmnopqrstuvwxyz"
export const Hack=(Str:string,Animate:React.Dispatch<string>)=>{
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