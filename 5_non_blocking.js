const fs = require("fs")
const fsPromise = require("fs").promises


async function loadFile() {
 const data = await fsPromise.readFile("./one.txt", "utf8")
 console.log("data :", data)
 }

loadFile()

const oneAsync = fs.readFile("./one.txt", "utf8", (err, content) => {
	if (err) {
		return console.error(err);
	}

	console.log(content);
})

const twoAsync = fs.readFile("./two.txt", "utf8", (err, content) => {
	if (err) {
		return console.error(err);
	}
	console.log(content);
});


console.log("step 1")

