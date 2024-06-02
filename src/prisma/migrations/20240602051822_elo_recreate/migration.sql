-- AlterTable
ALTER TABLE "Elo" RENAME CONSTRAINT "ELO_pkey" TO "Elo_pkey";

-- AlterTable
-- RenameForeignKey
ALTER TABLE "Elo" RENAME CONSTRAINT "ELO_shooterId_fkey" TO "Elo_shooterId_fkey";

-- RenameIndex
ALTER INDEX "ELO_id_key" RENAME TO "Elo_id_key";
