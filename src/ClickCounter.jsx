import { useState } from "react";

export default function ClickCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onDoubleClick={()=>setCount(count + 1)}> Кнопка</button>
        </div>
    )
}