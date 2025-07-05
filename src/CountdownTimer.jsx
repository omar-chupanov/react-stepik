import { useEffect, useState } from "react";


export default function CountdownTimer() {
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevseconds => {
                if (prevseconds > 0) {
                    return prevseconds - 1;
                }
                else { 
                    return 10;
                }
            })
        }, 1000);
        return () => clearInterval(interval)
    })
    return (
        <div>
            <p>Прошло {seconds} секунд</p>
        </div>
    )
}