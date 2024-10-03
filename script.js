const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta da Inteligencia Artificial?",
        alternativas:[{
            texto:"Sim",
            afirmação:"Sim, porque me ajuda em alguns afazeres"
    },
    {
        texto:"Não",
        afirmação:"Não, pois não me ajuda em nada"
    
    }
]
    {
        enunciado:"Você usa a IA no seu dia a dia?",
        alternativas:[{
            texto:"Sim",
            afirmação:"Sim, uso no meu dia a dia"
            },
            {
                texto:"Não"
                afirmação:"Não uso no dia a dia"
            }
        ]
    },
    {
        enunciado:"Você considera a IA importante nos dias de hoje?",
        alternativas:[ {
            texto:"Sim"
            afirmação:"Considero importante"
        },
    {
        texto:"Não"
        afirmação:"Não considero importante"
    }
        ]
    }
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
    for(const alternativas of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativas.textContent = alternativas;
        botaoAlternativa.addEventListener("click", funcion(){
posicao++;
mostraPergunta();
        })
        caixaAlternativa.appendChild(botaoAlternativa);
    }
}
mostraPergunta();
