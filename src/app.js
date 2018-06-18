import mongoose from 'mongoose';
import { GraphQLServer } from 'graphql-yoga'

import graphqlConfig from './schema';

const PORT = 3005;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/news');

const options  = {
    tracing :true,
    debug: true,
    port: PORT,
    endpoint: '/graphql',
    playground: '/docs'
}

const server = new GraphQLServer(graphqlConfig)
server.start(options,() => console.log(`server is running on port : ${PORT}`))