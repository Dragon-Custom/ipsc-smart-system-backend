/*
  Warnings:

  - Made the column `scoreId` on table `ProErrorsStore` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ProErrorsStore" ALTER COLUMN "scoreId" SET NOT NULL;

-- AlterTable
