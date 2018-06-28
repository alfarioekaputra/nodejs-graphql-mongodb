import news from './news';
import auth from './auth';
import { merge } from 'lodash';

export default {
    resolvers: merge({}, news.resolvers, auth.resolvers),
    typeDefs: [news.typeDefs, auth.typeDefs].join(' '),
    context: req => ({
        ...req,
        models: {
            news: news.model,
            user: auth.model
        }
    })
}