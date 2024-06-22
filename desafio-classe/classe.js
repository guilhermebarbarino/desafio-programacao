// Classe genérica que representa um herói de uma aventura
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método que exibe a mensagem de ataque com base no tipo do herói
    atacar() {
        let ataque;

        // Estrutura de decisão para determinar o tipo de ataque
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de criação de objetos da classe Heroi e uso do método atacar
const mago = new Heroi('Gandalf', 1000, 'mago');
const guerreiro = new Heroi('Aragorn', 87, 'guerreiro');
const monge = new Heroi('Shaolin', 30, 'monge');
const ninja = new Heroi('Naruto', 16, 'ninja');

mago.atacar(); // O mago atacou usando magia
guerreiro.atacar(); // O guerreiro atacou usando espada
monge.atacar(); // O monge atacou usando artes marciais
ninja.atacar(); // O ninja atacou usando shuriken
