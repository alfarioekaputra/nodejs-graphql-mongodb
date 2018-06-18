import {resolvers} from './resolvers';

const typeDefs = `
    type News {
        _id: ID
        title: String!
        content: String!
        author: String!
    }
    type Query {
        getNews(_id: ID) : News
        allNews: [News]
    }

    input NewsInput{
        title: String!
        content: String!
        author: String!
    }

    type Mutation {
        createNews(input: NewsInput) : News
        updateNews(_id: ID!, input: NewsInput) : News
        deleteNews(_id: ID!) : News
    }
`;

export default {
    typeDefs,
    resolvers
}