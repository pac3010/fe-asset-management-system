import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

export const Card2 = () => {
    const [assets, setAssets] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedAssets, setSelectedAssets] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Fetch the user ID from the session
        axios.get('http://localhost:8080/api/account/session', { withCredentials: true })
            .then(response => {
                if (response.data && response.data.userId) {
                    setUserId(response.data.userId);
                } else {
                    console.error('No user is logged in or unexpected response format:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });

        // Fetch assets
        axios.get('http://localhost:8080/api/asset/show')
            .then(response => {
                if (response.data && response.data.data && Array.isArray(response.data.data)) {
                    setAssets(response.data.data);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching assets:', error);
            });
    }, []);

    const handleAssetClick = (asset) => {
        if (selectedAssets.includes(asset)) {
            setSelectedAssets(selectedAssets.filter(a => a !== asset));
        } else {
            setSelectedAssets([...selectedAssets, asset]);
        }
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleRequest = () => {
        if (!userId) {
            alert("User ID is not available.");
            return;
        }

        selectedAssets.forEach(asset => {
            const payload = {
                asset: { name: asset.name },
                reqBorrowTime: new Date().toISOString(),
            };

            axios.post(`http://localhost:8080/api/asset/createRequest/${userId}`, payload)
                .then(response => {
                    console.log('Request successful:', response.data);
                    alert('Request successful!');
                })
                .catch(error => {
                    console.error('Error creating request:', error);
                    alert(`Error creating request: ${error.message}`);
                });
        });

        handleCloseModal();
    };

    return (
        <div className="col-lg-6 col-md-6">
            <div className="card card-body">
                <h3 className="card-title">Asset</h3>
                <div className="message-box">
                    <div className="message-widget">
                        {assets.length > 0 ? (
                            assets.map((asset, index) => (
                                <a 
                                    href="#" 
                                    key={index} 
                                    onClick={() => handleAssetClick(asset)}
                                    style={{ 
                                        backgroundColor: selectedAssets.includes(asset) ? '#d3d3d3' : 'transparent'
                                    }}
                                >
                                    <div className="user-img">
                                        <span className="round bg-primary">
                                            <i className="mdi mdi-email"></i>
                                        </span>
                                    </div>
                                    <div className="mail-contnet">
                                        <h5>{asset.name}</h5>
                                    </div>
                                </a>
                            ))
                        ) : (
                            <p>No assets available</p>
                        )}
                    </div>
                </div>
                {selectedAssets.length > 0 && (
                    <Button variant="primary" onClick={handleShowModal} className="mt-3">
                        Show Selected Assets
                    </Button>
                )}
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Selected Assets</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedAssets.map((asset, index) => (
                        <div key={index}>
                            <h5>{asset.name}</h5>
                            <p>ID: {asset.id}</p>
                            <p>User ID : {userId}</p>
                            <label>Name:</label>
                            <input type='text' value={asset.name} readOnly /> 
                            <br />
                            <label>Date Borrowed</label>
                            <input type='text' />
                            <hr />
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={handleRequest}>
                        Request
                    </Button>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Outlet />
        </div>
    );
};
