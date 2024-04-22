import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
      const loadedUser = useLoaderData();


      const [users, setUsers] = useState(loadedUser)



      const handleDeleteUser = (_id) => {
            console.log(_id);
            fetch(`http://localhost:3000/users/${_id}`, {
                  method: 'DELETE',

            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        
                        if (data.deletedCount > 0) {
                              alert('user deleted successfully');
                              const remaining = users.filter(user => user._id !== _id);
                              setUsers(remaining);

                        }
                  })

      }
      return (
            <div>
                  <h2>{users.length}</h2>
                  {
                        users.map(user => <p
                              key={user._id}
                        >{user.name} : {user.email} <button
                                    onClick={() => handleDeleteUser(user._id)}
                              >X</button></p>)
                  }
            </div>
      );
};

export default User;