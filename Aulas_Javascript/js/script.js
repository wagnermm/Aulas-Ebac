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

        // Formulario de envio de dados para calculo de media

        const formulario1 = document.getElementById('formulario-01');

    if(formulario1)
        formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });


        function validaCampo(elemento){

            elemento.addEventListener('focusout', function(event) {
        
                event.preventDefault();
        
                if(this.value == ""){
                    document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                } else {
                    document.querySelector('.mensagem').innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                }
        
            });
        
        }
        
        function validaCampoNumerico(elemento){
        
            elemento.addEventListener('focusout', function(event) {
        
                event.preventDefault();
        
                if(this.value != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
                    document.querySelector('.mensagem').innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                } else {
                    document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                }
        
            });
        
        }
        
        
        function validaEmail(elemento){
        
            elemento.addEventListener('focusout', function(event) {
        
                event.preventDefault();
        
                const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
                if(this.value.match(emailValido)) {
                    document.querySelector('.mensagem').innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                } else {
                    document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                }
        
            });
        
        }
        
        
        let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
        let camposNumericos = document.querySelectorAll('input.numero');
        let camposEmail = document.querySelectorAll('input.email');
        
        for( let emFoco of camposObrigatorios) {
            validaCampo(emFoco);
        }
        
        for( let emFoco of camposNumericos) {
            validaCampoNumerico(emFoco);
        }
        
        for( let emFoco of camposEmail) {
            validaEmail(emFoco);
        }