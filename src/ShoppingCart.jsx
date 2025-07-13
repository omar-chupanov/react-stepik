import { useReducer } from "react";

const initialState = {
    items: []
};

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex >= 0) {
                return {
                    ...state,
                    items: state.items.map((item, index) =>
                        index === existingItemIndex 
                            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) } 
                            : item
                    )
                };
            } else {
                const newItem = { 
                    ...action.payload, 
                    quantity: action.payload.quantity || 1 
                };
                return {
                    ...state,
                    items: [...state.items, newItem]
                };
            }

        case 'DECREASE_ITEM':
            return {
                ...state,
                items: state.items.map(item => 
                    item.id === action.payload.id 
                        ? { ...item, quantity: Math.max(1, item.quantity - 1) } 
                        : item
                )
            };

        case 'INCREASE_ITEM':
            return {
                ...state,
                items: state.items.map(item => 
                    item.id === action.payload.id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                )
            };

        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };

        case 'CLEAR_ALL':
            return {
                ...state,
                items: []
            };

        default:
            return state;
    }
}

export default function ShoppingCart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const products = [
        { id: 1, name: "Ноутбук", price: 999 },
        { id: 2, name: "Смартфон", price: 699 },
        { id: 3, name: "Наушники", price: 199 },
        { id: 4, name: "Компьютер", price: 1999 }
    ];

    const totalPriceItems = state.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    return (
        <div style={{ padding: '20px', margin: '0 auto', maxWidth: '800px' }}>
            <h2>Доступные товары</h2>
            <div style={{ 
                display: 'flex', 
                gap: '20px', 
                marginBottom: '20px' 
            }}>
                {products.map(product => (
                    <div key={product.id} style={{ 
                        border: '1px solid #ddd', 
                        padding: '15px', 
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <h3 style={{ margin: 0 }}>{product.name}</h3>
                        <p style={{ margin: 0 }}>Цена: ${product.price}</p>
                        <button 
                            onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
                            style={{ 
                                padding: '8px 12px',
                                cursor: 'pointer'
                            }}
                        >
                            Добавить в корзину
                        </button>
                    </div>
                ))}
            </div>

            <h2>Корзина</h2>
            {state.items.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {state.items.map(item => (
                            <li key={item.id} style={{ 
                                marginBottom: '15px', 
                                padding: '15px', 
                                border: '1px solid #eee',
                                borderRadius: '8px'
                            }}>
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <span style={{ fontWeight: 'bold' }}>{item.name}</span> - 
                                        ${item.price} × {item.quantity} = ${item.price * item.quantity}
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button 
                                            onClick={() => dispatch({ type: "DECREASE_ITEM", payload: { id: item.id } })}
                                            disabled={item.quantity <= 1}
                                            style={{
                                                padding: '5px 10px',
                                                backgroundColor: '#f44336',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: item.quantity > 1 ? 'pointer' : 'not-allowed'
                                            }}
                                        >
                                            -
                                        </button>
                                        <button 
                                            onClick={() => dispatch({ type: "INCREASE_ITEM", payload: { id: item.id } })}
                                            style={{
                                                padding: '5px 10px',
                                                backgroundColor: '#2196F3',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            +
                                        </button>
                                        <button 
                                            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
                                            style={{
                                                padding: '5px 10px',
                                                backgroundColor: '#ff9800',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div style={{ 
                        marginTop: '20px',
                        fontSize: '1.2em',
                        fontWeight: 'bold'
                    }}>
                        Общая сумма: ${totalPriceItems}
                    </div>
                    <button 
                        onClick={() => dispatch({ type: "CLEAR_ALL" })}
                        style={{
                            marginTop: '15px',
                            padding: '10px 15px',
                            backgroundColor: '#ff5722',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Очистить корзину
                    </button>
                </div>
            )}
        </div>
    );
}