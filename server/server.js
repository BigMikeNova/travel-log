const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async () => {
  try {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      });
    });
  } catch (error) {
    console.error('Error starting Apollo Server:', error);
  }
};

startApolloServer();

// Import and use the API routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// ... more code

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
  
