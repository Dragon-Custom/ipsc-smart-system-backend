/*
  Warnings:

  - You are about to drop the column `sizeX` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `sizeY` on the `Image` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "sizeX",
DROP COLUMN "sizeY";

-- AlterTable
