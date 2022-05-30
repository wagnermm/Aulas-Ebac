
# Operadores

## Aritméticos: retornam o resultado de uma operação
+  Somar
-  Subtrair
*  Multiplicar
/  Dividir
%  Resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true / false)
< menor que
> maior que
<= menor ou igual
>= maior ou igual









## Comparadores lógicos: teste lógico, retorno booleano (true / false)
==      igualdade entre sentenças (valor)
!=      diferença entre sentenças (valor)
===     igualdade entre sentenças (valor e tipo)
!==     diferença entre sentenças (valor e tipo)

a == b = true
a != b = false

* Atribuição
a = b
a = 4


## Operadores de lógica e junção lógica
!       NÃO (NOT)
&&      E (AND)
||      OU (OR)


O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

### Exemplos:

a != b     // o valor de a é diferente de b
x === y    // o valor e o tipo de x são diferentes de y
!a == b    // o valor de a não é igual ao valor de b


### As condições lógicas são convertidas em númros binários
true é equivalente a 1
false é equivalente a 0

### Operador lógico de atribuição

Tem a capacidade de atribuir a valor a uma variável a partir de uma condição lógica, economiza IFs

Exemplo:

var meuCarro = cor == "preto" ? "preto" : "branco";


## If
if (...) {
    ...
}

## Else
else (...) {

}

if (cor == "preto") {
    meuCarro = "preto";
} else {
    meuCarro = "cinza";
}


## Else if
else if (...) {

}


* Exemplo
if (cor == "preto") {
    meuCarro = "preto";
} else if (cor == "vermelho") {
    meuCarro = "cinza";
} else if (cor == "amarelo"){
    meuCarro = "branco";
} else {
    meuCarro = "azul";
}
    
    
## Switch

switch (cor) {
    case 'branco' :
       meuCarro = "branco"
       break;
    case 'vermelho' :
       meuCarro = "vermelho"
       break;
    case 'amarelo' :
       meuCarro = "amarelo"
       break;
    default :
        console.log('não temos a cor desejada')
}

## media
var nota1 = "10";
var nota2 = "9";
var nota3 = "8";
var nota4 = "7";
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if ( media > 8 ){
    console.log("aluno aprovado")
} else {
    console.log ("aluno em recuperação")
}


## Laços de repetição


for([expressaoinicial]; [condicao]; [incremento])

while ([condicao]) {
    [execucao]
}

var contador = 0;
while( 1 < 10) {
    contador++
}

var hora = 23;
while(hora < 0) {
    
    console.log(hora);
    hora--;
}
...

do {
    execução
}while (condição)


...

// Fazer revisão do carro aos 10km
var km;
var revisao = 3
for(km = 0; km <= revisao; km++){
    console.log('apenas' + km + 'kms entao pode rodar');
}

### Cálculo de média de alunos

var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7]
]

var nota = 0;
for (i = 0; i < alunos.length; i++){

    nota = 0
    aluno = alunos[i]
    console.log('Aluno:' + aluno [i]

    for( c = 0; c < aluno.length; c++ ){
        nota += alunos[c];
    }

    media = nota / 4;

    if (media >= 7) {
        resultado = 'aluno arovado';
    } else {
        resultado = 'aluno reprovado';
    }

    console.log("media: " + media + " - " + resultado);

}
...

## Funções

- Evitar a repetição do código
- Realizar chamadas dinâmicas de algorítmos


function calcularMedia(notas) {

    var soma = 0;
    for( c = 0; c < notas.length; c++ ) {
        soma += notas [c];
    }

    media = soma / notas.length;
    return media;
}

console.log('Média: ' + calcularMedia([8, 8]))

function aprovacao (notas) {

		let media = calcularMedia (notas);
	
  	let condicao = media >= 7 ? "aprovado" : "reprovado";
    
    return 'media: ' + media + ' - resultado: ' + condicao;
  
}

//console.log( "Média: " + calcularMedia([8, 8]));
console.log( aprovacao([8, 8]));

//console.log( "Média: " + calcularMedia([8, 10]));
//console.log( aprovacao (calcularMedia([8, 10])));

//console.log( "Média: " + calcularMedia([9, 6]));
//console.log( aprovacao (calcularMedia([9, 6])));
