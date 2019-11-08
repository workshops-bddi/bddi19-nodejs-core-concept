const { Writable, Readable, Duplex } = require('stream');

const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback()
  }
})

const inStream = new Readable({
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
})

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);

// inStream.push("data")
// inStream.push("data2")
// inStream.push(null)
