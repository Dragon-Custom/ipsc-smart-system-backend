/*
  Warnings:

  - You are about to drop the column `stageId` on the `StageTag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "StageTag" DROP CONSTRAINT "StageTag_stageId_fkey";

-- AlterTable

-- AlterTable
ALTER TABLE "StageTag" DROP COLUMN "stageId";

-- CreateTable
CREATE TABLE "TagsOnStages" (
    "id" SERIAL NOT NULL,
    "tagId" INTEGER NOT NULL,
    "stageId" INTEGER NOT NULL,

    CONSTRAINT "TagsOnStages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TagsOnStages_id_key" ON "TagsOnStages"("id");

-- AddForeignKey
ALTER TABLE "TagsOnStages" ADD CONSTRAINT "TagsOnStages_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "StageTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagsOnStages" ADD CONSTRAINT "TagsOnStages_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
