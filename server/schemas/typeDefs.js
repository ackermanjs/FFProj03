const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    animalType: String
    savedAnimal: [Animal]
  }
  type Animal {
    _id: ID
    animalSpecies: String
    animalBreed: String
    animalName: String
    animalAge: Number
    animalSex: String
    comments: [Comment]!
  }
  type Auth {
    token: ID!
    user: User
  }
  input animalInput {
    animalSpecies: String
    animalBreed: String
    animalName: String
    animalAge: Number
    animalSex: String
    comments: [Comment]!
  }
  type Query {
    me: User
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveAnimal(animalSpecies:, animalBreed: String, animalName: String, animalAge: Number, animalSex: String): User
    removeAnimal(_id: ID!): User
  }
`;

