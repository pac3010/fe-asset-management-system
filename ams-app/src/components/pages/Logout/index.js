import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post('http://localhost:8080/api/account/logout', {}, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    console.log('Logout successful:', response.data);
                    navigate('/'); // Redirect to login page after logout
                }
            })
            .catch(error => {
                console.error('Error during logout:', error);
            });
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};
