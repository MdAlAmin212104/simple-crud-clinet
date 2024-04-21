import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
      const user = useLoaderData();
      return (
            <div>
                  <h2>{user.length}</h2>
                  {
                        user.map(user => <p key={user._id}>{user.name} : {user.email}</p>)
                  }
            </div>
      );
};

export default User;