// src/components/MyComponent.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      firstName
      lastName
      email
    }
  }
`;

const MyComponent = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>User List</h1>
      {data.users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
