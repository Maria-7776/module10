const wsUrl = 'wss://echo.websocket.org/';

function pageLoaded(){
  const input = document.querySelector('.input');
  const button = document.querySelector('.button');
  const chat = document.querySelector('.chat-window');
  const output = document.querySelector('.output');
  const geoButton = document.querySelector('.geo')

  let websocket = new WebSocket(wsUrl);

  websocket.onopen = ()=> {
    output.innerText = "Соединение установлено"
  }
  websocket.onerror = () => {
    output.innerText = "При передаче данных произошла ошибка"
  }
    websocket.onmessage = (event) => {
      writeToChat(event.data, true);
    }
    
    button.addEventListener('click', sendMessage);

    function sendMessage() {
      if (!input.value) return;
      websocket.send(input.value);
      writeToChat(input.value, false);
      input.value === "";
    }
    function writeToChat(message, isReceived) {
      let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
      chat.innerHTML += messageHTML;
    }

    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      writeToChat(`<span class="client-message"><a href = "https://wwww.openstreetmap.org/#map = 18/${latitude}/${longitude}" target = "_blank">Геолокация</a> </span>`)
    }

    geoButton.addEventListener('click', () => {
      if (!navigator.geolocation){
        status.textContent = 'Геолокация не поддерживается'
      } else{
        navigator.geolocation.getCurrentPosition(success)
      }
    })      
}

document.addEventListener("DOMContentLoaded", pageLoaded);








  
 
