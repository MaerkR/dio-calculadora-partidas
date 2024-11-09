calcRank(99, 20);
calcRank(30, 3);
calcRank(60, 20);

function calcRank(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas;

    if (vitorias <= 10) {
        nivelHeroi = "Ferro";
    } else if (vitorias <= 20) {
        nivelHeroi = "Bronze";
    } else if (vitorias <= 50) {
        nivelHeroi = "Prata";
    } else if (vitorias <= 80) {
        nivelHeroi = "Ouro";
    } else if (vitorias <= 90) {
        nivelHeroi = "Diamante";
    } else if (vitorias <= 100) {
        nivelHeroi = "Lendário";
    } else {
        nivelHeroi = "Imortal";
    }

    console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivelHeroi}**`)
}


