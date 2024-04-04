-- AlterTable
ALTER TABLE "Stage" DROP COLUMN "stageType";
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