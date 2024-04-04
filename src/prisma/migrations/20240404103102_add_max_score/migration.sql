/*
  Warnings:

  - Added the required column `maxScore` to the `Stage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stage" ADD COLUMN "maxScore" INTEGER NOT NULL GENERATED ALWAYS AS (papers * 2 * 5 + poppers * 5) STORED;
