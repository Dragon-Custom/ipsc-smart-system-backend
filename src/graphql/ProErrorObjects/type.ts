import { objectType, list } from "nexus";

export const ProErrorObjects = objectType({
	nonNullDefaults: {
		output: true,
		input: false,
	},
	name: "ProErrorObjects",
	definition(t) {
		t.int("id");
		t.string("index");
		t.string("title");
		t.string("description");
		t.list.field("proErrorsStore", {
			type: "ProErrorsStore",
			args: {
				where: "ProErrorsStoreWhereInput",
				orderBy: list("ProErrorsStoreOrderByWithRelationInput"),
				cursor: "ProErrorsStoreWhereUniqueInput",
				take: "Int",
				skip: "Int",
				distinct: list("ProErrorsStoreScalarFieldEnum"),
			},
			resolve(root: any) {
				return root.proErrorsStore;
			},
		});
		t.field("_count", {
			type: "ProErrorObjectsCountOutputType",
			resolve(root: any) {
				return root._count;
			},
		});
	},
});
