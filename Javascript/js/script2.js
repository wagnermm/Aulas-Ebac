
        function validaCampo(elemento){

            elemento.addEventListener('focusout', function(event) {
        
                event.preventDefault();
        
                if(this.value == ""){
                    document.querySelector('.mensagem').innerHTML = "Por favor, verifique os campos destacados";
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
        
        function validaCep(elemento){
        
            elemento.addEventListener('focusout', function(event) {
        
                event.preventDefault();
        
                const cepValido = /^[0-9]{5}[-][0-9]{3}$/; 
        
                if(this.value.match(cepValido)){
                    document.querySelector('.mensagem').innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                } else {
                    document.querySelector('.mensagem').innerHTML = "Por favor, verifique os campos destacados";
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
                    document.querySelector('.mensagem').innerHTML = "Por favor, verifique os campos destacados";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                }
        
            });
        
        }


        function validaCampoUf(elemento) {

            elemento.addEventListener('focusout', function(event) {

                event.preventDefault();

                const ufValido = /^[a-z]{2}$/i;
                if(this.value.match(ufValido)) {
                    document.querySelector('.mensagem').innerHTML = "";
                    this.classList.remove('erro');
                    this.parentNode.classList.remove('erro');
                } else {
                    document.querySelector('.mensagem').innerHTML = "Por favor, verifique os campos destacados";
                    this.classList.add('erro');
                    this.parentNode.classList.add('erro');
                    return false;
                }


            });

        }
        
        
        let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
        let camposCep = document.querySelectorAll('input.cep');
        let camposEmail = document.querySelectorAll('input.email');
        let camposUf = document.querySelectorAll('input.uf');
        
        for( let emFoco of camposObrigatorios) {
            validaCampo(emFoco);
        }
        
        for( let emFoco of camposCep) {
            validaCep(emFoco);
        }
        
        for( let emFoco of camposEmail) {
            validaEmail(emFoco);
        }

        for( let emFoco of camposUf) {
            validaCampoUf(emFoco);
        }