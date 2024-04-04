/*
  Warnings:

  - Added the required column `stageType` to the `Stage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stage" ADD COLUMN     "stageType" "StageType" NOT NULL GENERATED ALWAYS AS (
  case when (papers * 2 + poppers) <= 12 then "StageType"'Short' else
  case when (papers * 2 + poppers) <= 24 then "StageType"'Medium' else
  case when (papers * 2 + poppers) <= 18 then "StageType"'Long' else "StageType"'Unsanctioned' end end end) STORED;