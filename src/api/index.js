import news from './news';

export default {
    resolvers: Object.assign({}, news.resolvers),
    typeDefs: [news.typeDefs].join(' '),
    context: {
        models: {
            news: news.model
        }
    } 
}