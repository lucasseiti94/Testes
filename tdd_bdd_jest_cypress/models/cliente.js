module.exports = class Cliente {
    constructor(_id=0, _nome="", _telefone="") {
        this.id = _id
        this.nome = _nome
        this.telefone = _telefone
    }

    static primeiro() {
        return new Cliente
    }

    nomeUpperCase() {
        return this.nome.toUpperCase()
    }

    static todos() {
        return [
            new Cliente(1, "Lucas 1", "4856456"),
            new Cliente(2, "Lucas 2", "654465"),
            new Cliente(3, "Lucas 3", "564645"),
            new Cliente(4, "Lucas 4", "6854648"),
            new Cliente(5, "Lucas 5", "63546513"),
            new Cliente(6, "Lucas 6", "6854+8432"),
            new Cliente(7, "Lucas 7", "63511563685"),
            new Cliente(8, "Lucas 8", "563454163"),
            new Cliente(9, "Lucas 9", "5645641"),
            new Cliente(10, "Lucas 10", "12345689"),
        ]
    }
}

