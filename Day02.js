/*
Sabe quando você se cadastra em um site e, logo em seguida, quando faz o seu login, ele já te chama pelo seu nome? É isso que você vai fazer no desafio de hoje!
Quando você cria algum sistema, site ou aplicativo, é comum querer colocar alguns toques personalizados para tornar a experiência na sua aplicação mais rica e dinâmica.
Fazer isso através da programação pode não ser uma tarefa muito fácil. Dependendo do nível de customização que você quiser implementar, a quantidade de código que 
você precisará escrever pode ser imensa.
Mas é claro que você pode começar de uma maneira mais simples. Para isso, o importante é entender como capturar e armazenar valores dentro de variáveis. 
E é nisso que eu vou te ajudar hoje!
Variáveis são os blocos básicos de construção de qualquer sistema e são essenciais para processar qualquer tipo de informação, seja ela de uma pessoa logada 
no sistema ou mesmo para exibir detalhes de produtos em um catálogo de e-commerce.
Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. 
Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.
No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.

*/


const nome = prompt("Qual é o seu nome?");
const rspNome = nome ;

const idade = prompt("Quantos Anos Voce tem ?");
const rspIdade = idade;

const linguagem = prompt("Qual linguagem de programação você está estudando?");
const rspLinguagem = linguagem;

alert ("Olá " + rspNome + " ,Voce tem " + rspIdade + " e já esta aprendendo " + rspLinguagem);


const pergunta = prompt("Você gosta de estudar " + rspLinguagem + " ? Responda com o número 1 para SIM ou 2 para NÃO.")
const resposta = pergunta;

if (resposta == 1) {
    alert ("Muito bom! Continue estudando e você terá muito sucesso.");
}

if(resposta == 2){
    alert ("Ahh que pena... Já tentou aprender outras linguagens?");
}



