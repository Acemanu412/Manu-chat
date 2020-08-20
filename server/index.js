const  { GraphQLServer } = require('graphql-yoga');

const messageTypeDef = require('./modules/message/typedef');
const queryTypeDef = require('./modules/query/typedef');

const queryResolvers = require('./modules/query/resolver');

const typeDefs = `
    ${messageTypeDef}

    ${queryTypeDef}
`

const resolvers = {...queryResolvers};

const server = new GraphQLServer({typeDefs, resolvers});

server.start(({port}) => {
    console.log(`Server started on PORT:${port}`)
})