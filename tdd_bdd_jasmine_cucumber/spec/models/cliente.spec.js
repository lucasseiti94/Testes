const Cliente = require('../../models/cliente')

describe('Clientes', () => {
    //beforeeach rodará a função antes da execução dos it subsequentes
    beforeEach(() => {

    }) 

    it('retorna todos', () => {
        let clientes = Cliente.todos()
        expect(clientes.length).toEqual(10)
    })


    it('Retorna classe cliente', () => {
        let cliente = Cliente.primeiro()
        expect(cliente.id).not.toBeUndefined()
        expect(cliente.nome).not.toBeUndefined()
        expect(cliente.telefone).not.toBeUndefined()       
    })

    it('Nome do cliente upperCase', () => {
        let cliente = Cliente.primeiro()
        cliente.nome = 'Lucas'
        expect(cliente.nomeUpperCase()).toEqual('LUCAS')
    })
})