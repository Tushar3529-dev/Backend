const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function showName(name){
console.log(`Your Name is : ${name}`);
}

function showAge(age){
console.log(`Your Age is : ${age}`);
}


myEmitter.on('userInfo',showName);
myEmitter.on('userInfo',showAge);

myEmitter.emit('userInfo','John Doe');
myEmitter.emit('userInfo',30);



// Output:
/*
 Your Name is : John Doe
Your Age is : John Doe
Your Name is : 30
Your Age is : 30
 */

// We will remove the showname Listener so only your age is : ${value} will be printed

myEmitter.off('userInfo',showName);
myEmitter.emit('userInfo','John Doe');
myEmitter.emit('userInfo',30);


// OutPut 
/*
 Your Age is : John Doe
Your Age is : 30
 */
