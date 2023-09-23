import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  // If the request method is not POST, return 405 Method Not Allow
  if (req.method != 'POST') return res.status(405).json({ message: 'Method Not Allow' })

  // If the request body is not email and password, return 400 Bad Request
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ message: 'Bad Request' })

  // If the email and password is not match, return 401 Unauthorized
  const target = await prisma.staff.findUnique({  where: { email: email } })
  if (!target) return res.status(401).json({ message: 'Unauthorized' })
  if (target.password != password) return res.status(401).json({ message: 'Unauthorized' })
  return res.status(200).json({ message: 'OK', user: target})
}