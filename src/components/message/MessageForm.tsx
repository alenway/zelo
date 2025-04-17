"use client"
import { useState, FormEvent } from 'react';

interface MessageData {
  user: string;
  text: string;
}

export default function MessageForm() {
  const [user, setUser] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const messageData: MessageData = { user, text };
    console.log(user,text);


    const res = await fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    });

    const data = await res.json();

    if (res.status === 201) {
      console.log('Message added:', data);
      setUser('');
      setText('');
    } else {
      console.log('Error adding message:', data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg">
      <div>
        <label htmlFor="user" className="block text-lg font-semibold text-gray-700">User:</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      <div>
        <label htmlFor="text" className="block text-lg font-semibold text-gray-700">Message:</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit Message
        </button>
      </div>
    </form>
  );
}
