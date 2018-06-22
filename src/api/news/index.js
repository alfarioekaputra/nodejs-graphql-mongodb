import newsModel from "./model";
import newsResolvers from "./resolvers";
import { loadGQLFile } from "../../utils/gqlLoader";

export default {
    model: newsModel,
    resolvers: newsResolvers,
    typeDefs : loadGQLFile('news/schema.graphql')
}