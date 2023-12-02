/*
  Warnings:

  - You are about to drop the column `backNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isPaid` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `jerseyType` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `back_number` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jersey_type` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "back_number" INTEGER NOT NULL,
    "is_paid" BOOLEAN NOT NULL DEFAULT false,
    "jersey_type" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "phone_number" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("id", "name", "size") SELECT "id", "name", "size" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
