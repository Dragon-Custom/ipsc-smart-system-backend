-- AlterTable
ALTER TABLE "ProErrorObjects" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "proerrorobjects_id_seq";

-- AlterTable
ALTER TABLE "ProErrorsStore" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "proerrorsstore_id_seq";

-- AlterTable
ALTER TABLE "Score" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "score_id_seq";

-- AlterTable

-- AlterTable
ALTER TABLE "TagOnStage" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "TagOnStage_id_seq";
