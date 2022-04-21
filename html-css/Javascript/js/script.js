function calcularMedia (notas) {

    var soma = 0;
    for( c = 0; c < notas.length; c++ ) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

function aprovacao (notas) {

	let media = calcularMedia (notas);
	
  	let condicao = media >= 7 ? "aprovado" : "reprovado";
    
    return 'media: ' + media + ' - resultado: ' + condicao;
  
}

//console.log( "Média: " + calcularMedia([10, 8, 7, 6]));
//console.log( aprovacao([10, 8, 7, 6]));


        // Função Recursivas

        function contagemRegressiva(numero) {

            console.log(numero);

            let proximoNumero = numero - 1;

            if(proximoNumero > 0)
                contagemRegressiva(proximoNumero);

        }

        //contagemRegressiva(10);

        document.addEventListener('submit', function(event){

            event.preventDefault();
            event.stopImmediatePropagation();

            let formulario = document.getElementById('formulario-01');

            let dados = new FormData(formulario);

            let objeto = {};

            let notas = [];

            for(let key of dados.keys()) {
                objeto[key] = dados.get(key);

                // adiciona itens no array
                notas.push(parseInt(dados.get(key)));
            }

            console.log(notas);

            console.log(objeto);

            document.getElementById('resultado').innerHTML = aprovacao(notas);
        });