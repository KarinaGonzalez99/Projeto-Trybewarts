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