/*
  Warnings:

  - You are about to drop the `TagsOnStages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagsOnStages" DROP CONSTRAINT "TagsOnStages_stageId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnStages" DROP CONSTRAINT "TagsOnStages_tagId_fkey";

-- AlterTable
ALTER TABLE "Stage" ADD COLUMN     "stageTagId" INTEGER;
-- DropTable
DROP TABLE "TagsOnStages";

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_stageTagId_fkey" FOREIGN KEY ("stageTagId") REFERENCES "StageTag"("id") ON DELETE SET NULL ON UPDATE CASCADE;
