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
  const formulario = document.querySelector('#agreement');
  formulario.addEventListener('click', () => {
    btn.disabled = false;
  });
}
sendButton();
