-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "hitFactor" DECIMAL(65,30) NOT NULL GENERATED ALWAYS AS (
    (
        alphas * 5 + charlies * 3 + deltas - misses * 10 - noshoots * 10 + poppers * 5 
    ) / time
) STORED;
