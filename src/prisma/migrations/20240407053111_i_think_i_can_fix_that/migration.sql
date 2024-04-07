/*
  Warnings:

  - You are about to drop the column `stageTagId` on the `Stage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stage" DROP CONSTRAINT "Stage_stageTagId_fkey";

-- AlterTable
ALTER TABLE "Stage" DROP COLUMN "stageTagId";
-- CreateTable
CREATE TABLE "TagOnStage" (
    "id" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "stageId" INTEGER NOT NULL,

    CONSTRAINT "TagOnStage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TagOnStage_id_key" ON "TagOnStage"("id");

-- AddForeignKey
ALTER TABLE "TagOnStage" ADD CONSTRAINT "TagOnStage_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "StageTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagOnStage" ADD CONSTRAINT "TagOnStage_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
