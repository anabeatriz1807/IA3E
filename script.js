const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você pratica alguma atividade física?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Sim, eu pratico atividades física e gosto bastante. "
        },
        {
            texto: "Não",
            afirmação: "Não gosto de atividade fíica e não pratico."
        }
        ]
    },
    {
        enunciado: "Com qual frequência você pratica esportes?",
        alternativas: [{
            texto: "2 vezes na semana ou mais",
            afirmação: "Pratico esportes mais de 2 vezes na semana."
        },
        {
            texto:"nenhuma vez na semana",
            afirmação:"Não pratico esportes."
        }
        ]
    },
    {
        enunciado: "Você considera ter uma vida saudável?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Considero ter uma vida saudável pois me cuido."
        },
        {
            texto: "Não",
            afirmação: "Não conidero ter uma via saudável pois não ligo muito para a minha saúde."
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
