const { writeFile } = require("fs/promises");



const PORT = 2087;

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const graphql = JSON.stringify({
	query: "query {\r\n    getImage(id: \"clum7gcjb0000oaxygqzvy67h\") \r\n}",
	variables: {},
});
const requestOptions = {
	method: "POST",
	headers: myHeaders,
	body: graphql,
	redirect: "follow",
};
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
fetch(`https://localhost:${PORT}/graphql`, requestOptions)
	.then(async (response) => {
		const dawadw = (await response.json()).data.getImage;
		console.log(dawadw);
		await writeFile("1.jpeg", dawadw, "base64");
	})
	.catch((error) => console.error(error));
