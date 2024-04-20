/*
  Warnings:

  - Added the required column `category` to the `DqObjects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DqObjects" ADD COLUMN     "category" TEXT NOT NULL;

