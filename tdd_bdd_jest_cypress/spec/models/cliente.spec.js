const Cliente = require('../../models/cliente')

describe('Clientes', () => {
    //beforeeach rodará a função antes da execução dos it subsequentes
    beforeEach(() => {

    }) 

    test('retorna todos', () => {
        let clientes = Cliente.todos()
        expect(clientes.length).toEqual(10)
    })


    test('Retorna classe cliente', () => {
        let cliente = Cliente.primeiro()
        expect(cliente.id).not.toBeUndefined()
        expect(cliente.nome).not.toBeUndefined()
        expect(cliente.telefone).not.toBeUndefined()       
    })

    test('Nome do cliente upperCase', () => {
        let cliente = Cliente.primeiro()
        cliente.nome = 'Lucas'
        expect(cliente.nomeUpperCase()).toEqual('LUCAS')
    })
})