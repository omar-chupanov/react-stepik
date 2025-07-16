import { useEffect, useState } from "react";

export default function AutoCountdown() {
    const [timer, setTimer] = useState(10);
    const [pausa, setPausa] = useState(false);

    

    useEffect (()=>{
        let interval;
        if (!pausa) {
            interval = setInterval(() => {
                setTimer(prevSeconds => prevSeconds -1 )
            }, 1000);
        }

        return ()=> clearInterval(interval)
    },[pausa])

    return(
        <div>
            <p>Таймер {timer <= 0 ? setTimer(10): timer}</p>
            <button onClick={()=> setPausa(!pausa)}>{pausa ? 'Возобновить' : 'Пауза'} </button>
        </div>
    )
}