/*
  Warnings:

  - Made the column `stageId` on table `Scorelist` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable

-- AlterTable
ALTER TABLE "Scorelist" ALTER COLUMN "stageId" SET NOT NULL;
