/*Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. 
Mas agora, o jogo vai ser contra o próprio computador!
Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido. */

//const numeroSorteio = 8;
const nAletorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);
console.log (nAletorio)


const pNumeroEscolhido = prompt("Escolha um número de 1 a 10");
console.log (nAletorio)

if (pNumeroEscolhido == nAletorio)
{
    alert("Parabens Voce acertou !!!!");
}

else 

    {
    alert("Errou !!! escolha outra numero");
    
     
    const sNumeroEscolhido = prompt("Escolha um número de 1 a 10");
    console.log (nAletorio)
                if (sNumeroEscolhido == nAletorio)
                {
                    alert("Parabens Voce acertou !!!!");
                }

                else {
                    alert("Errou !!! escolha outra numero");
                               
                    const TNumeroEscolhido = prompt("Escolha um número de 1 a 10");
                    console.log (nAletorio)
                            if (TNumeroEscolhido == nAletorio){
                                alert("Parabens Voce acertou !!!!");
                            }
                            
                            else {
                                alert("Errou !!! Fim de Jogo");
                            }

                }
            }
            

