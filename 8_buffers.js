const fs = require("fs");

let buf = Buffer.alloc(26);

buf[0] = 97;
buf[1] = 98;
buf[2] = 99;

console.log(buf);
console.log(buf.toString("ascii"))

for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97 // 97 is ASCII a
}

console.log(buf);
console.log(buf.toString("ascii"))
console.log(buf.toString("utf8"))

const threeAsync = fs.readFile("./three.txt", (err, content) => {
	if (err) {
		return console.error(err);
	}

	console.log(content);
	console.log(content.toString("utf8"));
	console.log(content.toString("ascii"));

	content[0] = 97;
	console.log(content.toString("ascii"));
});
