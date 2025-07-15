import { useEffect, useState } from "react";

export default function DelayedUpdateCounter() {
    const [count, setCount] = useState(0);
    const [pending, setPending] = useState(false)

   useEffect(()=>{
    let timer;
    if (pending) {
        setTimeout(() => {
            setCount( prevCount => prevCount + 1);
            setPending(false)
        }, 2000);
    }
    return ()=> clearTimeout(timer)
   },[pending])


   return (
    <div>
        <button onClick={()=>setPending(true)}>Счетчик {count}</button>
    </div>
   )
}