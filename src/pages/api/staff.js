import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method != 'GET' && req.method != 'PUT') return res.status(405).json({ status: 405, message: 'Method Not Allow' })
  const id = req.query.id
  if (id && req.method === 'GET') return res.status(200).json({ status: 200, staff: await prisma.staff.findUnique({ where: { id: Number(id) } }) })
  if (id && req.method === 'PUT') {
    const { password } = req.body
    if (!password) return res.status(400).json({ status: 400, message: 'Bad Request' })
    return res.status(200).json({ status: 200, staff: await prisma.staff.update({ where: { id: Number(id) }, data: { password } }) })
  }
  return res.status(403).json({ status: 403, message: 'Forbidden' })
}