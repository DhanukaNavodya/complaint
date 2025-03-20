import React, { useState } from 'react';
import axios from 'axios';

const User = () => {
    const [newUser, setNewUser] = useState({
        name: '',
        birthdate: '',
        photo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('name', newUser.name);

        axios.post('http://localhost:5000/users/add/', formData)
            .then(res => {
                console.log(res);
                alert("image successfully added")
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }

    const handlePhoto = (e) => {
        setNewUser({ ...newUser, photo: e.target.files[0] });
    }

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />

            <input 
                type="text"
                placeholder="name"
                name="name"
                value={newUser.name}
                onChange={handleChange}
            />

            <input 
                type="date"
                name="birthdate"
                value={newUser.birthdate} 
                onChange={handleChange}
            />

            <input 
                type="submit"
                value="Submit"
            />
        </form>
    );
}

export default User;
