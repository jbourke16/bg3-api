import { gql } from 'apollp-server-express';

export const typeDefs = gql`
    type Query {
        hello: String
    }
    `;