import { objectType, list } from "nexus";

export const Shooter = objectType({
	nonNullDefaults: {
		output: true,
		input: false,
	},
	name: "Shooter",
	definition(t) {
		t.int("id");
		t.nullable.field("createAt", { type: "DateTime" });
		t.string("name");
		t.field("division", { type: "Division" });
		t.list.field("stage", {
			type: "Stage",
			args: {
				where: "StageWhereInput",
				orderBy: list("StageOrderByWithRelationInput"),
				cursor: "StageWhereUniqueInput",
				take: "Int",
				skip: "Int",
				distinct: list("StageScalarFieldEnum"),
			},
			resolve(root: any) {
				return root.stage;
			},
		});
		t.list.field("score", {
			type: "Score",
			args: {
				where: "ScoreWhereInput",
				orderBy: list("ScoreOrderByWithRelationInput"),
				cursor: "ScoreWhereUniqueInput",
				take: "Int",
				skip: "Int",
				distinct: list("ScoreScalarFieldEnum"),
			},
			resolve(root: any) {
				return root.score;
			},
		});
		t.field("_count", {
			type: "ShooterCountOutputType",
			resolve(root: any) {
				return root._count;
			},
		});
	},
});
