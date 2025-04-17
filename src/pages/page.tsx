import MessageForm from '@/components/message/MessageForm';
import MessageList from '@/components/message/MessageList';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Message Board</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <MessageForm />
        <MessageList />
      </div>
    </div>
  );
}
