import React from 'react';
import InnovativeBackground from './components/Background/InnovativeBackground';

function TestBackground() {
  return (
    <InnovativeBackground>
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        color: 'white', 
        textAlign: 'center', 
        padding: '50px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ background: 'rgba(0,0,0,0.7)', padding: '40px', borderRadius: '20px' }}>
          <h1>Innovative Background Test</h1>
          <p>If you can see this text and moving particles behind it, the background is working!</p>
        </div>
      </div>
    </InnovativeBackground>
  );
}

export default TestBackground;
