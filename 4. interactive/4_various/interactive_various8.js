const chatBox = document.querySelector('#chat-box');
const input = document.querySelector('#input');
const send = document.querySelector('#send');

function sendMyText() {
  const newMessage = input.value;
  if (newMessage) {
    const div = document.createElement('div');
    div.classList.add('bubble', 'my-bubble');
    div.innerText = newMessage;
    chatBox.append(div);
  } else {
    alert('메시지를 입력하세요...');
  }

  input.value = '';
}

send.addEventListener('click', sendMyText);

function sendMyTextByEnter(e){
  //shift를 누르고 있지 않고 enter를 눌렀다면...
  if (e.key === 'Enter' && !e.shiftKey){  //shift키를 눌렀는지 불린 형태로 담고 있음
    sendMyText();
    e.preventDefault();
  }
}
input.addEventListener('keypress', sendMyTextByEnter);