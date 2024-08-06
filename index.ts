//Questão 1

//O comando "for" é utilizado como loop para repetir algo enquanto uma condição 
//for verdadeira e sabe-se com antecedência quantas vezes deseja repetir uma ação.

//Questão 2

//O incio é definido através da declaração de uma variável que será controlada 
//ao longo do código. Ex: for (let i = 0;). A repetição inicia no 0.

//Questão 3
//O fim da execução é definido logo após a declaração do ponto de partida,
//onde se diz até que momento aquela repetição acontecerá.
//Ex: for (let i = 0; i < 10). A repetição inicia em 0 e continua enquanto i for menor que 10.

//Questão 4

//A alteração do valor ocorre através do incremento "++".
//Ex: for (let i = 0; i < 10; i++){}.

//Questão 5
for (let i = 0; i < 10; i++){
    console.log("Testando uma frase!");
};

//Questão 6
for (let y = 0; y < 10; y++){
    console.log(y);
};

//Questão 7
for (let z = 0; z < 10; z++){
    
    if (z == 5){
        break;
    };

    console.log(z);
};

//Questão 8
for (let x = 0; x < 10; x++){

    if (x == 5){
        continue;
    };

    console.log(x);
};

//Questão 9
let nomes = ['João', 'Paulo', 'Pedro', 'Gustavo', 'Maria'];

for (let n of nomes){
    console.log(n);
};

//Questão 10
for (let h = 1; h < 11; h++){
    console.log(h);
};

//Questão 11
for (let g = 10; g > 0; g--){
    console.log(g);
};

//Questão 12
let soma = 0;

for (let num = 0; num < 101; num++){
    soma = soma + num;
};
console.log(soma);

//Questão 13
for (let p = 1; p < 51; p++){

    if (p % 2 == 0){
        console.log(p);
    };
};

//Questão 14
let produto = 1;

for (let u = 1; u < 6; u++){
    produto = produto * u;
};
console.log(produto);

//Questão 15
for (let b = 1; b < 11; b++){
    console.log(`7x${b} = ${7*b}`);
};

//Questão 16
//let somar = 0;

//for (let w = 0; w < 5; w++){
//    let notas = (Number(prompt(`Digite a ${w}º nota:`)));
 //   somar = somar + notas;
//};
//console.log(`A média das notas é igual a ${somar/5}`);

//Questão 17
for (let d = 1; d < 51; d++){

    if (d % 3 == 0){
        console.log(d);
    };
};

//Questão 18
let maiorNumero = 0;
let menorNumero = 554874873487548;
for (let t = 1; t < 11; t++){
    let numero = (Number(prompt(`Digite o ${t}º número:`)));

    if (numero > maiorNumero){
        maiorNumero = numero;
    };
    
    if (numero  < menorNumero){
        menorNumero = numero;
    };
};
console.log(`Maior número: ${maiorNumero} Menor número: ${menorNumero}`);

//Questão 19
for (let q = 1; q < 101; q++){

    if (q % 2 != 0){
        console.log(q);
    };
};

//Questão 20
let aprovados = 0;

for (let f = 1; f < 6; f++){
    let nota = (Number(prompt(`Digite a nota do ${f}º aluno:`)));

    if (nota >= 7){
        aprovados +=1;
    }
};
console.log(`${aprovados} alunos foram aprovados!`);

//Questão 21
let numInteiro = (String(prompt("Digite um número inteiro:")));
let adicao = 0;

for (let s = 0; s < numInteiro.length; s++){
    adicao += parseInt(numInteiro[s]);
};

//Questão 22
for (let k = 1; k < 101; k++){
    let inteiro = (Number(prompt("Digite um número inteiro:")));

    if (inteiro % k == 0){
        console.log(k);
    };
};

//Questão 23
let somarAlturas = 0;
for (let a = 1; a < 6; a++){
    let altura = (Number(prompt(`Digite a ${a}º altura:`)));
    somarAlturas += altura;
};
console.log(`A média de alturas é ${somarAlturas/5}`);

//Questão 24
for (let c = 1; c < 101; c++){
    
    if (c % 3 == 0 && c % 5 != 0){
        console.log("Fizz");
    } else if (c % 5 == 0 && c % 3 != 0) {
        console.log("Buzz");
    } else if (c % 3 == 0 && c % 5 == 0){
        console.log("FizzBuzz");
    } else {
        console.log(c);
    };
};

//Questão 25
let somaPares = 0;
let numeral = (String(prompt("Digite um número inteiro:")));


//Questão 26
let valorInvertido: string = '';
let digito = (String(prompt("Digite um número inteiro:")));
for (let u = digito.length - 1; u >= 0; u--){
    valorInvertido += digito[u];
};
console.log(valorInvertido);