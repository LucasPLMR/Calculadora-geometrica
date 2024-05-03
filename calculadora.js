let opcao = "";

function areaDoTriangulo(base, altura) {
  const resultadoTriangulo = (base * altura) / 2;
  return resultadoTriangulo;
}
function areaDoRetangulo(base, altura) {
  const resultadoRetangulo = base * altura;
  return resultadoRetangulo;
}
function areaDoQuadrado(lado) {
  const resultadoQuadrado = lado * lado;
  return resultadoQuadrado;
}
function areaDoTrapezio(baseMenor, baseMaior, altura) {
  const resultadoTrapezio = (baseMenor + baseMaior) * altura/2;
  return resultadoTrapezio;
}
function areaDoCirculo(raio) {
  const resultadoCirculo = 3.14 * (raio * raio);
  return resultadoCirculo;
}

do {
  opcao = prompt(
    "Bem vindo(a) á Calculadora Geométrica\n" +
      "\n1. Calcular Área do Triângulo" +
      "\n2. Calcular Área do Retângulo" +
      "\n3. Calcular Área do Quadrado" +
      "\n4. Calcular Área do Trapézio" +
      "\n5. Calcular Área do Círculo" +
      "\n6. Encerrar"
  );

  switch (opcao) {
    case "1":
      const valor1 = parseFloat(prompt("Digite o valor da base: "));
      const valor2 = parseFloat(prompt("Digite o valor da altura: "));
      alert("A área do Triângulo é " + areaDoTriangulo(valor1, valor2));
      break;

    case "2":
      const valor3 = parseFloat(prompt("Digite o valor da base: "));
      const valor4 = parseFloat(prompt("Digite o valor da altura: "));
      alert("A área do Retângulo é " + areaDoRetangulo(valor3, valor4));
      break;

    case "3":
      const valor5 = parseFloat(prompt("Digite o valor do lado: "));
      alert("A área do Quadrado é " + areaDoQuadrado(valor5));
      break;

    case "4":
      const valor6 = parseFloat(prompt("Digite o valor da base menor: "));
      const valor7 = parseFloat(prompt("Digite o valor da base maior: "));
      const valor8 = parseFloat(prompt("Digite o valor da altura: "));
      alert("A área do Trapézio é " + areaDoTrapezio(valor6, valor7, valor8));
      break;

    case "5":
      const valor9 = parseFloat(prompt("Digite o valor do raio: "));
      alert("A área do Círculo é " + areaDoCirculo(valor9));
      break;

    case "6":
      alert("Encerrando o programa...");
      break;

    default:
      alert("Opção Inválida");
      break;
  }
} while (opcao !== "6");
