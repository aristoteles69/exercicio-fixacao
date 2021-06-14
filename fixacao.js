// 1 – Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final.
function q1(text) {
	return `Olá ${text} !`;
}
// 2 – Crie uma função que dado dois valores e uma Callback (passados como parâmetros), mostre no console a soma, subtração, multiplicação e divisão desses valores, dependendo da função Callabck.
function q2(valor1, valor2, callabck) {
	console.log(callabck(valor1, valor2));
}
q2(12, 3, function (v1, v2) {
	return v1 - v2;
}};
//3 - Crie uma função que recebe um parâmetro e uma callback que retorna uma outra função que recebe um parâmetro e chama essa callback que verifica se um número inteiro passado na primeira função como parâmetro é divisível por um outro numero passado pela função interna e retorne true ou false.
function q3(v1, callback) {
 return function q3_2(){
     callback(v1,v2);
 }
}

var q3PegaValores = q3(12, function (v1,v2){
    if (v1 % v2 == 0) {
        return true;
    } else {return false};
})

q3PegarValores(8);

//4 - Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.
function verificadordemes (m){
    switch (m) {
        case 1: 
            console.log('janeiro');
            break;
        case 2:
            console.log('fevereiro');
            break;
        case 3:
            console.log('março');
            break;
        case 4:
            console.log('abril');
                break;
        case 5:
            console.log('maio');
            break;
        case 6:
            console.log('junho');
                break;
        case 7:
            console.log('julho');
                break;
        case 8:
            console.log("agosto");
            break;
        case 9: 
            console.log("setembro");
            break;
        case 10:
            console.log("outubro");
            break;
        case 11: 
            console.log("novembro");
            break;
        case 12: 
            console.log("dezembro");
            break;
        default:
            console.log("Você passou um valor inválido");
            break;
    }
}

verificadordemes(5);
//5 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo dependendo da função Callback.
function q5(v1, v2, callback) {
    console.log(callback(v1,v2));
}

q5(40,23, function(v1,v2) {
    if(v1 >= v2) {
        return v1;
    }
})
