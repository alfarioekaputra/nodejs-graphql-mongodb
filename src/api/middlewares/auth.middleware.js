import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';

import { APP_SECRET } from '../../config';

async function requireAuth(resolver, parent, args, ctx, info) {
  const Authorization = ctx.request.get('Authorization');
  if (!Authorization) {
    throw new AuthenticationError('Authorization header is missing');
  }
  const token = Authorization.replace('Bearer ', '');
  const { userId } = jwt.verify(token, APP_SECRET);
  const user = await ctx.models.user.findOne({ _id: userId });
  if (!user) {
    throw new AuthenticationError('UnAuthenticated');
  }
  ctx.userId = user._id;
  return resolver(); //call the next resolver
}

export const authMiddleware = {
    Query: {
        allNews: requireAuth
    },
    Mutation: {
        createNews: requireAuth
    }
};