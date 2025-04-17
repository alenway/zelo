import dbConnect from '@/lib/mongodb';
import Message from '@/models/Message';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { user, text } = req.body;
    const message = await Message.create({ user, text });
    return res.status(201).json(message);
  }

  if (req.method === 'GET') {
    const messages = await Message.find({});
    return res.status(200).json(messages);
  }

  res.status(405).end(); // Method Not Allowed
}
