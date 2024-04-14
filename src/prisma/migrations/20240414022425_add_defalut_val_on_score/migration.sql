-- CreateEnum
CREATE TYPE "ScoreState" AS ENUM ('DidNotScore', 'DidNotFinish', 'DQ');

-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "state" "ScoreState" NOT NULL DEFAULT 'DidNotScore',
ALTER COLUMN "alphas" SET DEFAULT 0,
ALTER COLUMN "charlies" SET DEFAULT 0,
ALTER COLUMN "deltas" SET DEFAULT 0,
ALTER COLUMN "misses" SET DEFAULT 0,
ALTER COLUMN "noshoots" SET DEFAULT 0,
ALTER COLUMN "poppers" SET DEFAULT 0,
ALTER COLUMN "time" SET DEFAULT 0,
ALTER COLUMN "proErrorCount" SET DEFAULT 0;
-- AlterTable
