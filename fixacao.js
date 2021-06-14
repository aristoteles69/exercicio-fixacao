// 1 – Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final.
function question1(text) {
	return `Olá ${text} !`;
}
// 2 – Crie uma função que dado dois valores e uma Callback (passados como parâmetros), mostre no console a soma, subtração, multiplicação e divisão desses valores, dependendo da função Callabck.
function question2(valor1, valor2, callabck) {
	console.log(callabck(valor1, valor2));
}
question2(12, 3, function (v1, v2) {
	return v1 - v2;
}};
