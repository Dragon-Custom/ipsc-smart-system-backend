-- AlterTable

-- CreateTable
CREATE TABLE "Ranking" (
    "id" SERIAL NOT NULL,
    "shooterId" INTEGER NOT NULL,
    "rank" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ranking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ranking_id_key" ON "Ranking"("id");

-- AddForeignKey
ALTER TABLE "Ranking" ADD CONSTRAINT "Ranking_shooterId_fkey" FOREIGN KEY ("shooterId") REFERENCES "Shooter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
