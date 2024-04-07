/*
  Warnings:

  - The `scorelistId` column on the `Score` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Scorelist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Scorelist` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_scorelistId_fkey";

-- AlterTable
ALTER TABLE "Score" DROP COLUMN "scorelistId",
ADD COLUMN     "scorelistId" INTEGER;

-- AlterTable
ALTER TABLE "Scorelist" DROP CONSTRAINT "Scorelist_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Scorelist_pkey" PRIMARY KEY ("id");

-- AlterTable

-- CreateIndex
CREATE UNIQUE INDEX "Scorelist_id_key" ON "Scorelist"("id");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_scorelistId_fkey" FOREIGN KEY ("scorelistId") REFERENCES "Scorelist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
