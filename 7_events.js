const events = require("events");

const emitter = new events.EventEmitter();

function onStart() {
	console.log("started");
}
emitter.on("start", onStart);

emitter.once("stop", () => {
	console.log("stoped");
});

console.log(emitter.listeners("start"));
emitter.removeListener("start", onStart);
console.log(emitter.listeners("start"));

emitter.emit("start");
emitter.emit("stop");
emitter.emit("start");
emitter.emit("stop");


