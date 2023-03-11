import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method != 'GET') res.status(405).json({ status: 405, message: 'Method Not Allow' })
    const data = await prisma.venue.findMany({where: {}, include:{ Booking: true }})
    res.status(200).json({ status: 200, data: data})
}