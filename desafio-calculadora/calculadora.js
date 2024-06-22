// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularSaldoERank(vitorias, derrotas) {
    // Calculando o saldo de partidas ranqueadas
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Estrutura de decisão para determinar o nível do jogador com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornando os resultados
    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

// Exemplo de uso da função
let vitorias = 85;
let derrotas = 20;

let resultado = calcularSaldoERank(vitorias, derrotas);

// Saída da mensagem com o saldo e nível do herói
console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
