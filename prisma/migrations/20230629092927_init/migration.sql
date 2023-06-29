-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "products" INTEGER[],
    "totalPrice" INTEGER,
    "user" INTEGER,
    "userEmail" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
