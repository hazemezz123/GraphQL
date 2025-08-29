export const typesDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]! 
    } 
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        reviews: [Review]
        games: [Game]
        authors: [Author]
    }
`;

// int - Numbers
// float - decimal
// string - Strings
// boolean - true or false
// ID - unique identifier
