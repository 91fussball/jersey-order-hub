/*
  Warnings:

  - Added the required column `payment` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "back_number" INTEGER NOT NULL DEFAULT 0,
    "is_paid" BOOLEAN NOT NULL DEFAULT false,
    "jersey_type" TEXT NOT NULL DEFAULT 'NON-GK',
    "name" TEXT NOT NULL DEFAULT '',
    "payment" INTEGER NOT NULL,
    "phone_number" TEXT NOT NULL,
    "size" TEXT NOT NULL DEFAULT 'L',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("back_number", "created_at", "id", "is_paid", "jersey_type", "name", "phone_number", "size", "updated_at") SELECT "back_number", "created_at", "id", "is_paid", "jersey_type", "name", "phone_number", "size", "updated_at" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
