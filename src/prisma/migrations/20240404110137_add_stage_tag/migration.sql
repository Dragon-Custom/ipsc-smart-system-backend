-- AlterTable


-- CreateTable
CREATE TABLE "StageTag" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "stageId" INTEGER,

    CONSTRAINT "StageTag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StageTag_id_key" ON "StageTag"("id");

-- AddForeignKey
ALTER TABLE "StageTag" ADD CONSTRAINT "StageTag_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
