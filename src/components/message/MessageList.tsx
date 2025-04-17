"use client"
import { useState, useEffect } from 'react';

interface Message {
  _id: string;
  user: string;
  text: string;
}

export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('/api/message');
      const data = await res.json();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Messages</h2>
      <ul className="space-y-4">
        {messages.map((message) => (
          <li key={message._id} className="p-4 border border-gray-300 rounded-lg shadow-sm">
            <strong className="text-lg font-semibold">{message.user}:</strong>
            <p className="mt-2 text-gray-600">{message.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
