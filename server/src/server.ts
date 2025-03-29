import express from 'express';
import type { Request, Response } from 'express';
import db from `./config/connection.js`;
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import {typeDefs, resolvers} from './schemas/index.js';

const server = new ApolloServer({typeDefs, resolvers});

const startApolloServer = async () => {
   await server.start();
    await db();

    const app = express();
    const PORT = process.env.PORT || 3001;

    app.use(express.json());

    app.use('/graphql', expressMiddleware(server,
        {

        }
    ))
    
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../../client/dist')));

        app.get('*', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
        })
    }

    app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`);
        console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
    })
}

startApolloServer();