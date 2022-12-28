const calc = document.getElementById('calc');

function imc(ev) {
  ev.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const result = document.getElementById('result');

  if (firstName && height && weight !== '') {

    const valueIMC = (weight / (height * height)).toFixed(2);

    let status = '';

    if (valueIMC < 18.5) {
      status = 'abaixo do peso.';
    } else if (valueIMC < 25) {
      status = 'com peso ideal. Parabéns!!';
    } else if (valueIMC < 30) {
      status = 'levemente acima do peso.';
    } else if (valueIMC < 35) {
      status = 'com obesidade grau I.';
    } else if (valueIMC < 40) {
      status = 'com obesidade grau II.';
    } else if (valueIMC < 45) {
      status = 'com obesidade gray III. Cuidado!!';
    }

    result.textContent = `${firstName} seu IMC é: ${valueIMC} e você está ${status}`;

  } else {
    result.textContent = 'Preencha todos os campos!';
  }
}

calc.addEventListener('click', imc);
