import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method != 'POST') return res.status(405).json({ message: 'Method Not Allow' })
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ message: 'Bad Request' })

  const target = await prisma.staff.findUnique({  where: { email: email } })
  if (!target) return res.status(401).json({ message: 'Unauthorized' })
  if (target.password != password) return res.status(401).json({ message: 'Unauthorized' })
  return res.status(200).json({ message: 'OK', user: target})
}