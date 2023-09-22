/*
  Warnings:

  - Added the required column `bookingPeriod` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roomCode" TEXT NOT NULL,
    "staffInitial" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "bookingPeriod" TEXT NOT NULL,
    "bookingDate" DATETIME NOT NULL,
    "createDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateDate" DATETIME NOT NULL,
    CONSTRAINT "Booking_staffInitial_fkey" FOREIGN KEY ("staffInitial") REFERENCES "Staff" ("staffInitial") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Booking_roomCode_fkey" FOREIGN KEY ("roomCode") REFERENCES "Venue" ("roomCode") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Booking" ("UpdateDate", "bookingDate", "createDate", "id", "purpose", "roomCode", "staffInitial") SELECT "UpdateDate", "bookingDate", "createDate", "id", "purpose", "roomCode", "staffInitial" FROM "Booking";
DROP TABLE "Booking";
ALTER TABLE "new_Booking" RENAME TO "Booking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
