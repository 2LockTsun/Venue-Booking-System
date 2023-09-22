import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if(req.method !== 'DELETE' && req.method !== 'PUT') return res.status(405).json({ status: 405, message: 'Method Not Allow' })
  if(req.method === 'DELETE') return res.status(200).json({status: 200, data: await prisma.booking.delete({where: {id: Number(req.query.id)}})})
  return res.status(200).json({
    status: 200,
    message: await prisma.booking.upsert({
      where: {id: Number(req.query.id)},
      update: {},
      create: {}
    })
  })
}