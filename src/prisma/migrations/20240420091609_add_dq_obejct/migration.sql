-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "dqObjectsId" INTEGER;

-- CreateTable
CREATE TABLE "DqObjects" (
    "id" SERIAL NOT NULL,
    "index" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "DqObjects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DqObjects_id_key" ON "DqObjects"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DqObjects_index_key" ON "DqObjects"("index");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_dqObjectsId_fkey" FOREIGN KEY ("dqObjectsId") REFERENCES "DqObjects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
