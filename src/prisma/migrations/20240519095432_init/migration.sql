-- CreateEnum
CREATE TYPE "Division" AS ENUM(
    'Standard',
    'Open',
    'Production',
    'ProductionOptics'
);

-- CreateEnum
CREATE TYPE "StageType" AS ENUM(
    'Short',
    'Medium',
    'Long',
    'Unsanctioned'
);

-- CreateEnum
CREATE TYPE "ScoreState" AS ENUM(
    'DidNotScore',
    'DidNotFinish',
    'DQ',
    'Scored'
);

-- CreateTable
CREATE TABLE "Shooter" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "division" "Division" NOT NULL,
    "email" TEXT NOT NULL,


CONSTRAINT "Shooter_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "Stage" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "papers" INTEGER NOT NULL,
    "poppers" INTEGER NOT NULL,
    "noshoots" INTEGER NOT NULL,
    "gunCondition" INTEGER NOT NULL,
    "designerId" INTEGER NOT NULL,
    "walkthroughTime" DOUBLE PRECISION NOT NULL,
    "minRounds" INTEGER NOT NULL GENERATED ALWAYS AS (papers * 2 + poppers) STORED,
    "maxScore" INTEGER NOT NULL GENERATED ALWAYS AS (papers * 2 * 5 + poppers * 5) STORED,
    "stageType" "StageType" NOT NULL GENERATED ALWAYS AS (
        case
            when (papers * 2 + poppers) <= 12 then "StageType" 'Short'
            else case
                when (papers * 2 + poppers) <= 24 then "StageType" 'Medium'
                else case
                    when (papers * 2 + poppers) <= 32 then "StageType" 'Long'
                    else "StageType" 'Unsanctioned'
                end
            end
        end
    ) STORED,
    "imageId" TEXT NOT NULL,


CONSTRAINT "Stage_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "StageTag" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,


CONSTRAINT "StageTag_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "TagOnStage" (
    "id" SERIAL NOT NULL,
    "tagId" INTEGER NOT NULL,
    "stageId" INTEGER NOT NULL,
    "flag" INTEGER DEFAULT 0,


CONSTRAINT "TagOnStage_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "Scoreboard" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,


CONSTRAINT "Scoreboard_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "Scorelist" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stageId" INTEGER NOT NULL,
    "scoreboardId" INTEGER NOT NULL,
    "rounds" INTEGER NOT NULL DEFAULT 0,


CONSTRAINT "Scorelist_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alphas" INTEGER NOT NULL DEFAULT 0,
    "charlies" INTEGER NOT NULL DEFAULT 0,
    "deltas" INTEGER NOT NULL DEFAULT 0,
    "misses" INTEGER NOT NULL DEFAULT 0,
    "noshoots" INTEGER NOT NULL DEFAULT 0,
    "poppers" INTEGER NOT NULL DEFAULT 0,
    "time" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "proErrorCount" INTEGER NOT NULL DEFAULT 0,
    "scorelistId" INTEGER NOT NULL,
    "shooterId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL GENERATED ALWAYS AS (
        (
            alphas * 5 + charlies * 3 + deltas - misses * 10 - noshoots * 10 + poppers * 5 - "proErrorCount" * 10
        )
    ) STORED,
    "hitFactor" DOUBLE PRECISION NOT NULL GENERATED ALWAYS AS (
        (
            alphas * 5 + charlies * 3 + deltas - misses * 10 - noshoots * 10 + poppers * 5 - "proErrorCount" * 10
        ) / COALESCE(NULLIF("time", 0), 1)
    ) STORED,
    "state" "ScoreState" NOT NULL DEFAULT 'DidNotScore',
    "round" INTEGER NOT NULL,
    "accuracy" DOUBLE PRECISION DEFAULT 0,
    "dqObjectId" INTEGER,


CONSTRAINT "Score_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "ProErrorObject" (
    "id" SERIAL NOT NULL,
    "index" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,


CONSTRAINT "ProErrorObject_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "ProErrorsStore" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "scoreId" INTEGER NOT NULL,
    "proErrorObjectId" INTEGER NOT NULL,


CONSTRAINT "ProErrorsStore_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "DqObject" (
    "id" SERIAL NOT NULL,
    "index" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,


CONSTRAINT "DqObject_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,


CONSTRAINT "Image_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "Ranking" (
    "id" SERIAL NOT NULL,
    "shooterId" INTEGER NOT NULL,
    "rank" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tick" INTEGER NOT NULL,


CONSTRAINT "Ranking_pkey" PRIMARY KEY ("id") );

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "shooterId" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tick" INTEGER NOT NULL,


CONSTRAINT "Rating_pkey" PRIMARY KEY ("id") );

-- CreateIndex
CREATE UNIQUE INDEX "Shooter_id_key" ON "Shooter" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Stage_id_key" ON "Stage" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "StageTag_id_key" ON "StageTag" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "TagOnStage_id_key" ON "TagOnStage" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Scoreboard_id_key" ON "Scoreboard" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Scorelist_id_key" ON "Scorelist" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Score_id_key" ON "Score" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProErrorObject_id_key" ON "ProErrorObject" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProErrorObject_index_key" ON "ProErrorObject" ("index");

-- CreateIndex
CREATE UNIQUE INDEX "ProErrorsStore_id_key" ON "ProErrorsStore" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "DqObject_id_key" ON "DqObject" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "DqObject_index_key" ON "DqObject" ("index");

-- CreateIndex
CREATE UNIQUE INDEX "Image_id_key" ON "Image" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ranking_id_key" ON "Ranking" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_id_key" ON "Rating" ("id");

-- AddForeignKey
ALTER TABLE "Stage"
ADD CONSTRAINT "Stage_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stage"
ADD CONSTRAINT "Stage_designerId_fkey" FOREIGN KEY ("designerId") REFERENCES "Shooter" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagOnStage"
ADD CONSTRAINT "TagOnStage_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "StageTag" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagOnStage"
ADD CONSTRAINT "TagOnStage_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scorelist"
ADD CONSTRAINT "Scorelist_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scorelist"
ADD CONSTRAINT "Scorelist_scoreboardId_fkey" FOREIGN KEY ("scoreboardId") REFERENCES "Scoreboard" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score"
ADD CONSTRAINT "Score_shooterId_fkey" FOREIGN KEY ("shooterId") REFERENCES "Shooter" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score"
ADD CONSTRAINT "Score_scorelistId_fkey" FOREIGN KEY ("scorelistId") REFERENCES "Scorelist" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score"
ADD CONSTRAINT "Score_dqObjectId_fkey" FOREIGN KEY ("dqObjectId") REFERENCES "DqObject" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProErrorsStore"
ADD CONSTRAINT "ProErrorsStore_proErrorObjectId_fkey" FOREIGN KEY ("proErrorObjectId") REFERENCES "ProErrorObject" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProErrorsStore"
ADD CONSTRAINT "ProErrorsStore_scoreId_fkey" FOREIGN KEY ("scoreId") REFERENCES "Score" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ranking"
ADD CONSTRAINT "Ranking_shooterId_fkey" FOREIGN KEY ("shooterId") REFERENCES "Shooter" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating"
ADD CONSTRAINT "Rating_shooterId_fkey" FOREIGN KEY ("shooterId") REFERENCES "Shooter" ("id") ON DELETE CASCADE ON UPDATE CASCADE;