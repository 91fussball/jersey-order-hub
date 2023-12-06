-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "back_number" INTEGER NOT NULL DEFAULT 0,
    "is_paid" BOOLEAN NOT NULL DEFAULT false,
    "jersey_type" TEXT NOT NULL DEFAULT 'NON-GK',
    "jersey_name" TEXT NOT NULL DEFAULT '-',
    "name" TEXT NOT NULL DEFAULT '',
    "payment" INTEGER NOT NULL DEFAULT 0,
    "phone_number" TEXT NOT NULL,
    "longsleeve" BOOLEAN NOT NULL DEFAULT false,
    "size" TEXT NOT NULL DEFAULT 'L',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);
