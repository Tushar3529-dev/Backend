
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

                    

myEmitter.on("name",()=>{
    console.log("My name is John Doe");
})


myEmitter.on("name",(yourName)=>{
    console.log(`My name is ${yourName}`);
})





myEmitter.emit("name");



/* EventEmitter → stores events
.on() → registers listener
.emit() → announces event
Event Loop → executes listener code
 */


myEmitter.on("age",(age)=>{
    console.log(`Your age is : ${age}`);
   
})

  myEmitter.emit("age",25);

myEmitter.emit("name",15);
myEmitter.removeAllListeners("name");
myEmitter.emit("name"); // No output since listeners are removed
  myEmitter.emit("age",25); 