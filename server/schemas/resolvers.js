const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    getUsers: async (_, __, { dataSources }) => {
      return dataSources.userAPI.getUsers();
    },
    getUser: async (_, { id }, { dataSources }) => {
      return dataSources.userAPI.getUserById(id);
    },
    getPosts: async (_, __, { dataSources }) => {
      return dataSources.postAPI.getPosts();
    },
    getUserPosts: async (_, { userId }, { dataSources }) => {
      return dataSources.postAPI.getPostsByUserId(userId);
    },
  },
  Mutation: {
    signUp: async (_, { username, email, password }, { dataSources }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await dataSources.userAPI.createUser({
        username,
        email,
        password: hashedPassword,
      });
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      return { token, user };
    },
    login: async (_, { email, password }, { dataSources }) => {
      const user = await dataSources.userAPI.getUserByEmail(email);
      if (!user) {
        throw new Error('No such user found');
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Invalid password');
      }
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      return { token, user };
    },
    createPost: async (_, { userId, photos, itinerary, budget, description }, { dataSources }) => {
      return dataSources.postAPI.createPost({ userId, photos, itinerary, budget, description });
    },
    followUser: async (_, { userId, followerId }, { dataSources }) => {
      return dataSources.userAPI.followUser({ userId, followerId });
    },
    savePost: async (_, { userId, postId }, { dataSources }) => {
      return dataSources.postAPI.savePost({ userId, postId });
    },
  },
};

module.exports = resolvers;
