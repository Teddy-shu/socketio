const socket = io('http://localhost:3000');
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

const name = prompt('Enter your name :');
apendMessage('You joined');
socket.emit('new-user', name);

socket.on('chat-message', data => {
  apendMessage(`${data.name}: ${data.message}`);
});

socket.on('user-connected', name => {
  apendMessage(`${name} connected`);
});

socket.on('user-disconnected', name => {
  apendMessage(`${name} disconnected`);
});

messageForm.addEventListener('submit', e =>{
  e.preventDefault();
  const message = messageInput.value;
  apendMessage(`You: ${message}`);
  socket.emit('send-chat-message', message);
  messageInput.value = '';
});

function apendMessage(message){
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.appendChild(messageElement);
}
