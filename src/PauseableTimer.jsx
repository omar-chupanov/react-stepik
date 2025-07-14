import { useEffect, useState } from "react";

export default function PauseableTimer() {
    const [time, setTime] = useState(0);
    const [pausa, setPausa] = useState(false);
    

    useEffect(() => {
        let interval
        if (!pausa) {
            interval = setInterval(() => {
                setTime(prevSeconds => prevSeconds + 1);
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        };
    }, [pausa]);

    return (
        <div>
            <h3>Время {time}</h3>
            <button onClick={() => setPausa(!pausa)}>{pausa ? 'Продолжить':'Пауза'}</button>
            <button onClick={() => setTime(0)}>Сброс</button>

        </div>
    )
}