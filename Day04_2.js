/*Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. 
Mas agora, o jogo vai ser contra o próprio computador!
Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido. */


const nAletorio = Math.floor(Math.random() * (10 - 0 + 1) + 0);
console.log (nAletorio)
let i = 0;

const avisos = ["Errou Voce tem mais 2 chances" , "Errou voce tem mais 1 chance", "Perdeu"] 

while (i < 3)
            {

                let pNumeroEscolhido = prompt("Escolha um número de 1 a 10");
                console.log (pNumeroEscolhido);
                i = i + 1;

                if (pNumeroEscolhido == nAletorio)
                    {
                        alert ("Parabens !!!! Voce Acertou !" )
                        break
                    }
                else 
                    {
                        alert(avisos[i-1])
                    }

            }
        
