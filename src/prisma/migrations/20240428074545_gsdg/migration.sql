/*
  Warnings:

  - You are about to drop the column `proErrorObjectsId` on the `ProErrorsStore` table. All the data in the column will be lost.
  - You are about to drop the column `dqObjectsId` on the `Score` table. All the data in the column will be lost.
  - Added the required column `proErrorObjectId` to the `ProErrorsStore` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProErrorsStore" DROP CONSTRAINT "ProErrorsStore_proErrorObjectsId_fkey";

-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_dqObjectsId_fkey";

-- AlterTable
ALTER TABLE "ProErrorsStore" DROP COLUMN "proErrorObjectsId",
ADD COLUMN     "proErrorObjectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Score" DROP COLUMN "dqObjectsId",
ADD COLUMN     "dqObjectId" INTEGER;
-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_dqObjectId_fkey" FOREIGN KEY ("dqObjectId") REFERENCES "DqObject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProErrorsStore" ADD CONSTRAINT "ProErrorsStore_proErrorObjectId_fkey" FOREIGN KEY ("proErrorObjectId") REFERENCES "ProErrorObject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
