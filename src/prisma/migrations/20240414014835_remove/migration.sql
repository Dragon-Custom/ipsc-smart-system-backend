/*
  Warnings:

  - Made the column `poppers` on table `Score` required. This step will fail if there are existing NULL values in that column.
  - Made the column `scorelistId` on table `Score` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_scorelistId_fkey";

-- AlterTable
ALTER TABLE "Score" ALTER COLUMN "poppers" SET NOT NULL,
ALTER COLUMN "scorelistId" SET NOT NULL;

-- AlterTable

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_scorelistId_fkey" FOREIGN KEY ("scorelistId") REFERENCES "Scorelist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
