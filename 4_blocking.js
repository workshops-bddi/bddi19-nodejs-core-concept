console.log("start")

const start = Date.now()

setTimeout(function() {
  console.log("set timeout 1")
}, 0)

for(let i = 1; 1 < 100000; i++) {
  //
 }
 
 const end = Date.now()
 
 console.log("ending")
 
 console.log(end - start)
 
