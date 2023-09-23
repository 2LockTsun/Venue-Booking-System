import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// This API endpoint is used to get all staffs

export default async function handler(req, res) {
  // If the request method is not GET, return 405 Method Not Allow
  if (req.method != 'GET' && req.method != 'PUT') return res.status(405).json({ status: 405, message: 'Method Not Allow' })

  // If the request method is GET and an id is provided, return the staff with the id
  // If the request method is PUT and an id is provided, update the staff with the id
  const id = req.query.id
  if (id && req.method === 'GET') return res.status(200).json({ status: 200, staff: await prisma.staff.findUnique({ where: { id: Number(id) } }) })
  if (id && req.method === 'PUT') {
    const { password } = req.body
    if (!password) return res.status(400).json({ status: 400, message: 'Bad Request' })
    return res.status(200).json({ status: 200, staff: await prisma.staff.update({ where: { id: Number(id) }, data: { password } }) })
  }

  // If the request method is GET but no id is provided, return 403 Forbidden
  return res.status(403).json({ status: 403, message: 'Forbidden' })
}