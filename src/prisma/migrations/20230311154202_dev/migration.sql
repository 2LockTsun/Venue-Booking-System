-- CreateTable
CREATE TABLE "Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roomCode" TEXT NOT NULL,
    "staffInitial" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "bookingDate" DATETIME NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" DATETIME NOT NULL,
    CONSTRAINT "Booking_staffInitial_fkey" FOREIGN KEY ("staffInitial") REFERENCES "Staff" ("staffInitial") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Booking_roomCode_fkey" FOREIGN KEY ("roomCode") REFERENCES "Venue" ("roomCode") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "staffInitial" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Venue" (
    "roomCode" TEXT NOT NULL PRIMARY KEY,
    "roomName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Staff_email_key" ON "Staff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_staffInitial_key" ON "Staff"("staffInitial");
