import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if(req.method === 'DELETE') {
        res.status(200).json({status: 200, data: await prisma.booking.delete({where: {id: Number(req.query.id)}})})
    }
    else if(req.method === 'GET') res.status(200).json({status: 200, message: await prisma.booking.findMany({where: {id: Number(req.query.id)}})})
    else res.status(405).json({ status: 405, message: 'Method Not Allow' })
}