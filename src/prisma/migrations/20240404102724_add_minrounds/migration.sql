-- CreateEnum
CREATE TYPE "StageType" AS ENUM ('Short', 'Medium', 'Long', 'Unsanctioned');

-- CreateEnum
CREATE TYPE "Division" AS ENUM ('Standard', 'Open', 'Production', 'ProductionOptics');

-- CreateTable
CREATE TABLE "Shooter" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "division" "Division" NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Shooter_pkey" PRIMARY KEY ("id")
);

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
    "shooterId" INTEGER NOT NULL,
    "walkthroughTime" DECIMAL(65,30) NOT NULL,
    "minRounds" INTEGER NOT NULL GENERATED ALWAYS AS (papers * 2 + poppers) STORED,

    CONSTRAINT "Stage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scoreboard" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "Scoreboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scorelist" (
    "id" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "scoreboardId" INTEGER,
    "stageId" INTEGER,

    CONSTRAINT "Scorelist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Score" (
    "id" INTEGER NOT NULL,
    "alphas" INTEGER NOT NULL,
    "charlies" INTEGER NOT NULL,
    "deltas" INTEGER NOT NULL,
    "misses" INTEGER NOT NULL,
    "noshoots" INTEGER NOT NULL,
    "poppers" INTEGER,
    "time" DOUBLE PRECISION NOT NULL,
    "scorelistId" TEXT,
    "shooterId" INTEGER NOT NULL,
    "round" INTEGER NOT NULL,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProErrorObjects" (
    "id" INTEGER NOT NULL,
    "index" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ProErrorObjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProErrorsStore" (
    "id" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "scoreId" INTEGER,
    "proErrorObjectsId" INTEGER NOT NULL,

    CONSTRAINT "ProErrorsStore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shooter_id_key" ON "Shooter"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Stage_id_key" ON "Stage"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Scoreboard_id_key" ON "Scoreboard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Scorelist_id_key" ON "Scorelist"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Score_id_key" ON "Score"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProErrorObjects_id_key" ON "ProErrorObjects"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProErrorObjects_index_key" ON "ProErrorObjects"("index");

-- CreateIndex
CREATE UNIQUE INDEX "ProErrorsStore_id_key" ON "ProErrorsStore"("id");

-- AddForeignKey
ALTER TABLE "Stage" ADD CONSTRAINT "Stage_shooterId_fkey" FOREIGN KEY ("shooterId") REFERENCES "Shooter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scorelist" ADD CONSTRAINT "Scorelist_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scorelist" ADD CONSTRAINT "Scorelist_scoreboardId_fkey" FOREIGN KEY ("scoreboardId") REFERENCES "Scoreboard"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_shooterId_fkey" FOREIGN KEY ("shooterId") REFERENCES "Shooter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_scorelistId_fkey" FOREIGN KEY ("scorelistId") REFERENCES "Scorelist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProErrorsStore" ADD CONSTRAINT "ProErrorsStore_proErrorObjectsId_fkey" FOREIGN KEY ("proErrorObjectsId") REFERENCES "ProErrorObjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProErrorsStore" ADD CONSTRAINT "ProErrorsStore_scoreId_fkey" FOREIGN KEY ("scoreId") REFERENCES "Score"("id") ON DELETE SET NULL ON UPDATE CASCADE;
