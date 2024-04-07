-- AlterTable
CREATE SEQUENCE proerrorobjects_id_seq;
ALTER TABLE "ProErrorObjects" ALTER COLUMN "id" SET DEFAULT nextval('proerrorobjects_id_seq');
ALTER SEQUENCE proerrorobjects_id_seq OWNED BY "ProErrorObjects"."id";

-- AlterTable
CREATE SEQUENCE proerrorsstore_id_seq;
ALTER TABLE "ProErrorsStore" ALTER COLUMN "id" SET DEFAULT nextval('proerrorsstore_id_seq');
ALTER SEQUENCE proerrorsstore_id_seq OWNED BY "ProErrorsStore"."id";

-- AlterTable
CREATE SEQUENCE score_id_seq;
ALTER TABLE "Score" ALTER COLUMN "id" SET DEFAULT nextval('score_id_seq');
ALTER SEQUENCE score_id_seq OWNED BY "Score"."id";

-- AlterTable

-- AlterTable
CREATE SEQUENCE tagonstage_id_seq;
ALTER TABLE "TagOnStage" ADD COLUMN     "flag" INTEGER DEFAULT 0,
ALTER COLUMN "id" SET DEFAULT nextval('tagonstage_id_seq');
ALTER SEQUENCE tagonstage_id_seq OWNED BY "TagOnStage"."id";
