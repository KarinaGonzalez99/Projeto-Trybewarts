// requisito 3
const emailconf = document.getElementById('Email');
const passwordconf = document.getElementById('Password');
const button = document.getElementById('botao');
function checar() {
  const mail = 'tryber@teste.com';
  const senha = '123456';
  if (emailconf.value === mail && passwordconf.value === senha) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', checar);
// requisito 3

// requisito 18
const botaum = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
function enableButton() {
  if (checkBox.checked) {
    botaum.disabled = false;
  } else {
    botaum.disabled = true;
  }
}
checkBox.addEventListener('click', enableButton);
// requisito 18

const counter = document.getElementById('counter');
const textarea = document.getElementById('textarea');
function contador() {
  const countup = 500 - (textarea.value.length);
  counter.innerHTML = countup;
}
textarea.addEventListener('keyup', contador);
