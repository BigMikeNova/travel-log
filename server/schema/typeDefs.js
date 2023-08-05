import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    picturePath: String
    friends: [User]
    location: String
    occupation: String
    viewedProfile: Int
    impressions: Int
    createdAt: String
    updatedAt: String
  }

  type Post {
    _id: ID!
    userId: String!
    firstName: String!
    lastName: String!
    location: String
    description: String
    picturePath: String
    userPicturePath: String
    likes: [String]
    comments: [String]
    createdAt: String
    updatedAt: String
  }

  type AuthData {
    user: User
    token: String
  }

  type Query {
    getUser(id: ID!): User
    getUserFriends(id: ID!): [User]
    getFeedPosts: [Post]
    getUserPosts(userId: ID!): [Post]
  }

  type Mutation {
    registerUser(input: RegisterInput!): User
    loginUser(input: LoginInput!): AuthData
    createPost(input: CreatePostInput!): [Post]
    likePost(postId: ID!, userId: ID!): Post
  }

  input RegisterInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    location: String
    occupation: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input CreatePostInput {
    userId: ID!
    description: String
    picturePath: String
  }
`;

export default typeDefs;
