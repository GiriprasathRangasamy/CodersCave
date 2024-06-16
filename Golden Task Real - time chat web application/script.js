const socket = new WebSocket('ws://localhost:3000');

socket.onopen = function() {
  console.log('Connected to server');
};

socket.onmessage = function(event) {
  const chatMessages = document.getElementById('chat-messages');
  const message = document.createElement('div');
  message.textContent = event.data;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    socket.send(message);
    messageInput.value = '';
  }
}
