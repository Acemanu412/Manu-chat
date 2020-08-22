const  { GraphQLServer, PubSub } = require('graphql-yoga');

const messageTypeDef = require('./modules/message/typedef');
const queryTypeDef = require('./modules/query/typedef');
const mutationTypeDef = require('./modules/mutation/typedef');
const subscriptionTypeDef = require('./modules/subscription/typedef');

const queryResolvers = require('./modules/query/resolver');
const mutationResolvers = require('./modules/mutation/resolver');
const subscribersResolvers = require('./modules/subscription/resolver');

const typeDefs = `
    ${messageTypeDef}

    ${queryTypeDef}

    ${mutationTypeDef}

    ${subscriptionTypeDef}
`

const resolvers = {...queryResolvers, ...mutationResolvers, ...subscribersResolvers};

const pubSub = new PubSub();
const server = new GraphQLServer({typeDefs, resolvers, context: { pubSub }});

server.start(({port}) => {
    console.log(`Server started on PORT:${port}`)
})