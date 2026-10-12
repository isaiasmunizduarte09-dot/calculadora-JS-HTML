function soma(a, b) {return a + b;}

function subtracao(a, b) {return a - b;}

function multiplicacao(a, b) {return a * b;}

function dividir(a, b) {
  if (b === 0) {
    console.warn("Tentativa de divisão por zero.");
    return 0; // ou retorne null/NaN dependendo do fluxo desejado
  }
  return a / b;
}

function exponencial(a, b) {
  return a ** b;
}