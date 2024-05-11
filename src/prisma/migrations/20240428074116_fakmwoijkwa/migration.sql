/*
  Warnings:

  - You are about to drop the `ProErrorObjects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProErrorsStore" DROP CONSTRAINT "ProErrorsStore_proErrorObjectsId_fkey";

-- AlterTable


-- DropTable
DROP TABLE "ProErrorObjects";

-- CreateTable
CREATE TABLE "ProErrorObject" (
    "id" SERIAL NOT NULL,
    "index" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ProErrorObject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProErrorObject_id_key" ON "ProErrorObject"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProErrorObject_index_key" ON "ProErrorObject"("index");

-- AddForeignKey
ALTER TABLE "ProErrorsStore" ADD CONSTRAINT "ProErrorsStore_proErrorObjectsId_fkey" FOREIGN KEY ("proErrorObjectsId") REFERENCES "ProErrorObject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
