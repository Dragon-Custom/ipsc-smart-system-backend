/*
  Warnings:

  - You are about to drop the column `shooterId` on the `Stage` table. All the data in the column will be lost.
  - Added the required column `designerId` to the `Stage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Stage" DROP CONSTRAINT "Stage_shooterId_fkey";

-- AlterTable

-- AlterTable
ALTER TABLE "Stage" DROP COLUMN "shooterId",
ADD COLUMN     "designerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_designerId_fkey" FOREIGN KEY ("designerId") REFERENCES "Shooter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
