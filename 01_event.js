const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

sendsMessages(msg){
    console.log(`Your Message is Sent : ${msg}`);
    this.emit('messageRecived', msg);
    
}





}

const chat= new MyEmitter();

chat.on('messageRecived',(msg)=>{
    console.log(`Recived Message: ${msg}`);
});

chat.sendsMessages('Hello, World!');
chat.sendsMessages('This is a test message.');
