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

// -------------------Requisito 21----------------------------

const getFirstName = document.querySelector('#input-name');
getFirstName.addEventListener('change', () => {
  localStorage.setItem('name', getFirstName.value);
});

const getLastName = document.querySelector('#input-lastname');
getLastName.addEventListener('change', () => {
  localStorage.setItem('lastname', getLastName.value);
});

const getEmail = document.querySelector('#input-email');
getEmail.addEventListener('change', () => {
  localStorage.setItem('Email', getEmail.value);
});

const getHouse = document.querySelector('select#house');
getHouse.addEventListener('change', () => {
  localStorage.setItem('Casa', getHouse.value);
});

const getFamily = document.getElementsByName('family');
getFamily.forEach((item) => {
  item.addEventListener('click', () => {
    localStorage.setItem('Família', item.value);
  });
});

const getContent = document.querySelectorAll('.check');
getContent.forEach((item) => {
  item.addEventListener('click', () => {
    const contentChecked = document.querySelectorAll('input[name="content"]:checked');
    const contents = [];
    contentChecked.forEach((content) => {
      contents.push(content.value);
    });
    let contentString = `${contents[0]}`;
    for (let itens = 1; itens < contents.length; itens += 1) {
      contentString += `, ${contents[itens]}`;
    }
    localStorage.setItem('Matérias', contentString);
  });
});

const getRate = document.getElementsByName('rate');
getRate.forEach((item) => {
  item.addEventListener('click', () => {
    localStorage.setItem('Avaliação', item.value);
  });
});

const getTextArea = document.querySelector('#textarea');
getTextArea.addEventListener('keyup', () => {
  localStorage.setItem('Observações', getTextArea.value);
});

const getForm = document.querySelector('#evaluation-form');
function clearForm() {
  while (getForm.hasChildNodes()) {
    getForm.removeChild(getForm.firstChild);
  }
}

function createLog() {
  const nameP = document.createElement('p');
  nameP.innerHTML = `Nome: ${localStorage.getItem('name')} ${localStorage.getItem('lastname')}`;
  nameP.className = 'log';
  getForm.appendChild(nameP);

  const saved = ['Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
  for (let item = 0; item < saved.length; item += 1) {
    const createP = document.createElement('p');
    createP.innerHTML = `${saved[item]}: ${localStorage.getItem(saved[item])}`;
    createP.className = 'log';
    getForm.appendChild(createP);
  }
}

const getButton = document.querySelector('#submit-btn');
getButton.addEventListener('click', () => {
  clearForm();
  createLog();
});
