-- AlterTable

-- AlterTable
ALTER TABLE "Shooter" ADD COLUMN     "teamId" INTEGER;


-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_id_key" ON "Team"("id");

-- AddForeignKey
ALTER TABLE "Shooter" ADD CONSTRAINT "Shooter_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
