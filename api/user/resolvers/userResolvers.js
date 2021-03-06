const arrayUsers = [
    {
        nome: 'Ana',
        ativo: true
    },
    {
        nome: 'Tony',
        ativo: false
    }
]

const userResolvers = {
    Query: {
        users: () => arrayUsers,
        firstUser: () => arrayUsers[0]
    }
}

module.exports = userResolvers