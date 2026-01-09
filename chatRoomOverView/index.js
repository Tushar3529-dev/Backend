const chat = require('./chatRoom.js');


chat.on('userJoined', (user) => {
    console.log(`${user} has joined the chat room.`);
});

chat.on('messageReceived', ({user, msg}) => {
    console.log(`Message from ${user}: ${msg}`);
});

chat.on('userLeft', (user) => {
    console.log(`${user} has left the chat room.`);
}); 



chat.join("Alice");
chat.sendMeassage("Alice", "Hello everyone!");
chat.leave("Alice");