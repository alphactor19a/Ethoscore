import React from 'react';
import geminiImage from './Gemini Generated Image.png';

export default function PlaceholderPng() {
  return (
    <div 
      style={{
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '8px',
        width: '100%',
        height: '100%'
      }}
      data-name="placeholder.png"
      data-node-id="1:476"
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          borderRadius: '8px'
        }}
      >
        <img 
          alt="" 
          style={{
            position: 'absolute',
            left: 0,
            maxWidth: 'none',
            width: '100%',
            height: '100%',
            top: 0,
            objectFit: 'cover'
          }} 
          src={geminiImage} 
        />
      </div>
    </div>
  );
}

