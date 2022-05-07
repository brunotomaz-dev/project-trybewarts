function login() {
  const inputButton = document.querySelector('#button');
  inputButton.addEventListener('click', () => {
    const inputEmail = document.querySelector('#inputEmail');
    const inputSenha = document.querySelector('#inputSenha');
    if (inputEmail.value !== 'tryber@teste.com' || inputSenha.value !== '123456') {
      alert('Email ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
}
login();

function sendButton() { //  https://www.w3schools.com/jsref/dom_obj_pushbutton.asp
  const btn = document.querySelector('#submit-btn');
  btn.disabled = true;
  const formBox = document.querySelector('#agreement');
  formBox.addEventListener('click', () => {
    btn.disabled = false;
  });
}
sendButton();

function characterCount() {
  const textArea = document.querySelector('#textarea');
  textArea.addEventListener('keyup', () => { //  https://www.w3schools.com/jsref/dom_obj_event.asp
    const count = document.querySelector('#counter');
    count.innerHTML = 500 - (textArea.value.length);
    console.log(textArea.value.length);
  });
}
characterCount();
