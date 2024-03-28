import React from 'react';
import { auth } from 'firebase/auth';

export const Home = ({user}) => {
  return (
    <div>Welcomeee
     {user && user.email ? (
        <p>{user.email}</p>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  )
}
