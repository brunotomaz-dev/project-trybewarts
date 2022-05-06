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

/*  function sendButton() {
  const btn = document.querySelector('#submit-btn');
  btn.addEventListener('click', (event) => {
    event.preventDefault();

  });
}
sendButton();   */
