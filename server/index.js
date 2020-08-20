const  { GraphQLServer } = require('graphql-yoga');

const messageTypeDef = require('./modules/message/typedef');
const queryTypeDef = require('./modules/query/typedef');
const mutationTypeDef = require('./modules/mutation/typedef');

const queryResolvers = require('./modules/query/resolver');
const mutationResolvers = require('./modules/mutation/resolver');

const typeDefs = `
    ${messageTypeDef}

    ${queryTypeDef}

    ${mutationTypeDef}
`

const resolvers = {...queryResolvers, ...mutationResolvers};

const server = new GraphQLServer({typeDefs, resolvers});

server.start(({port}) => {
    console.log(`Server started on PORT:${port}`)
})