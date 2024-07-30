import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req = NextApiRequest, res = NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (email === 'user@example.com' && password === 'password') {
      res.status(200).json({ token: 'mock-token', user: { email } });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
