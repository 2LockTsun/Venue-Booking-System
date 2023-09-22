import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if(req.method !== 'POST' && req.method !== 'GET') return res.status(405).json({ status: 405, message: 'Method Not Allow' })
    if(req.method === 'POST') {
        const { purpose, bookingDate, bookingPeriod, roomCode, staffInitial } = req.body
        if(!purpose || !bookingDate || !bookingPeriod || !roomCode || !staffInitial) return res.status(400).json({ status: 400, message: 'Bad Request' })
        
        const count = await prisma.booking.count({where: {staffInitial, bookingDate: {gte: new Date()}}})
        if(count >= 4) return res.status(403).json({ status: 403, message: 'Forbidden' })

        const bookings = await prisma.booking.findMany({where: {bookingDate, bookingPeriod, roomCode}})
        if(bookings.length > 0) return res.status(409).json({ status: 409, message: 'Conflict' })
        
        return res.status(200).json({ status: 200, booking: await prisma.booking.create({ data: req.body }) })
    }

    const bookingId = Number(req.query.bookingId)
    const userId = Number(req.query.userId)
    if(!bookingId && !userId) return res.status(200).json({status: 200, bookings: await prisma.booking.findMany({where: {}, include: {Staff: true, Venue: true}})})
    if(bookingId) return res.status(200).json({status: 200, booking: await prisma.booking.findUnique({where: {id: bookingId}, include: {Staff: true, Venue: true}})})
    if(userId) return res.status(200).json({status: 200, bookings: await prisma.booking.findMany({where: {Staff: {id: userId}}, include: {Staff: true, Venue: true}})})
    
}