import { argsToArgsConfig } from 'graphql/type/definition.js';
import { User } from '../models/index.js';

const resolvers = {
    Query: {
        test: async (_parent: any, _args: any, _context: any) => {
            return 'Hello Query!';
        }
    },
    Mutation: {
        test: async (_parent: any, _args: any, _context: any) => {
            return 'Hello Mutation!';
        }
    }
}

export default resolvers;