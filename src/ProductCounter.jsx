import { useReducer } from "react";

const initialState = { count: 0};

function reduce(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count : state.count > 0 ? state.count - 1: 0}
        default:
            return state;
    }
}

export default function ProductCounter() {
    const [state, dispatch] = useReducer(reduce, initialState);

    return (
        <div>
            <p>Количесвто товаров в корзине ( которой нет!): {state.count}</p>
            <button onClick={()=> dispatch({type: 'increment'})}> Добавляем товар</button>
            <button onClick={()=> dispatch({type: 'decrement'})}> Удаляем  товар</button>

        </div>
    )
}