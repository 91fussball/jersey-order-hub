-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "backNumber" INTEGER NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "jerseyType" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "phoneNumber" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("backNumber", "createdAt", "id", "isPaid", "jerseyType", "name", "phoneNumber", "size", "updatedAt") SELECT "backNumber", "createdAt", "id", "isPaid", "jerseyType", "name", "phoneNumber", "size", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
