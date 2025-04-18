import { useState } from 'react';

function WelcomeMessage({ name }) {
  return <h1>Hello, {name}! Welcome to React!</h1>;
}

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setShowMessage(!showMessage)}
        style={{
          padding: '10px 15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          margin: '10px 0'
        }}
      >
        {showMessage ? 'Hide Message' : 'Show Message'}
      </button>
      {showMessage && <p>This message is being toggled with React state!</p>}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <WelcomeMessage name="Comfort Chapa" />
      <ToggleMessage />
    </div>
  );
}