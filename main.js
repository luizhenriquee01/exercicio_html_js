const form = document.querySelector('form'); //selecionando um formulario

const inputA = document.querySelector('#inputA'); //selecionando o input A
const inputB = document.querySelector('#inputB'); //selecionando o input B

form.addEventListener('submit', function (e) {
  let formEValido = false;
  e.preventDefault();
  //Previne a submissão do formulario por padrão
  const valueA = parseInt(inputA.value);
  const valueB = parseInt(inputB.value);

  const mensagemSucesso = `<b>Parabens!</b> O Seu Número do Campo B: <b>${inputB.value}</b> é maior que o seu <br> Número do Campo A: <b>${inputA.value}</b> `;
  //converte os valores dos inputs para número
  formEValido = valueB > valueA;

  if (formEValido) {
    //validação/verifica se o número B é maior que o número A
    const containerMensagemSucesso = document.querySelector('#sucess-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    inputA.value = '';
    inputB.value = '';
  } else {
    document.querySelector('#error-message').style.display = 'block';

    inputA.value = '';
    inputB.value = '';
  }

  //mostrando uma mensagem de erro
});
