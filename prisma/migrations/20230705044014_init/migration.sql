-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "sid" TEXT,
    "isActive" BOOLEAN,
    "balance" TEXT,
    "age" INTEGER,
    "name" TEXT,
    "gender" TEXT,
    "company" TEXT,
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
