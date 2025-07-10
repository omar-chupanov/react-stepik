
import { useReducer } from "react";

const initialition = {
    activeTab: 'tab1'
}

const tabsReducer = (state, action) => {
    switch (action.type) {
        case 'SWITCH_TAB':
            return { ...state, activeTab: action.payload }

        default:
            return state;
    }
}

export default function Tabs() {
    const [state, disp] = useReducer(tabsReducer, initialition);

    const tabContents = {
        tab1: 'Содержиоме вкладки1',
        tab2: 'Содержиоме вкладки2',
        tab3: 'Содержиоме вкладки3'
    }

    return (
        <div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <button onClick={() => disp({ type: 'SWITCH_TAB', payload: 'tab1' })}
                    style={{ fontWeight: state.activeTab === 'tab1' ? 'bold' : 'normal' }}    >
                    Вкладка1
                </button>
                <button onClick={() => disp({ type: 'SWITCH_TAB', payload: 'tab2' })}
                    style={{ fontWeight: state.activeTab === 'tab2' ? "bold" : "normal" }}>Вкладка2
                </button>
                <button onClick={() => disp({ type: 'SWITCH_TAB', payload: 'tab3' })}
                    style={{ fontWeight: state.activeTab === 'tab3' ? "bold" : "normal" }}>Вкладка3
                </button>

            </div>
            <div style={{ border: '1px solid #ccc', padding: '20px' }}>
                {tabContents[state.activeTab]}
            </div>
        </div>
    )
}