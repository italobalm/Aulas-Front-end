//Questão 1
var numero = (Number(prompt("Digite um número inteiro:")));
if (numero > 0) {
    console.log("Positivo!");
}
else if (numero < 0) {
    console.log("Negativo!");
}
else {
    console.log("Número igual a 0");
}
;
//Questão 2
var idade = (Number(prompt("Digite a sua idade:")));
if (idade >= 18) {
    alert("Maior de idade");
}
else {
    alert("Menor de idade");
}
;
//Questão 3
var numero1 = (Number(prompt("Digite o primeiro número inteiro:")));
var numero2 = (Number(prompt("Digite o segundo número inteiro:")));
if (numero1 > numero2) {
    alert("N\u00FAmero ".concat(numero1, " \u00E9 o maior"));
}
else if (numero2 > numero1) {
    alert("N\u00FAmero ".concat(numero2, " \u00E9 o maior"));
}
else {
    alert("Os números são iguais");
}
;
//Questão 4
var num = (Number(prompt("Digite um número:")));
if (num % 2 == 0) {
    alert("O número é par");
}
else {
    alert("O número é ímpar");
}
;
//Questão 5
var nota1 = (Number(prompt("Insira a primeira nota:")));
var nota2 = (Number(prompt("Insira a segunda nota:")));
var nota3 = (Number(prompt("Insira a terceira nota:")));
var media = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
    alert("Aprovado!");
}
else {
    alert("Reprovado!");
}
;
//Questão 6
var nome1 = (String(prompt("Digite o nome da primeira pessoa:")));
var nome2 = (String(prompt("Digite o nome da segunda pessoa:")));
if (nome1.length > nome2.length) {
    alert("O nome ".concat(nome1, " possui mais caracteres!"));
}
else {
    alert("O nome ".concat(nome2, " possui mais caracteres!"));
}
;
//Questão 7
var caractere = (String(prompt("Digite um caractere:"))).toUpperCase();
if (caractere == "A" || caractere == "E" || caractere == "I" || caractere == "O" || caractere == "U") {
    alert("É uma vogal!");
}
else {
    alert("É uma consoante!");
}
;
//Questão 8
var n1 = (Number(prompt(" Digite o primeiro número:")));
var n2 = (Number(prompt(" Digite o segundo número:")));
var n3 = (Number(prompt(" Digite o terceiro número:")));
if (n1 > n2 && n1 < n3) {
    alert("".concat(n3, ", ").concat(n1, ", ").concat(n2));
}
if (n1 > n3 && n1 < n2) {
    alert("".concat(n2, ", ").concat(n1, ", ").concat(n3));
}
if (n3 > n1 && n3 < n2) {
    alert("".concat(n2, ", ").concat(n3, ", ").concat(n1));
}
if (n3 > n2 && n3 < n1) {
    alert("".concat(n1, ", ").concat(n3, ", ").concat(n2));
}
if (n2 > n1 && n2 < n3) {
    alert("".concat(n3, ", ").concat(n2, ", ").concat(n1));
}
if (n2 > n3 && n2 < n1) {
    alert("".concat(n1, ", ").concat(n2, ", ").concat(n3));
}
;
//Questão 9
var peso = (Number(prompt("Digite seu peso:")));
var altura = (Number(prompt("Digite a sua altura:")));
var imc = Math.pow(altura, altura) / peso;
if (imc < 18.5) {
    alert("Abaixo do peso!");
}
else if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso normal!");
}
else if (imc >= 30 && imc <= 34.9) {
    alert("Sobrepeso!");
}
else if (imc >= 35 && imc <= 39.9) {
    alert("Obeso!");
}
else {
    alert("Muito obeso!");
}
;
//Questão 10
var mes = (Number(prompt("Digite o número do mÊs:")));
if (mes == 1) {
    alert("Janeiro");
}
if (mes == 2) {
    alert("Fevereiro");
}
if (mes == 3) {
    alert("Março");
}
if (mes == 4) {
    alert("Abril");
}
if (mes == 5) {
    alert("Maio");
}
if (mes == 6) {
    alert("Junho");
}
if (mes == 7) {
    alert("Julho");
}
if (mes == 8) {
    alert("Agosto");
}
if (mes == 9) {
    alert("Setembro");
}
if (mes == 10) {
    alert("Outubro");
}
if (mes == 11) {
    alert("Novembro");
}
if (mes == 12) {
    alert("Dezembro");
}
else {
    alert("Número não corresponde a um mêS");
}
;
//Questão 11
var salario = (Number(prompt("Digite o valor de seu salário:")));
var aumento = 0;
if (salario > 1500) {
    aumento = salario * 0.10;
    alert("Seu aumento ser\u00E1 de R$ ".concat(aumento, ", Novo sal\u00E1rio: R$ ").concat(salario + aumento));
}
else {
    aumento = salario * 0.15;
    alert("Seu aumento ser\u00E1 de R$ ".concat(aumento, ", Novo sal\u00E1rio: R$ ").concat(salario + aumento));
}
;
//Questão 12
var numeroInteiro = (Number(prompt("Digite um número inteiro:")));
if (numeroInteiro % 3 == 0 && numeroInteiro % 5 == 0) {
    alert("Divisível por 3 e 5");
}
else {
    alert("O número não é divisível por 3 e 5");
}
;
//Questão 13
var diaSemana = (String(prompt("Digite o dia da semana:"))).toUpperCase();
if (diaSemana == "SEGUNDA" || "TERÇA" || "QUARTA" || "QUINNTA" || "SEXTA") {
    alert("Dia útil");
}
else
    (alert("Fim de semana"));
//Questão 14
var n = (Number(prompt("Digite um número de 1 a 5:")));
switch (n) {
    case 5:
        alert("Muito bom");
        break;
    case 4:
        alert("Bom");
        break;
    case 3:
        alert("Regular");
        break;
    case 2:
        alert("Insuficiente");
        break;
    case 1:
        alert("Muito insuficiente");
        break;
    default:
        break;
}
;
//Questão 15
var dSemana = (Number(prompt("Digite um número de 1 a 7 para verificar o dia da semana:")));
if (dSemana == 1) {
    alert("Domingo");
}
if (dSemana == 2) {
    alert("Segunda");
}
if (dSemana == 3) {
    alert("Terça");
}
if (dSemana == 4) {
    alert("Quarta");
}
if (dSemana == 5) {
    alert("Quinta");
}
if (dSemana == 6) {
    alert("Sexta");
}
if (dSemana == 7) {
    alert("Sábado");
}
;
//Questão 17
var idadeUsuario = (Number(prompt("Digite a sua idade:")));
if (idadeUsuario >= 0 && idadeUsuario <= 1) {
    alert("Bebê");
}
if (idadeUsuario > 1 && idadeUsuario <= 12) {
    alert("Criança");
}
if (idadeUsuario >= 13 && idadeUsuario <= 18) {
    alert("Adolescente");
}
else {
    alert("Adulto");
}
;
//Questão 18
var estadoCivil = (String(prompt("Digite seu estado civil:"))).toUpperCase();
switch (estadoCivil) {
    case "SOLTEIRO":
        alert("Você é solteiro!");
        break;
    case "CASADO":
        alert("Você é casado!");
        break;
    case "VIÚVO":
        alert("Você é viúvo!");
        break;
    case "DIVORCIADO":
        alert("Você é divorciado!");
        break;
    default:
        break;
}
;
