import { loadGQLFile } from '../../utils/gqlLoader';
import userModel from './model';
import authResolvers from './resolvers';

export default {
  model: userModel,
  resolvers: authResolvers,
  typeDefs: loadGQLFile('auth/auth.graphql')
};