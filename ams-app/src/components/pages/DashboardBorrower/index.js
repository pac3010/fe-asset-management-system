import React, { useState, useEffect } from "react";
import axios from "axios";

const TableWithSearchBorrower = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                setLoading(true);
                let userId = sessionStorage.getItem("userId");

                if (!userId) {
                    // Fetch session data if userId is not already in sessionStorage
                    const sessionResponse = await axios.get("http://localhost:8080/api/account/session", {
                        withCredentials: true, // To ensure credentials (session cookie) are included in the request
                    });
                    const sessionData = sessionResponse.data;

                    if (sessionData.userId) {
                        userId = sessionData.userId;
                        sessionStorage.setItem("userId", userId); // Store userId in sessionStorage
                    } else {
                        throw new Error("No user is logged in");
                    }
                }

                // Fetch borrower data using the userId
                await fetchData(userId);

            } catch (error) {
                console.error("Error fetching session data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchData = async (userId) => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/asset/id-and-borrow-time-borrower/${userId}`
                );
        
                // Assuming the data is inside `response.data.data`
                const responseData = response.data.data;
        
                // Check if the response data is an array
                if (Array.isArray(responseData)) {
                    setData(responseData); // Set the data if it's an array
                } else {
                    setData([]); // Set an empty array if response data is not an array
                    console.error("Unexpected data format received:", response.data);
                }
            } catch (error) {
                console.error("Error fetching borrower data:", error);
                setError("Error fetching borrower data");
            }
        };

        fetchSessionData();
    }, []);

    // Handle search input
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to page 1 after search term changes
    };

    // Handle filter selection
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setCurrentPage(1); // Reset to page 1 after filter changes
    };

    // Only try to filter if data is an array
    const filteredData = Array.isArray(data)
        ? data
            .filter(
                (item) =>
                    item.id.toString().includes(searchTerm.toLowerCase()) ||
                    item.username.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .filter((item) => {
                if (filter === "Approved") return item.status === "Approved";
                if (filter === "rejected") return item.status === "Request Rejected by Manager";
                return true; // Show all items if filter is "all"
            })
        : [];

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Handle previous page navigation
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Handle next page navigation
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Borrower Requests</h1>
            <div>
                <button onClick={() => handleFilterChange("all")}>All Requests</button>
                <button onClick={() => handleFilterChange("Approved")}>Approved Requests</button>
                <button onClick={() => handleFilterChange("rejected")}>Rejected Requests</button>
            </div>
            <input
                type="text"
                placeholder="Search by ID or Username"
                value={searchTerm}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Borrow Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.length > 0 ? (
                        currentItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.reqBorrowTime}</td>
                                <td>{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No results found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default TableWithSearchBorrower;
