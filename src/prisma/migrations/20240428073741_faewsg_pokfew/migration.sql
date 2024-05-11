/*
  Warnings:

  - You are about to drop the `DqObjects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_dqObjectsId_fkey";

-- AlterTable
-- DropTable
DROP TABLE "DqObjects";

-- CreateTable
CREATE TABLE "DqObject" (
    "id" SERIAL NOT NULL,
    "index" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "DqObject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DqObject_id_key" ON "DqObject"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DqObject_index_key" ON "DqObject"("index");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_dqObjectsId_fkey" FOREIGN KEY ("dqObjectsId") REFERENCES "DqObject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
