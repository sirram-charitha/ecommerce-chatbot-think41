// src/components/ChatWindow.js
import React, { useState } from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';

function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const newMsg = { sender: 'user', text };
    setMessages([...messages, newMsg]);

    // Send to backend
    fetch('http://127.0.0.1:8000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: 'u001', message: text }),
    })
    .then(res => res.json())
    .then(data => {
      const botMsg = { sender: 'ai', text: data.response };
      setMessages(prev => [...prev, botMsg]);
    });
  };

  return (
    <div>
      <MessageList messages={messages} />
      <UserInput onSend={sendMessage} />
    </div>
  );
}

export default ChatWindow;
