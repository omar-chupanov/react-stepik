import { useReducer } from "react";

const init = { visit: false };

function reduce(state, action) {
    switch (action.type) {
        case "visibility":
            return { visit:  true };
        case "unvisibility":
            return { visit:  false };
        default:
            return state;
    }
}

export default function VisibilityToggle() {
    const [state, disp] = useReducer(reduce, init);

    return (
        <div>
            <button onClick={()=> disp({type: 'visibility'})}>Показать</button>
            <button onClick={()=> disp({type: 'unvisibility'})}>Убрать</button>
            {state.visit ? <p>Текст показан!</p> : null}
        </div>
    )
}