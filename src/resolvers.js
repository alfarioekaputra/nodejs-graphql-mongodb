import News from './models/news';
 
export const resolvers = {
    Query: {
        async allNews(){
            return await News.find();
        },
        async getNews(_,{_id}){
            return await News.findById(_id);
        }
    },
    Mutation: {
        async createNews(_, {input}){
            return await News.create(input);
        },
        async updateNews(_, {_id, input}){
            return await News.findByIdAndUpdate({_id}, input, {new: true});
        },
        async deleteNews(_, {_id}){
            return await News.findByIdAndRemove(_id);
        }
    }
}