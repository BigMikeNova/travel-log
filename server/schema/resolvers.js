import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/User.js';
import Post from './models/Post.js';

const resolvers = {
  Query: {
    async getUser(parent, { id }) {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    async getUserFriends(parent, { id }) {
      try {
        const user = await User.findById(id);
        const friends = await Promise.all(user.friends.map((friendId) => User.findById(friendId)));
        return friends;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    async getFeedPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    async getUserPosts(parent, { userId }) {
      try {
        const posts = await Post.find({ userId });
        return posts;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },

  Mutation: {
    async registerUser(parent, { input }) {
      try {
        const {
          firstName,
          lastName,
          email,
          password,
          location,
          occupation,
        } = input;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hashedPassword,
          location,
          occupation,
          viewedProfile: Math.floor(Math.random() * 1000),
          impressions: Math.floor(Math.random() * 1000),
        });

        const savedUser = await newUser.save();
        return savedUser;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    async loginUser(parent, { input }) {
      try {
        const { email, password } = input;
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          throw new Error('Incorrect password');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        return { user, token };
      } catch (error) {
        throw new Error(error.message);
      }
    },

    async createPost(parent, { input }) {
      try {
        const {
          userId,
          description,
          picturePath,
        } = input;

        const user = await User.findById(userId);
        const newPost = new Post({
          userId,
          firstName: user.firstName,
          lastName: user.lastName,
          location: user.location,
          description,
          userPicturePath: user.picturePath,
          picturePath,
          likes: {},
          comments: [],
        });

        await newPost.save();
        const posts = await Post.find();
        return posts;
      } catch (error) {
        throw new Error(error.message);
      }
    },

    async likePost(parent, { postId, userId }) {
      try {
        const post = await Post.findById(postId);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
          post.likes.delete(userId);
        } else {
          post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
          postId,
          { likes: post.likes },
          { new: true }
        );

        return updatedPost;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

export default resolvers;
