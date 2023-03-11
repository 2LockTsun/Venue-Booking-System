import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if(req.method === 'POST') {
        if (!req.body) res.status(400).json({ status: 400, message: 'Bad Request' })
        else {
            const data = await prisma.booking.create(req.body).catch((err) => console.error(err))
            res.status(200).json({ status: 200, message: data })
        }
    }
    else if(req.method === 'GET') res.status(200).json({status: 200, message: await prisma.booking.findMany()})
    else res.status(405).json({ status: 405, message: 'Method Not Allow' })
}