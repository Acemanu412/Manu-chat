const  { GraphQLServer } = require('graphql-yoga');
const messageTypeDef = require('./modules/message/typedef');
const queryTypeDef = require('./modules/query/typedef');

const typeDefs = `
    ${messageTypeDef}

    ${queryTypeDef}
`
const server = new GraphQLServer({typeDefs});

server.start(({port}) => {
    console.log(`Server started on PORT:${port}`)
})