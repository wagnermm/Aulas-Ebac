function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.telaMensagem').innerHTML = "Por favor, preencha os campos obrigatório";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.telaMensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });
}

let camposObrigatorios = document.querySelectorAll('input.form-control');
for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}


function disableButton() {
    let obrigatorio = document.querySelector('#obrigatorio').value;
    if(obrigatorio) {
        document.querySelector('#btn').disabled = false;
        return
    }
    document.querySelector('#btn').disabled = true;
}