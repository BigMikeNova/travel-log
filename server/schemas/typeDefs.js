const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    profilePicture: String
    bio: String
    posts: [Post]!
    following: [User]
    followers: [User]
  }

  type Post {
    id: ID!
    user: User!
    photos: [String]!
    itinerary: String!
    budget: Float!
    description: String
    savedBy: [User]!
  }

  type Auth {
    token: String!
    user: User!
  }

  type Query {
    getUsers: [User]!
    getUser(id: ID!): User
    getPosts: [Post]!
    getUserPosts(userId: ID!): [Post]
  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): Auth!
    login(email: String!, password: String!): Auth!
    createPost(userId: ID!, photos: [String]!, itinerary: String!, budget: Float!, description: String): Post
    followUser(userId: ID!, followerId: ID!): User
    savePost(userId: ID!, postId: ID!): Post
  }
`;

module.exports = typeDefs;
