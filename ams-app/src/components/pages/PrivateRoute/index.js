import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const PrivateRoute = ({ allowedRoles }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [userRoleId, setUserRoleId] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/account/session', { withCredentials: true })
            .then(response => {
                if (response.data.userId) {
                    setIsAuthenticated(true);
                    setUserRoleId(response.data.roleId); // Store the role ID from the response
                } else {
                    setIsAuthenticated(false);
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    setIsAuthenticated(false);
                } else {
                    console.error('Error checking authentication:', error);
                    setIsAuthenticated(false);  // Assume false if any other error occurs
                }
            });
    }, []);

    if (isAuthenticated === null) {
        // Return null or a loading spinner while checking authentication
        return <div>Loading...</div>; 
    }

    // Check if the user is authenticated and has a valid role
    if (isAuthenticated && allowedRoles && !allowedRoles.includes(userRoleId)) {
        return <Navigate to="/unauthorized" />; // Redirect if role not allowed
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
