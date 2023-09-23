import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  // * If the request method is not DELETE or PUT, return 405 Method Not Allow
  if(req.method !== 'DELETE' && req.method !== 'PUT') return res.status(405).json({ status: 405, message: 'Method Not Allow' })

  // * If the request method is DELETE, delete the booking with the id
  if(req.method === 'DELETE') return res.status(200).json({status: 200, data: await prisma.booking.delete({where: {id: Number(req.query.id)}})})

  // * If the request method is PUT, update the booking with the id
  return res.status(200).json({
    status: 200,
    message: await prisma.booking.update({
      where: {id: Number(req.query.id)},
      data: req.body
    })
  })
}