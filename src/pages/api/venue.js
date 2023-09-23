import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// * This API endpoint is used to access all venues

export default async function handler(req, res) {
  
  // * If the request method is not GET, return 405 Method Not Allow
  if (req.method != 'GET') return res.status(405).json({ status: 405, message: 'Method Not Allow' })

  // * If the request method is GET, return all venues
  return res.status(200).json({ status: 200, venues: await prisma.venue.findMany()})
}