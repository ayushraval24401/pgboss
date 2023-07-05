-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "isActive" BOOLEAN,
    "age" INTEGER,
    "name" TEXT,
    "gender" TEXT,
    "company" TEXT,
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);
