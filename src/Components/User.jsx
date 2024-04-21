import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
      const user = useLoaderData();
      const handleDeleteUser = (id) => {
            console.log(id);
            fetch(`http://localhost:3000/users/${id}`, {
                  method: 'DELETE',

            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              alert('user deleted successfully')
                        }
                  })

      }
      return (
            <div>
                  <h2>{user.length}</h2>
                  {
                        user.map(user => <p
                              key={user._id}
                        >{user.name} : {user.email} <button
                                    onClick={() => handleDeleteUser(user._id)}
                              >X</button></p>)
                  }
            </div>
      );
};

export default User;