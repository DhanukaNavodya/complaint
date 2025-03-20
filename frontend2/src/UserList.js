import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {users.map(user => (
                    <div key={user._id} className="bg-white p-4 rounded-lg shadow-lg">
                        <img 
                            src={user.photoUrl || 'https://via.placeholder.com/150'}
                            alt={user.name}
                            className="w-full h-40 object-cover rounded-md"
                        />
                        <h2 className="text-xl font-semibold mt-2">{user.name}</h2>
                        <p className="text-gray-600">Birthdate: {new Date(user.birthdate).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;
