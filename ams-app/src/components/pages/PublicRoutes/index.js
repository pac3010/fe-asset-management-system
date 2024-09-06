import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const PublicRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/account/session', { withCredentials: true });
                if (response.data.userId) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    // If unauthorized, assume the user is not authenticated
                    setIsAuthenticated(false);
                } else {
                    console.error('Unexpected error checking authentication:', error);
                    setIsAuthenticated(false);  // Assume false if any other error occurs
                }
            }
        };

        checkSession();
    }, []);

    if (isAuthenticated === null) {
        // You can return a loading spinner or null while the authentication check is in progress
        return null; // Or a spinner component
    }

    return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
