# DOM
- Document Object Model
- Estrutura de um arquivo na web
- Representa documentos HTML e XML
- Interface de programação
- Não é uma linguagem de programação
- É essêncial para o JS entender o modelo de paginas web

## Para que serve?
- Alterar a estrutura
- Alterar o estilo
- Alterar o conteúdo

# Como?
- Disponibilizando API (Aplication Programming Interface)
- Rotinas e padrões estabelecidos
- Métodos (funções)
- Árvore de elementos
- Seletores
- Objetos (nós / nodes)

## Exemplo html
...

<html>
    <head></head>
    <body></body>
</html>

## Exemlo Obj
...

objeto = {
    html : {
        head : {};
        body : {
            h1 : {
            }
        }      
    }
}
...

## DOM x JS
- O DOM pode ser usado por outras linguagens
- Sem o DOM o JS não teria noção da página

### Vantagens de usar o JavaScript
- Código é executado por navegadores
- Tornar as páginas dinâmicas
- Evitar requisições desnecessárias (performance)
- SPA (Single Page Applications)
- Reagir rapidamente a ações dos usuários

### Desvantagens de usar o JavaScript
- Código é executado por navegadores
- O conteúdo não fica visivél para indexadores de busca
- Alterações em tempo de execução não ficam salvas no documento


### Exemplos
Seleciona o objeto e disponibiliza (métodos / funções).callback

- document.getElementById(id)
- document.getElementBtTagName('div')
- document.createElement('div')
- parentNode.appendChild(node) // html.ppendChild('body')
- element.innerHTML
- element.style
- element.setAttribute('name')
- element.getAttribute('name')
- element.addEventListner()
- window.location
- window.onload (en-US)
- console.log()
- window.scrollTo(x, y)

## Seletores
- Tipos de seletores: Tags, Id, Class, Name, Query
- Callback
- getElementById()
- getElementsByTagName()
- getElementsByName()
- getElementsByClassName()


## Formulários
- Precisamos evitar que o usuário passe dados incorretos
- Ou seja, para direcionar melhor o uso do nosso sistema
- Proteger a injeção de código malicioso
- Evitar erros de processamentos
- Formatar dados para facilitar o processamento
- Regex (expressões regulares)


### Referências
- DOM: https://dom.spec.whatwg.org/
- Tecnologias JS: https://developer.monzilla.org/pt-BR/docs/Web/JavaScript/JavaScript_technologies_overview
- Motores de execução: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderiza%C3%A7%C3%A3o
- Expressões Regulares: https://developer.monzilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions 



