/*
  Warnings:

  - You are about to alter the column `walkthroughTime` on the `Stage` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/

-- AlterTable
ALTER TABLE "Stage" ALTER COLUMN "walkthroughTime" SET DATA TYPE DOUBLE PRECISION;