-- DropForeignKey
ALTER TABLE "Ranking" DROP CONSTRAINT "Ranking_shooterId_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_shooterId_fkey";


-- AddForeignKey
ALTER TABLE "Ranking" ADD CONSTRAINT "Ranking_shooterId_fkey" FOREIGN KEY ("shooterId") REFERENCES "Shooter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_shooterId_fkey" FOREIGN KEY ("shooterId") REFERENCES "Shooter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
