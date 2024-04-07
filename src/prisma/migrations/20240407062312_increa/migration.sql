/*
  Warnings:

  - The primary key for the `TagOnStage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `TagOnStage` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "TagOnStage_id_key";

-- AlterTable
CREATE SEQUENCE proerrorobjects_id_seq;
ALTER TABLE "ProErrorObjects" ALTER COLUMN "id" SET DEFAULT nextval('proerrorobjects_id_seq');
ALTER SEQUENCE proerrorobjects_id_seq OWNED BY "ProErrorObjects"."id";

-- AlterTable
CREATE SEQUENCE score_id_seq;
ALTER TABLE "Score" ALTER COLUMN "id" SET DEFAULT nextval('score_id_seq');
ALTER SEQUENCE score_id_seq OWNED BY "Score"."id";

-- AlterTable

-- AlterTable
ALTER TABLE "TagOnStage" DROP CONSTRAINT "TagOnStage_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "TagOnStage_pkey" PRIMARY KEY ("tagId", "stageId");
