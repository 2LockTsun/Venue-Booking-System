const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    const venueData = [
        {roomCode: 'CH', roomName: 'Cyber Hab'},
        {roomCode: 'I', roomName: 'Inno Lab'},
        {roomCode: 'SC', roomName: 'STEAM Cave'},
        {roomCode: 'IL', roomName: 'Idea Lounge'},
        {roomCode: 'MC', roomName: 'MMLC'},
        {roomCode: 'GP', roomName: 'GP Room'},
        {roomCode: 'A', roomName: 'Art Room'},
        {roomCode: 'M', roomName: 'Music Room'},
        {roomCode: 'LT', roomName: 'Lecture Theatre'},
    ]

    await venueData.forEach((data) => prisma.venue.upsert({
        where: { roomCode: data.roomCode },
        update: {},
        create: { roomCode: data.roomCode, roomName: data.roomName }
    }))

    await prisma.staff.upsert({
        where: { staffInitial: 'ADM' },
        update: {},
        create: {
            admin: true,
            name: 'Admin',
            email: 'admin@cpu.edu.hk',
            password: 'admin',
            staffInitial: 'ADM',
        }
    })

    await prisma.staff.upsert({
        where: { staffInitial: 'KA' },
        update: {},
        create: {
            admin: true,
            name: 'Chan Ka Lun',
            email: 'ka@cpu.edu.hk',
            password: 'ka',
            staffInitial: 'KA',
        }
    })

    await prisma.staff.upsert({
        where: { staffInitial: 'YA' },
        update: {},
        create: {
            admin: true,
            email: 'ya@cpu.edu.hk',
            password: 'ya',
            staffInitial: 'YA',
        }
    })
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (err) => {
        console.error(err)
        await prisma.$disconnect()
        process.exit(1)
    })