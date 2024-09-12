const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta da Inteligencia Artificial?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado:"Você usa a IA no seu dia a dia?",
        alternativas:["Sim","Nâo"]
    },
    {
        enunciado:"Você considera a IA importante nos dias de hoje?",
        alternativas:["Sim","Não"]
    }
]
let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for
}