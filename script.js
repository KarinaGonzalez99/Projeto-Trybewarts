const emailconf = document.getElementById('Email'); // requisito 3
const passwordconf = document.getElementById('Password'); // requisito 3
const button = document.getElementById('botao'); // requisito 3
function checar() { // requisito 3
  const mail = 'tryber@teste.com'; // requisito 3
  const senha = '123456'; // requisito 3
  if (emailconf.value === mail && passwordconf.value === senha) { // requisito 3
    window.alert('Olá, Tryber!'); // requisito 3
  } else { // requisito 3
    window.alert('Email ou senha inválidos.'); // requisito 3
  }
}
button.addEventListener('click', checar); // requisito 3
