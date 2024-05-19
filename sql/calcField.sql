ALTER TABLE "Score"
ADD COLUMN "score" INTEGER NOT NULL GENERATED ALWAYS AS (
    (
        alphas * 5 + charlies * 3 + deltas - misses * 10 - noshoots * 10 + poppers * 5 - "proErrorCount" * 10
    )
) STORED;

ALTER TABLE "Score"
ADD COLUMN "hitFactor" DOUBLE PRECISION NOT NULL GENERATED ALWAYS AS (
    (
        alphas * 5 + charlies * 3 + deltas - misses * 10 - noshoots * 10 + poppers * 5 - "proErrorCount" * 10
    ) / COALESCE(NULLIF("time", 0), 1)
) STORED;

ALTER TABLE "Stage"
ADD COLUMN "stageType" "StageType" NOT NULL GENERATED ALWAYS AS (
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
) STORED;

ALTER TABLE "Stage"
ADD COLUMN "maxScore" INTEGER NOT NULL GENERATED ALWAYS AS (papers * 2 * 5 + poppers * 5) STORED;

ALTER TABLE "Stage"
ADD COLUMN "minRounds" INTEGER NOT NULL GENERATED ALWAYS AS (papers * 2 + poppers) STORED;