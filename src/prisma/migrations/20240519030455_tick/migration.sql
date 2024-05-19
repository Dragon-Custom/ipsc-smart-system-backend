/*
  Warnings:

  - Added the required column `tick` to the `Ranking` table without a default value. This is not possible if the table is not empty.
  - Made the column `rank` on table `Ranking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rating` on table `Rating` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Ranking" ADD COLUMN     "tick" INTEGER NOT NULL,
ALTER COLUMN "rank" SET NOT NULL;

-- AlterTable
ALTER TABLE "Rating" ALTER COLUMN "rating" SET NOT NULL;


