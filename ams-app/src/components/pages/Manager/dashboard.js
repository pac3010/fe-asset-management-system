import React, { useState, useEffect } from "react";
import axios from "axios";

const TableWithSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState("all");
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/asset/id-and-borrow-time"
                );
                setData(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const handleApprove = async (id) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/asset/approvee/${id}`);
            console.log(`Item with ID: ${id} approved`, response.data);
            setData((prevData) =>
                prevData.map((item) =>
                    item.id === id ? { ...item, status: "Approved" } : item
                )
            );
        } catch (error) {
            console.error("Error approving item", error);
        }
    };

    const handleReject = async (id) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/asset/rejectt/${id}`);
            console.log(`Item with ID: ${id} rejected`, response.data);
            setData((prevData) =>
                prevData.map((item) =>
                    item.id === id ? { ...item, status: "Request Rejected by Manager" } : item
                )
            );
        } catch (error) {
            console.error("Error rejecting item", error);
        }
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setCurrentPage(1);
    };

    const filteredData = data
        .filter(
            (item) =>
                item.id.toString().includes(searchTerm.toLowerCase()) ||
                item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.assetName && item.assetName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((item) => {
            if (filter === "Approved") return item.status === "Approved";
            if (filter === "rejected") return item.status === "Request Rejected by Manager";
            return true;
        });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <h1>Manajer</h1>
            <div>
                <button onClick={() => handleFilterChange("all")}>All Requests</button>
                <button onClick={() => handleFilterChange("Approved")}>
                    Approved Requests
                </button>
                <button onClick={() => handleFilterChange("rejected")}>
                    Rejected Requests
                </button>
            </div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Asset Name</th>
                        <th>Borrow Time</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.assetName}</td>
                            <td>{item.reqBorrowTime}</td>
                            <td>{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</td>
                            <td>
                                {item.status === "Approved" || item.status === "Request Rejected by Manager" ? (
                                    <span>{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</span>
                                ) : (
                                    <>
                                        <button onClick={() => handleApprove(item.id)}>
                                            Approve
                                        </button>
                                        <button onClick={() => handleReject(item.id)}>
                                            Reject
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
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

export default TableWithSearch;
