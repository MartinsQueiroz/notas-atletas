function notasAtletas(atletas){
	let pontuacaoFinal = [];

	for(let i = 0; i < atletas.length; i++){
		let atleta = atletas[i];
    let notasOrdenadas = [...atleta.notas].sort((a,b) => a-b);

    let mediaDasNotas;
		if(notasOrdenadas.length >= 3){
			mediaDasNotas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
		}else{
			mediaDasNotas = notasOrdenadas
		}
    let soma = 0; 
    mediaDasNotas.forEach(function(nota){
      soma = soma + nota 
    });

    let media = soma / mediaDasNotas.length
		
  pontuacaoFinal.push({nome: atleta.nome, notas: atleta.notas, media: media});
	}
return pontuacaoFinal;
}

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

console.log(notasAtletas(atletas));