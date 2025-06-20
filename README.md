# Notas-atletas
 Aplicação criada para receber e calcular notas de um atleta

## Função 
 A função recebe um array de objetos contendo nome de atletas e todas as notas recebidas. E com esse array de objetos que a media de notas (desconsiderando a maior e menor notas recebidas) é processada, extraindo assim o resultado desejado, que poderemos ver ao executar o log da função! 

### Laço For
 O laço for é usado para iterar sobre o array, for(let i = 0; i < atletas.length; i++):

 --- let atleta = atletas[i]; onde i representa o indice atual de cada atelta, a variavel é declarada em cada interação e guarda a referencia do atleta atual que vem do array.

 --- let notasOrdenadas = [...atleta.notas].sort((a,b) => a-b); essa variavel está ordenando o array de notas em ordem crescente

 --- let mediaDasNotas; é declarada para guardar o array de notas usado para calcular a média 

 --- if(notasOrdenadas.length >= 3) e  slice(1, notasOrdenadas.length - 1) verifica se o atelta recebeu mais de três notas e cria um novo array contendo as notas exceto a primeira (menor) e a ultima (maior nota) já que usamos o .sort() para ordenar as notas.


--- let soma = 0;
        mediaDasNotas.forEach(function(nota){
        soma = soma + nota
    });

    Aqui usamos o forEach para acumular a notas já ordenadas e formatadas para calcular a média logo em seguida através de  let media = soma / mediaDasNotas.length

### variavel para guardar o resultado final 
 --- pontuacaoFinal.push({nome: atleta.nome, notas: atleta.notas, media: media});
 Essa variavel é declarada no inicio do código, ela é usada para armazenar o resultado do novo array gerado com as três notas ordenadas e divididas para trazer a media final. 