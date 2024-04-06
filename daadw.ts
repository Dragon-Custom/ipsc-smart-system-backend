const { PrismaClient } = require( "@prisma/client");

(async () => {

	const prisma = new PrismaClient();
	console.log(await prisma.stage.create({
		data: {
			gunCondition: 1,
			name: "12e",
			noshoots: 2,
			papers: 2,
			poppers: 2,
			walkthroughTime: 1,
			description: "accwev",
			designer: {
				connect: {
					id: 1,
				},
			},
			image: {
				connect: {
					id: "clunv5n2x0000r2t0sokp2di7",
				},
			},
		},
	}));
})();