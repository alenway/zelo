import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'Hello from Next.js!' })
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
