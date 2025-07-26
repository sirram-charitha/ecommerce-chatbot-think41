// src/components/Message.js
import React from 'react';

function Message({ sender, text }) {
  const isUser = sender === 'user';
  return (
    <div style={{
      textAlign: isUser ? 'right' : 'left',
      margin: '5px',
      padding: '10px',
      backgroundColor: isUser ? '#dcf8c6' : '#f1f0f0',
      borderRadius: '8px',
      maxWidth: '60%',
      alignSelf: isUser ? 'flex-end' : 'flex-start'
    }}>
      {text}
    </div>
  );
}

export default Message;
