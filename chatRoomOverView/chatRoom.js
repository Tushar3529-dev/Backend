const EventEmitter = require('events');

class ChatRoomEmitter extends EventEmitter {
  constructor() {
    super();

this.users = new Set();


  }


join(user){
    this.users.add(user);
        this.emit('userJoined',user);
}

sendMeassage(user, msg){
    if(this.users.has(user)){
        console.log(`${user} sent a message: ${msg}`);
        this.emit('messageReceived', {user, msg});  }}

leave(user){
    if(this.users.has(user)){
        this.users.delete(user);
        this.emit('userLeft',user);
    }else{
        console.log(`${user} is not in the chat room.`);
    }
}




}
const chat = new ChatRoomEmitter();

module.exports = chat;