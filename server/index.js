const  { GraphQLServer } = require('graphql-yoga');

const server = new GraphQLServer();

server.start(({port}) => {
    console.log(`Server started on PORT:${port}`)
})