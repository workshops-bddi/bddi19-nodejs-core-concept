let racer = function() {
  setTimeout(() => console.log("timeout"), 0);
  
  setImmediate(() => console.log("immediate"));
  
  process.nextTick(() => console.log("nextTick"));
  
  console.log("current event loop");
}

// racer()

let racer1 = function() {
  setTimeout(() => console.log("timeout 1"), 0);
  setImmediate(() => console.log("immediate 1"));
  process.nextTick(() => console.log("nextTick 1"));
    console.log("current event loop 1");
}

let racer2 = function() {
  process.nextTick(() => console.log("nextTick 2"));
  setTimeout(() => console.log("timeout 2"), 0);
  setImmediate(() => console.log("immediate 2"));
    console.log("current event loop 2");
}

let racer3 = function() {
  setImmediate(() => console.log("immediate 3"));
  process.nextTick(() => console.log("nextTick 3"));
  setTimeout(() => console.log("timeout3 "), 0);
    console.log("current event loop 3");
}

racer1()
racer2()
racer3()

