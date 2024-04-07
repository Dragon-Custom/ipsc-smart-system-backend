-- DropForeignKey
ALTER TABLE "TagOnStage" DROP CONSTRAINT "TagOnStage_stageId_fkey";

-- DropForeignKey
ALTER TABLE "TagOnStage" DROP CONSTRAINT "TagOnStage_tagId_fkey";

-- AlterTable

-- AddForeignKey
ALTER TABLE "TagOnStage" ADD CONSTRAINT "TagOnStage_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "StageTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagOnStage" ADD CONSTRAINT "TagOnStage_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
