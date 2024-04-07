-- AlterTable
CREATE SEQUENCE proerrorsstore_id_seq;
ALTER TABLE "ProErrorsStore" ALTER COLUMN "id" SET DEFAULT nextval('proerrorsstore_id_seq');
ALTER SEQUENCE proerrorsstore_id_seq OWNED BY "ProErrorsStore"."id";

-- AlterTable

-- AlterTable
CREATE SEQUENCE tagonstage_id_seq;
ALTER TABLE "TagOnStage" ALTER COLUMN "id" SET DEFAULT nextval('tagonstage_id_seq');
ALTER SEQUENCE tagonstage_id_seq OWNED BY "TagOnStage"."id";
