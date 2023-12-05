-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "back_number" INTEGER NOT NULL DEFAULT 0,
    "is_paid" BOOLEAN NOT NULL DEFAULT false,
    "jersey_type" TEXT NOT NULL DEFAULT 'NON-GK',
    "jersey_name" TEXT NOT NULL DEFAULT '-',
    "name" TEXT NOT NULL DEFAULT '',
    "payment" INTEGER NOT NULL DEFAULT 0,
    "phone_number" TEXT NOT NULL,
    "longsleeve" BOOLEAN NOT NULL DEFAULT false,
    "size" TEXT NOT NULL DEFAULT 'L',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_orders" ("back_number", "created_at", "id", "is_paid", "jersey_name", "jersey_type", "longsleeve", "name", "payment", "phone_number", "size", "updated_at") SELECT "back_number", "created_at", "id", "is_paid", "jersey_name", "jersey_type", "longsleeve", "name", "payment", "phone_number", "size", "updated_at" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
