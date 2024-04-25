/*
  Warnings:

  - You are about to alter the column `hitFactor` on the `Score` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `score` on the `Score` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Score"
ALTER COLUMN "hitFactor" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "score" SET DATA TYPE INTEGER;

-- AlterTable
