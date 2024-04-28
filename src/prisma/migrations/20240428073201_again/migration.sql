/*
  Warnings:

  - Made the column `scoreboardId` on table `Scorelist` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable

ALTER TABLE "Scorelist" ALTER COLUMN "scoreboardId" SET NOT NULL;

