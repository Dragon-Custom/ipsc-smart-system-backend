/*
  Warnings:

  - The primary key for the `TagOnStage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `TagOnStage` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable

-- AlterTable
ALTER TABLE "TagOnStage" DROP CONSTRAINT "TagOnStage_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "TagOnStage_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "TagOnStage_id_key" ON "TagOnStage"("id");
