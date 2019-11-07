const fs = require("fs")

const one = fs.readFileSync("./one.txt", "utf8");
console.log("one:", one);

const two = fs.readFileSync("./two.txt", "utf8");
console.log("two:", two);

const three = fs.readFileSync("./three.txt", "utf8");
console.log("three:", three);

