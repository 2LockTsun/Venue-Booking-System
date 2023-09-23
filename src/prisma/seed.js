const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// This script is used to seed the database with initial data

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
    await prisma.venue.upsert({
        where: {roomCode: 'IS',},
        update: {},
        create: {roomCode: 'IS', roomName: 'IS Lab'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'P',},
        update: {},
        create: {roomCode: 'P', roomName: 'Physics Lab'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'C',},
        update: {},
        create: {roomCode: 'C', roomName: 'Chemistry Lab'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'B',},
        update: {},
        create: {roomCode: 'B', roomName: 'Biology Lab'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'H',},
        update: {},
        create: {roomCode: 'H', roomName: 'Hall'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'DT',},
        update: {},
        create: {roomCode: 'DT', roomName: 'DT Room'},
    })
    await prisma.venue.upsert({
        where: {roomCode: 'FT',},
        update: {},
        create: {roomCode: 'FT', roomName: 'Fitness Room'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '1A',},
        update: {},
        create: {roomCode: '1A', roomName: '1A'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '1B',},
        update: {},
        create: {roomCode: '1B', roomName: '1B'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '1C',},
        update: {},
        create: {roomCode: '1C', roomName: '1C'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '1D',},
        update: {},
        create: {roomCode: '1D', roomName: '1D'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '2A',},
        update: {},
        create: {roomCode: '2A', roomName: '2A'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '2B',},
        update: {},
        create: {roomCode: '2B', roomName: '2B'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '2C',},
        update: {},
        create: {roomCode: '2C', roomName: '2C'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '2D',},
        update: {},
        create: {roomCode: '2D', roomName: '2D'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '3A',},
        update: {},
        create: {roomCode: '3A', roomName: '3A'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '3B',},
        update: {},
        create: {roomCode: '3B', roomName: '3B'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '3C',},
        update: {},
        create: {roomCode: '3C', roomName: '3C'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '3D',},
        update: {},
        create: {roomCode: '3D', roomName: '3D'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '4A',},
        update: {},
        create: {roomCode: '4A', roomName: '4A'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '4B',},
        update: {},
        create: {roomCode: '4B', roomName: '4B'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '4C',},
        update: {},
        create: {roomCode: '4C', roomName: '4C'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '4D',},
        update: {},
        create: {roomCode: '4D', roomName: '4D'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '5A',},
        update: {},
        create: {roomCode: '5A', roomName: '5A'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '5B',},
        update: {},
        create: {roomCode: '5B', roomName: '5B'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '5C',},
        update: {},
        create: {roomCode: '5C', roomName: '5C'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '5D',},
        update: {},
        create: {roomCode: '5D', roomName: '5D'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '6A',},
        update: {},
        create: {roomCode: '6A', roomName: '6A'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '6B',},
        update: {},
        create: {roomCode: '6B', roomName: '6B'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '6C',},
        update: {},
        create: {roomCode: '6C', roomName: '6C'},
    })
    await prisma.venue.upsert({
        where: {roomCode: '6D',},
        update: {},
        create: {roomCode: '6D', roomName: '6D'},
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

    await prisma.staff.upsert({
        where: { staffInitial: 'T1' },
        update: {},
        create: {
            admin: false,
            name: 'Test 1',
            email: 'test1@test.com',
            password: '123456',
            staffInitial: 'T1',
        }
    })
    await prisma.staff.upsert({
        where: { staffInitial: 'T2' },
        update: {},
        create: {
            admin: false,
            name: 'Test 2',
            email: 'test2@test.com',
            password: '123456',
            staffInitial: 'T2',
        }
    })
    await prisma.staff.upsert({
        where: { staffInitial: 'T3' },
        update: {},
        create: {
            admin: false,
            name: 'Test 3',
            email: 'test3@test.com',
            password: '123456',
            staffInitial: 'T3',
        }
    })
    await prisma.staff.upsert({
        where: { staffInitial: 'T4' },
        update: {},
        create: {
            admin: false,
            name: 'Test 4',
            email: 'test4@test.com',
            password: '123456',
            staffInitial: 'T4',
        }
    })
    await prisma.staff.upsert({
        where: { staffInitial: 'T5' },
        update: {},
        create: {
            admin: false,
            name: 'Test 5',
            email: 'test5@test.com',
            password: '123456',
            staffInitial: 'T5',
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