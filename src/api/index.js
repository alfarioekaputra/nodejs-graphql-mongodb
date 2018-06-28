import news from './news';
import auth from './auth';

export default {
    resolvers: Object.assign({}, news.resolvers, auth.resolvers),
    typeDefs: [news.typeDefs, auth.typeDefs].join(' '),
    context: {
        models: {
            news: news.model,
            user: auth.model
        }
    } 
}