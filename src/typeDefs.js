import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Character {
        id: ID!
        name: String!
        race: String
        class: String
        missions: [Mission]
    }

    type Mission {
        id: ID!
        title: String!
        description: String
        difficulty: String
    }

    type Query {
        characters: [Character]
        character(name: String!): Character
        missions: [Mission]
    }
    `;