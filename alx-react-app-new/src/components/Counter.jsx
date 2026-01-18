import { useState } from 'react';

function Counter() {
  // Step 1: Initialize state
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '15px',
        textAlign: 'center',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h2 style={{ color: 'blue' }}>Simple Counter</h2>
      <p style={{ fontSize: '20px', margin: '10px 0' }}>Current Count: {count}</p>

      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            margin: '5px',
            padding: '10px 15px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{
            margin: '5px',
            padding: '10px 15px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            margin: '5px',
            padding: '10px 15px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
