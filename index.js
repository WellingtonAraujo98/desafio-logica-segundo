let nome = "well";
var saldoVitoria = Number.parseInt(0)
var escolha = 0
var readlineSync = require('readline-sync');

function adicionarVitoria(saldoAtual){
    var numeroVitoria = readlineSync.question("quantas vitorias deseja adicionar: ")
    numeroVitoria = Number.parseInt(numeroVitoria)
    saldoAtual = (saldoAtual + numeroVitoria)
    return saldoAtual
}

function adicionarDerrota(saldoAtual) {
    var numeroDerrotas = readlineSync.question("quantas desejas deseja adicionar: ")
    numeroDerrotas = Number.parseInt(numeroDerrotas)
    saldoAtual = (saldoAtual - numeroDerrotas)
    return saldoAtual
}


while (escolha != 4) {
    console.log()
    console.log("Digite 1 para adicionar vitoria(s)")
    console.log("Digite 2 para adiconar derrota(s)")
    console.log("Digite 3 para exibir rank atual")
    console.log("digite 4 para encerrar o programa")
    escolha = (readlineSync.question())
    console.log()
    if (escolha == 1) {
        saldoVitoria = adicionarVitoria(saldoVitoria)
    } else if (escolha == 2) {
        saldoVitoria = adicionarDerrota(saldoVitoria)
    } else if (escolha == 3) {
        switch (true)
        {
            case (saldoVitoria < 10):
                nivel = "Ferro";
                break;
            case (saldoVitoria <= 25):
                nivel = "Bronze";
                break;
            case (saldoVitoria <= 50):
                nivel = "Prata";
                break;
            case (saldoVitoria <= 100):
                nivel = "Ouro";
                break;
            case (saldoVitoria <= 200):
                nivel = "Platina";
                break;
            case (saldoVitoria <= 500):
                nivel = "Imortal";
                break;
            case (saldoVitoria <= 1500):
                nivel = "Radiante";
                break;
            case (saldoVitoria > 3000):
                nivel = "DEUS SUPREMO";
                break;
    
        }
        console.log("O saldo de vitoria do(a) " + JSON.stringify(nome) + " é: " + JSON.stringify(saldoVitoria) + " e esta no nivel: " + JSON.stringify(nivel))
        console.log()
        console.log()
    } else if (escolha == 4) {
        break
    }
}


;