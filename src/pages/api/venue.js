import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method != 'GET') return res.status(405).json({ status: 405, message: 'Method Not Allow' })
  return res.status(200).json({ status: 200, venues: await prisma.venue.findMany()})
}