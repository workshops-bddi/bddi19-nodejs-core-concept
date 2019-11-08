const fs = require("fs");

const file = fs.createWriteStream("./big.txt");

for (let i = 0; i <= 1e6; i++) {
  file.write('Eeeee! Now say "nuclear wessels"! One hundred dollars. Morbo can\'t understand his teleprompter because he forgot how you say that letter that\'s shaped like a man wearing a hat. I\'ll tell them you went down prying the wedding ring off his cold, dead finger.');
}

file.end()
