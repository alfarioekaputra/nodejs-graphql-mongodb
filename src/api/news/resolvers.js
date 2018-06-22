export default {
    Query: {
        async allNews(_, args, ctx){
            return await ctx.models.news.find();
        },
        async getNews(_,{_id}, ctx){
            return await ctx.models.news.findById(_id);
        }
    },
    Mutation: {
        async createNews(_, {input}, ctx){
            return await ctx.models.news.create(input);
        },
        async updateNews(_, {_id, input}, ctx){
            return await ctx.models.news.findByIdAndUpdate({_id}, input, {new: true});
        },
        async deleteNews(_, {_id}, ctx){
            return await ctx.models.news.findByIdAndRemove(_id);
        }
    }
}