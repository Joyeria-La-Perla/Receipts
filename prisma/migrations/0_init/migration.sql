-- CreateTable
CREATE TABLE "PaymentReceipt" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dateReceived" TEXT NOT NULL,
    "datePromised" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "cash" BOOLEAN NOT NULL,
    "card" BOOLEAN NOT NULL,
    "weekly" BOOLEAN NOT NULL,
    "monthly" BOOLEAN NOT NULL,
    "willCall" BOOLEAN NOT NULL,
    "mail" BOOLEAN NOT NULL,
    "cashPrice" INTEGER NOT NULL,
    "cardPrice" INTEGER NOT NULL,
    "weeklyPrice" INTEGER NOT NULL,
    "monthlyPrice" INTEGER NOT NULL,
    "willCallPrice" INTEGER NOT NULL,
    "mailPrice" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "purchaseDates" TEXT[],

    CONSTRAINT "PaymentReceipt_pkey" PRIMARY KEY ("id")
);

