import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [departments, setDepartments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    gender: "", // Gender will be set as integer values 1 or 0
    address: "",
    phone: "",
    department_id: "",
    email: "",
    password: "",
  });

  const fetchDepartment = () => {
    axios
      .get("http://localhost:8080/api/account/departments")
      .then((res) => {
        setDepartments(res.data.data);
        console.log("department", res.data.data);
      })
      .catch((e) => {
        console.log("Error message: ", e.message);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: parseInt(e.target.value), // Convert gender value to integer
    });
  };

  const handleDepartmentChange = (e) => {
    setFormData({
      ...formData,
      department_id: parseInt(e.target.value), // Convert department_id value to integer
    });
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`; // Format the date as dd-MM-yyyy
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstname,
      middlename,
      lastname,
      dob,
      gender,
      email,
      phone,
      address,
      department_id,
      password,
    } = formData;

    const formattedDob = formatDate(dob); // Format the date to dd-MM-yyyy

    axios
      .post("http://localhost:8080/api/account/register", {
        firstname,
        middlename,
        lastname,
        dob: formattedDob,
        gender,
        email,
        phone,
        address,
        department_id,
        password,
      })
      .then((res) => {
        setIsLoading(false);
        alert(res.data.message); // Handle success message
        
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error:", error);
        console.log("Data :> ", formData);
        alert("Registration failed");
      });
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row page-titles">
            <div className="col-md-6 col-8 align-self-center">
              <h3 className="text-themecolor m-b-0 m-t-0">Sign Up</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-10">
              <div className="card">
                <div className="card-body wizard-content">
                  <form
                    action="#"
                    className="tab-wizard wizard-circle"
                    onSubmit={handleSubmit}
                  >
                    {/* Step 1 */}
                    <h6>Personal Info</h6>
                    <section>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="firstname">First Name :</label>
                            <input
                              type="text"
                              className="form-control"
                              id="firstname"
                              value={formData.firstname}
                              onChange={handleChange}
                            />{" "}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="middlename">Middle Name :</label>
                            <input
                              type="text"
                              className="form-control"
                              id="middlename"
                              value={formData.middlename}
                              onChange={handleChange}
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="lastname">Last Name :</label>
                            <input
                              type="text"
                              className="form-control"
                              id="lastname"
                              value={formData.lastname}
                              onChange={handleChange}
                            />{" "}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="dob">Date of Birth :</label>
                            <input
                              type="date"
                              className="form-control"
                              id="dob"
                              value={formData.dob}
                              onChange={handleChange}
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="gender">Gender :</label>
                            <div className="d-flex align-items-center">
                              <div className="form-check ml-4">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  id="genderMale"
                                  name="gender"
                                  value="1"
                                  checked={formData.gender === 1}
                                  onChange={handleGenderChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="genderMale"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check ml-5">
                                <input
                                  type="radio"
                                  className="form-check-input"
                                  id="genderFemale"
                                  name="gender"
                                  value="0"
                                  checked={formData.gender === 0}
                                  onChange={handleGenderChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="genderFemale"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="address">Address :</label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              value={formData.address}
                              onChange={handleChange}
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="phone">Phone Number :</label>
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                              value={formData.phone}
                              onChange={handleChange}
                            />{" "}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="department_id">Department :</label>
                            <select
                              className="custom-select form-control"
                              id="department_id"
                              value={formData.department_id}
                              onChange={handleDepartmentChange}
                            >
                              <option value="">Select Department</option>
                              {departments.map((department) => (
                                <option
                                  key={department.id}
                                  value={department.id}
                                >
                                  {department.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* Step 2 */}
                    <h6>Account Info</h6>
                    <section>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="email">Email Address :</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                            />{" "}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="password">Password :</label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              value={formData.password}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="text-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary w-50"
                        style={{
                          backgroundColor: "#007bff",
                          borderColor: "#007bff",
                        }}
                        disabled={isLoading} // Disable button while loading
                      >
                        {isLoading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            &nbsp;Loading...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
