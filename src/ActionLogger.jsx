const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  },
  title: {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px'
  },
  buttonsContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    justifyContent: 'center'
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#6200ee',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  historyContainer: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  },
  historyHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee'
  },
  historyTitle: {
    fontWeight: 'bold',
    color: '#555'
  },
  clearButton: {
    padding: '5px 10px',
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  historyList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxHeight: '300px',
    overflowY: 'auto'
  },
  historyItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #f0f0f0'
  },
  actionName: {
    color: '#333'
  },
  timestamp: {
    color: '#888',
    fontSize: '0.9em'
  },
  emptyMessage: {
    color: '#888',
    textAlign: 'center',
    padding: '10px',
    fontStyle: 'italic'
  }
};
import { useReducer } from "react";

const initialionState = {
    history: []
}

function loggerAction(state, action) {
    switch (action.type) {
        case 'ADD_ACTION':
            const newEntry = {
                id: Date.now(),
                name: action.payload,
                time: new Date().toLocaleTimeString()
            }
            return {
                ...state,
                history: [newEntry, ...state.history]
            };

        case 'CLEAR_HISTORY':
            return {
                ...state,
                history: []
            }
        default:
            state;
    }
}

export default function ActionLogger() {
    const [state, disp] = useReducer(loggerAction, initialionState);

    const simmulationAction = (actionName) => {
        disp ({
            type: 'ADD_ACTION',
            payload: actionName,
        })
    }

      return (
    <div style={styles.container}>
      <h2 style={styles.title}>Логгер действий</h2>
      
      <div style={styles.buttonsContainer}>
        <button 
          style={styles.button}
          onClick={() => simmulationAction('Действие 1')}
        >
          Действие 1
        </button>
        <button 
          style={styles.button}
          onClick={() => simmulationAction('Действие 2')}
        >
          Действие 2
        </button>
        <button 
          style={styles.button}
          onClick={() => simmulationAction('Специальное действие')}
        >
          Специальное действие
        </button>
      </div>
      
      <div style={styles.historyContainer}>
        <div style={styles.historyHeader}>
          <span style={styles.historyTitle}>История действий:</span>
          <button 
            style={styles.clearButton}
            onClick={() => disp({ type: 'CLEAR_HISTORY' })}
          >
            Очистить
          </button>
        </div>
        
        <ul style={styles.historyList}>
          {state.history.length > 0 ? (
            state.history.map(entry => (
              <li key={entry.id} style={styles.historyItem}>
                <span style={styles.actionName}>{entry.actionName}</span>
                <span style={styles.time}>{entry.timestamp}</span>
              </li>
            ))
          ) : (
            <li style={styles.emptyMessage}>Нет записанных действий</li>
          )}
        </ul>
      </div>
    </div>
  );
}
