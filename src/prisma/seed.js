const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

    await prisma.venue.upsert({
        where: {roomCode: 'CH',},
        update: {},
        create: {roomCode: 'CH', roomName: 'Cyber Hub'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'I', },
        update: {},
        create: {roomCode: 'I', roomName: 'Inno Lab'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'SC',},
        update: {},
        create: {roomCode: 'SC', roomName: 'STEAM Cave'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'IL',},
        update: {},
        create: {roomCode: 'IL', roomName: 'Idea Lounge'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'MC',},
        update: {},
        create: {roomCode: 'MC', roomName: 'MMLC'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'GP',},
        update: {},
        create: {roomCode: 'GP', roomName: 'GP Room'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'A', },
        update: {},
        create: {roomCode: 'A', roomName: 'Art Room'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'M', },
        update: {},
        create: {roomCode: 'M', roomName: 'Music Room'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'LT',},
        update: {},
        create: {roomCode: 'LT', roomName: 'Lecture Theatre'},
    })


    await prisma.staff.upsert({
        where: { staffInitial: 'ADM' },
        update: {},
        create: {
            admin: true,
            name: 'Admin',
            email: 'admin@dlthk.games',
            password: 'admin',
            staffInitial: 'ADM',
        }
    })

    await prisma.staff.upsert({
        where: { staffInitial: 'USR' },
        update: {},
        create: {
            admin: false,
            name: 'User',
            email: 'user@dlthk.games',
            password: 'user',
            staffInitial: 'USR',
        }
    })

    await prisma.staff.upsert({
        where: { staffInitial: 'KA' },
        update: {},
        create: {
            admin: false,
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
            admin: false,
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