const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    username: String!
    email: String
    animal: String
    savedAnimal: [Animal]
  }
  type Animal {
    species: String
    breed: String
    name: String
    age: Number
    sex: String
    comments: [Comment]!
  }
  type Auth {
    token: ID!
    user: User
  }
  input animalInput {
    species: String
    breed: String
    name: String
    age: Number
    sex: String
    comments: [Comment]!
  }
  type Query {
    me: User
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveAnimal(species:, breed: String, name: String, age: Number, sex: String): User
    removeAnimal(_id: ID!): User
  }
`;

