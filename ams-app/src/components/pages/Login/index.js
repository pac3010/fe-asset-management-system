import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await axios.post(
                'http://localhost:8080/api/account/login',
                { username, password },
                { withCredentials: true } // Include credentials for session
            );

            if (response.status === 200) {
                const { message } = response.data;

                // Fetch session data to get the user ID
                const sessionResponse = await axios.get('http://localhost:8080/api/account/session', {
                    withCredentials: true,
                });

                if (sessionResponse.data.userId) {
                    // Store user ID in session storage or local storage
                    sessionStorage.setItem('userId', sessionResponse.data.userId);

                    // Navigate to the redirect URL
                    const redirectUrlMatch = message.match(/Redirecting to: (.*)/);
                    if (redirectUrlMatch) {
                        const redirectUrl = redirectUrlMatch[1];
                        navigate(redirectUrl);
                    } else {
                        alert('Login successful, but no redirect URL found.');
                    }
                } else {
                    setErrorMessage('User session could not be established.');
                }
            } else {
                setErrorMessage(response.data.message || 'An error occurred during login.');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message || 'An error occurred during login.');
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && (
                <div className="preloader">
                    <svg className="circular" viewBox="25 25 50 50">
                        <circle
                            className="path"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                        />
                    </svg>
                </div>
            )}

            <section id="wrapper">
                <div
                    className="login-register"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/background/login-register.jpg)`,
                    }}
                >
                    <div className="login-box card">
                        <div className="card-body">
                            <form
                                className="form-horizontal form-material"
                                id="loginform"
                                onSubmit={handleLogin}
                            >
                                <h3 className="box-title m-b-20">Sign In</h3>
                                {errorMessage && (
                                    <div className="alert alert-danger">{errorMessage}</div>
                                )}
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <input
                                            className="form-control"
                                            type="text"
                                            required
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-xs-12">
                                        <input
                                            className="form-control"
                                            type="password"
                                            required
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group text-center m-t-20">
                                    <div className="col-xs-12">
                                        <button
                                            className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div>
                                <a href='#'>Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
