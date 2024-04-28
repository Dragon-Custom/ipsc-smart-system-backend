-- DropForeignKey
ALTER TABLE "ProErrorsStore" DROP CONSTRAINT "ProErrorsStore_scoreId_fkey";

-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_scorelistId_fkey";

-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_shooterId_fkey";

-- DropForeignKey
ALTER TABLE "Scorelist" DROP CONSTRAINT "Scorelist_scoreboardId_fkey";

-- DropForeignKey
ALTER TABLE "Scorelist" DROP CONSTRAINT "Scorelist_stageId_fkey";

-- DropForeignKey
ALTER TABLE "Stage" DROP CONSTRAINT "Stage_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Stage" DROP CONSTRAINT "Stage_shooterId_fkey";

-- AlterTable


-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_shooterId_fkey" FOREIGN KEY ("shooterId") REFERENCES "Shooter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scorelist" ADD CONSTRAINT "Scorelist_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scorelist" ADD CONSTRAINT "Scorelist_scoreboardId_fkey" FOREIGN KEY ("scoreboardId") REFERENCES "Scoreboard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_shooterId_fkey" FOREIGN KEY ("shooterId") REFERENCES "Shooter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_scorelistId_fkey" FOREIGN KEY ("scorelistId") REFERENCES "Scorelist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProErrorsStore" ADD CONSTRAINT "ProErrorsStore_scoreId_fkey" FOREIGN KEY ("scoreId") REFERENCES "Score"("id") ON DELETE CASCADE ON UPDATE CASCADE;
