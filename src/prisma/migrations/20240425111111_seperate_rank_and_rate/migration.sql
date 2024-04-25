/*
  Warnings:

  - You are about to drop the column `rating` on the `Ranking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ranking" DROP COLUMN "rating";

-- AlterTable


-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "shooterId" INTEGER NOT NULL,
    "rating" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rating_id_key" ON "Rating"("id");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_shooterId_fkey" FOREIGN KEY ("shooterId") REFERENCES "Shooter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
