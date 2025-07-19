import { useReducer } from "react";


const initState = {
    actions: [],
    currentAction: null
}

function reduce(state, action) {
    switch (action.type) {
        case 'ADD_ACTION':
            return {
                actions :  [...state.actions, action.payload],
                currentAction: action.payload
            }
        case 'UNDO_ACTION':
            if(state.actions.lenth === 0) return state;
            return{
                actions: [...state.actions].slice(0, -1),
                currentAction: [...state.actions].slice(0, -1)[[...state.actions].slice(0, -1).length - 1] || null,
            }    
    
        default:
            return state;
    }
}

export default function ActionHistory(params) {
    const [state, dispatch] = useReducer(reduce, initState);
    const handleButtonClick = (buttonName) =>{
        dispatch({
            type:'ADD_ACTION',
            payload : {
                id: Date.now(),
                type: 'BUTTON_CLICK',
                buttonName,
                timestamp: new Date().toLocaleTimeString(),
            }
        })
    }

    const handleUbdo = () => {
        dispatch({
            type:"UNDO_ACTION"
        })
    }
    return (
        <div>
            <h2>Действие пользователя</h2>
            <div>
                <button onClick={() => handleButtonClick('кнопка1')}>Кнопка1</button>
                <button onClick={() => handleButtonClick('кнопка2')}>Кнопка2</button>
                <button onClick={() => handleButtonClick('кнопка3')}>Кнопка3</button>
            </div>

            <button onClick={handleUbdo} disabled ={state.actions.length === 0}>Отменить последнее действие</button>

            {state.currentAction && (
                <div>
                    <h3>Текущее действие</h3>
                    <p>Тип: {state.currentAction.type}</p>
                    <p>Кнопка: {state.currentAction.buttonName}</p>
                    <p>Время : {state.currentAction.timestamp}</p>
                </div>
            )}

            <div>
                <h3>История действий ({state.actions.length}): </h3>
                {state.actions.length === 0 ?  (<p>Нет действий</p>): (
                    <ul>
                        {state.actions.map(action => (
                            <li key={action.id}>{action.timestamp} - Нажата {action.buttonName}</li>
                        ))}
                    </ul>
                ) }
            </div>
        </div>
    )
}