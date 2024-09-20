//criando a leitura do completa DOM
document.addEventListener('DOMContentLoaded', function(){
    //recuperando elementos com a tag data-tab-button - Botões do Grid
    const buttons = document.querySelectorAll('[data-tab-button]');
    //recuperando elementos do faq
    const questions = document.querySelectorAll('[data-faq-question]');
    //recuperando elementos com a tag data-tab-id - Elementos UL do Grid
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    //Vamos percorrer os botões (iterar) através do for
    for (let i = 0; i< buttons.length; i++){
        //pegando o evento do clink do botão e retornando na função ele próprio
        buttons[i].addEventListener('click', function(botao){
            //dentro da função eu crio uma variavel para retorno do clique
            //abaixo guardo na const abaAlvo o conteúdo da tabButton
            const abaAlvo = botao.target.dataset.tabButton;
            //precisamos encontrar o Seletor que tem o conteúdo to tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            //função de esconder todos os grids removendo deles a classe is--actrive
            escondeTodasAbas();
            //pegamos o aba que tem o Seletor e adicionamos nele a classe is-active
            aba.classList.add('shows__list--is-active');
            
            //removendo classe dos botões
            removeBotaoAtivo();
            //adicionando a classe ao botão ativo
            botao.target.classList.add('shows__tabs__button--is-active')
            
            console.log(aba);
            console.log(botao);
            console.log(abaAlvo);
        })
    }
    //percorrendo os elementos questions e ouvindo o click
    for (let i = 0; i < questions.length; i++){ 
        questions[i].addEventListener('click', abreOuFechaResposta);
        //addEventListener retorna por padrão elemento clicado 
    }

})

//Função para abrir e fechar o faq
function abreOuFechaResposta(elemento){ //passamos como parâmetro o elemento clicado abreOuFec
    //guardadando a classe a ser inserida
    const classe = 'faq__questions__item--is-open';
    
    //Recuperando elemento pai
    const elementoPai = elemento.target.parentNode; //pega o pai do elemento
    console.log(elemento.target);
    //inserindo e removendo a classe com o clique
    elementoPai.classList.toggle(classe);

}


//função de remover botão ativo
function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i< buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

//função que esconde todas as abas
function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for(let i = 0; i< tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

