// src/components/MessageList.js
import React from 'react';
import Message from './Message';

function MessageList({ messages }) {
  return (
    <div style={{ margin: '10px 0' }}>
      {messages.map((msg, idx) => (
        <Message key={idx} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}

export default MessageList;
