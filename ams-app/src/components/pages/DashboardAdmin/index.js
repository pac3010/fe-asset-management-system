import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Modal, Button } from "react-bootstrap";

const DashboardAdmin = () => {
  const [dataTransaction, setDataTransaction] = useState([]);
  const [borrowData, setBorrowData] = useState([]);
  const [returnData, setReturnData] = useState([]);
  const [assessmentData, setAssessmentData] = useState([]);
  const [components, setComponents] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [isBroken, setIsBroken] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  let historyCount = dataTransaction.length;
  let borrowCount = borrowData.length;
  let returnCount = returnData.length;
  let assessmentCount = assessmentData.length;

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      clearIsBrokenState();
      setShowModal(false);
    }
  };

  const clearIsBrokenState = () => {
    setIsBroken([]);
    console.log("State cleared:", isBroken);
  };

  // Handler for form submission
  const handleAssessSubmit = (transactionId) => {
    const payload = isBroken.map((item) => ({
      assetComponentId: item.assetComponentId,
      isBroken: item.isBroken ? 1 : 0, 
    }));

    axios
      .post(
        `http://localhost:8080/api/asset/assessment/${transactionId}/submit`,
        payload
      )
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleRadioChange = (assetComponentId, value) => {
    const updatedIsBroken = isBroken.some(
      (item) => item.assetComponentId === assetComponentId
    )
      ? isBroken.map((item) =>
          item.assetComponentId === assetComponentId
            ? { ...item, isBroken: value === "1" ? 1 : 0 }
            : item
        )
      : [...isBroken, { assetComponentId, isBroken: value === "1" ? 1 : 0 }];

    setIsBroken(updatedIsBroken);
    console.log("Updated isBroken state:", updatedIsBroken);
  };

  const fetchAllData = () => {
    axios
      .get("http://localhost:8080/api/asset/all-request")
      .then((res) => {
        setDataTransaction(res.data.data);
        const borrowReq = res.data.data.filter(
          (req) =>
            req.status === "Waiting for admin approval" &&
            req.reqReturnTime === null
        );
        const returnReq = res.data.data.filter(
          (req) =>
            req.status === "Waiting for return approval" &&
            req.reqReturnTime !== null
        );
        const assessmentReq = res.data.data.filter(
          (req) => req.status === "Waiting for component assessment"
        );

        setBorrowData(borrowReq);
        setAssessmentData(assessmentReq);
        setReturnData(returnReq);
      })
      .catch((e) => {
        console.log("Message: ", e.message);
      });
    setFetchStatus(false);
  };

  const fetchComponent = (transactionId) => {
    axios
      .get(`http://localhost:8080/api/asset/assessment/${transactionId}`)
      .then((res) => {
        setComponents(res.data.data);
      })
      .catch((e) => {
        console.log("Error: ", e.message);
      });
  };

  const handleApproveBorrow = (id) => {
    axios
      .get(`http://localhost:8080/api/asset/approve/${id}`)
      .then((res) => {
        setBorrowData((newData) => newData.filter((req) => req.id !== id));
        setReturnData((newData) => newData.filter((req) => req.id !== id));
        setFetchStatus(true);
      })
      .catch((error) => {
        console.error("Error approving request:", error);
      });
  };

  const handleApproveReturn = (id) => {
    axios
      .get(`http://localhost:8080/api/asset/request/return/${id}/accept`)
      .then((res) => {
        setBorrowData((newData) => newData.filter((req) => req.id !== id));
        setReturnData((newData) => newData.filter((req) => req.id !== id));
        setFetchStatus(true);
      })
      .catch((error) => {
        console.error("Error approving request:", error);
      });
  };

  const handleReject = (id) => {
    axios
      .get(`http://localhost:8080/api/asset/reject/${id}`)
      .then((res) => {
        setBorrowData((newData) => newData.filter((req) => req.id !== id));
        setReturnData((newData) => newData.filter((req) => req.id !== id));
        setFetchStatus(true);
      })
      .catch((error) => {
        console.error("Error approving request:", error);
      });
  };

  useEffect(() => {
    if (fetchStatus === true) {
      fetchAllData();
      fetchComponent();
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [fetchStatus, fetchAllData]);

  return (
    <>
      <div className="fix-header card-no-border">
        <div className="preloader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              className="path"
              cx={50}
              cy={50}
              r={20}
              fill="none"
              strokeWidth={2}
              strokeMiterlimit={10}
            />{" "}
          </svg>
        </div>
        <div id="main-wrapper">
          <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
              <div className="navbar-header">
                <a className="navbar-brand" href="index.html"></a>
              </div>
              <div className="navbar-collapse">
                <ul className="navbar-nav mr-auto mt-md-0 ">
                  {/* This is  */}
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                      href="javascript:void(0)"
                    >
                      <i className="ti-menu" />
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark"
                      href="javascript:void(0)"
                    >
                      <i className="icon-arrow-left-circle" />
                    </a>{" "}
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                      href=""
                      id={2}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="mdi mdi-email" />
                      <div className="notify">
                        {" "}
                        <span className="heartbit" /> <span className="point" />{" "}
                      </div>
                    </a>
                    <div
                      className="dropdown-menu mailbox animated bounceInDown"
                      aria-labelledby={2}
                    >
                      <ul>
                        <li>
                          <div className="drop-title">
                            You have 4 new messages
                          </div>
                        </li>
                        <li>
                          <div className="message-center">
                            <a href="#">
                              <div className="user-img">
                                {" "}
                                <img
                                  src="../assets/images/users/1.jpg"
                                  alt="user"
                                  className="img-circle"
                                />{" "}
                                <span className="profile-status online pull-right" />{" "}
                              </div>
                              <div className="mail-contnet">
                                <h5>Pavan kumar</h5>{" "}
                                <span className="mail-desc">
                                  Just see the my admin!
                                </span>{" "}
                                <span className="time">9:30 AM</span>{" "}
                              </div>
                            </a>
                            {/* Message */}
                            <a href="#">
                              <div className="user-img">
                                {" "}
                                <img
                                  src="../assets/images/users/2.jpg"
                                  alt="user"
                                  className="img-circle"
                                />{" "}
                                <span className="profile-status busy pull-right" />{" "}
                              </div>
                              <div className="mail-contnet">
                                <h5>Sonu Nigam</h5>{" "}
                                <span className="mail-desc">
                                  I've sung a song! See you at
                                </span>{" "}
                                <span className="time">9:10 AM</span>{" "}
                              </div>
                            </a>
                            <a href="#">
                              <div className="user-img">
                                {" "}
                                <img
                                  src="../assets/images/users/3.jpg"
                                  alt="user"
                                  className="img-circle"
                                />{" "}
                                <span className="profile-status away pull-right" />{" "}
                              </div>
                              <div className="mail-contnet">
                                <h5>Arijit Sinh</h5>{" "}
                                <span className="mail-desc">
                                  I am a singer!
                                </span>{" "}
                                <span className="time">9:08 AM</span>{" "}
                              </div>
                            </a>
                            {/* Message */}
                            <a href="#">
                              <div className="user-img">
                                {" "}
                                <img
                                  src="../assets/images/users/4.jpg"
                                  alt="user"
                                  className="img-circle"
                                />{" "}
                                <span className="profile-status offline pull-right" />{" "}
                              </div>
                              <div className="mail-contnet">
                                <h5>Pavan kumar</h5>{" "}
                                <span className="mail-desc">
                                  Just see the my admin!
                                </span>{" "}
                                <span className="time">9:02 AM</span>{" "}
                              </div>
                            </a>
                          </div>
                        </li>
                        <li>
                          <a
                            className="nav-link text-center"
                            href="javascript:void(0);"
                          >
                            {" "}
                            <strong>See all e-Mails</strong>{" "}
                            <i className="fa fa-angle-right" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav my-lg-0">
                  <li className="nav-item hidden-sm-down">
                    <form className="app-search">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for..."
                      />{" "}
                      <a className="srh-btn">
                        <i className="ti-search" />
                      </a>{" "}
                    </form>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                      href=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                        alt="user"
                        className="profile-pic"
                      />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right animated flipInY">
                      <ul className="dropdown-user">
                        <li>
                          <div className="dw-user-box">
                            <div className="u-img">
                              <img
                                src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                                alt="user"
                              />
                            </div>
                            <div className="u-text">
                              <h4>Steave Jobs</h4>
                              <p className="text-muted">varun@gmail.com</p>
                              <a
                                href="profile.html"
                                className="btn btn-rounded btn-danger btn-sm"
                              >
                                View Profile
                              </a>
                            </div>
                          </div>
                        </li>
                        <li role="separator" className="divider" />
                        <li>
                          <a href="#">
                            <i className="ti-user" /> My Profile
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-email" /> Inbox
                          </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li>
                          <a href="#">
                            <i className="ti-settings" /> Account Setting
                          </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li>
                          <a href="#">
                            <i className="fa fa-power-off" /> Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <aside className="left-sidebar">
            <div className="scroll-sidebar">
              <div className="user-profile">
                <div className="profile-img">
                  {" "}
                  <img
                    src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                    alt="user"
                  />{" "}
                </div>
                {/* User profile text*/}
                <div className="profile-text">
                  {" "}
                  <a
                    href="#"
                    className="dropdown-toggle link u-dropdown"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    Markarn Doe <span className="caret" />
                  </a>
                  <div className="dropdown-menu animated flipInY">
                    <a href="#" className="dropdown-item">
                      <i className="ti-user" /> My Profile
                    </a>
                    <a href="#" className="dropdown-item">
                      <i className="ti-email" /> Inbox
                    </a>
                    <div className="dropdown-divider" />{" "}
                    <a href="#" className="dropdown-item">
                      <i className="ti-settings" /> Account Setting
                    </a>
                    <div className="dropdown-divider" />{" "}
                    <a href="login.html" className="dropdown-item">
                      <i className="fa fa-power-off" /> Logout
                    </a>
                  </div>
                </div>
              </div>
              <nav className="sidebar-nav">
                <ul id="sidebarnav">
                  <li className="nav-small-cap">PERSONAL</li>
                  <li>
                    <a className="has-arrow" href="#" aria-expanded="false">
                      <i className="mdi mdi-gauge" />
                      <span className="hide-menu">
                        Dashboard{" "}
                        <span className="label label-rounded label-success">
                          5
                        </span>
                      </span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="index.html">Borrow Request</a>
                      </li>
                      <li>
                        <a href="index2.html">
                          Return Request{" "}
                          <span className="label label-rounded label-success">
                            5
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="index3.html">
                          Assessment Asset{" "}
                          <span className="label label-rounded label-success">
                            5
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#history">Data History</a>
                      </li>
                      {/* <li>
                        <a href="index5.html">Minimal Dashboard</a>
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="mdi mdi-bullseye" />
                      <span className="hide-menu">Master Data</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sidebar-footer">
              <a
                href=""
                className="link"
                data-toggle="tooltip"
                title="Settings"
              >
                <i className="ti-settings" />
              </a>
              <a href="" className="link" data-toggle="tooltip" title="Email">
                <i className="mdi mdi-gmail" />
              </a>
              <a href="" className="link" data-toggle="tooltip" title="Logout">
                <i className="mdi mdi-power" />
              </a>
            </div>
          </aside>
          <div className="page-wrapper">
            <div className="container-fluid">
              <div className="row page-titles">
                <div className="col-md-6 col-8 align-self-center">
                  <h3 className="text-themecolor m-b-0 m-t-0">Request List</h3>
                </div>
                <div className="col-md-6 col-4 align-self-center"></div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Request List</h4>
                      <h6 className="card-subtitle">List of all request</h6>
                      <div className="row m-t-40">
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                          <div className="card card-inverse card-info">
                            <div className="box bg-info text-center">
                              <h1 className="font-light text-white">{borrowCount}</h1>
                              <h6 className="text-white">Total Borrow Request</h6>
                            </div>
                          </div>
                        </div>
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                          <div className="card card-primary card-inverse">
                            <div className="box text-center">
                              <h1 className="font-light text-white">{returnCount}</h1>
                              <h6 className="text-white">Total Return Request</h6>
                            </div>
                          </div>
                        </div>
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                          <div className="card card-inverse card-success">
                            <div className="box text-center">
                              <h1 className="font-light text-white">{assessmentCount}</h1>
                              <h6 className="text-white">Total Assessment Await</h6>
                            </div>
                          </div>
                        </div>
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                          <div className="card card-inverse card-dark">
                            <div className="box text-center">
                              <h1 className="font-light text-white">{historyCount}</h1>
                              <h6 className="text-white">Total Data</h6>
                            </div>
                          </div>
                        </div>
                        {/* Column */}
                      </div>
                      <ul class="nav nav-tabs customtab2" role="tablist">
                        <li class="nav-item">
                          {" "}
                          <a
                            class="nav-link active"
                            data-toggle="tab"
                            href="#borrowreq"
                            role="tab"
                          >
                            <span class="hidden-sm-up">
                              <i class="ti-home"></i>
                            </span>{" "}
                            <span class="hidden-xs-down">Borrow Request</span>
                          </a>{" "}
                        </li>
                        <li class="nav-item">
                          {" "}
                          <a
                            class="nav-link"
                            data-toggle="tab"
                            href="#returnreq"
                            role="tab"
                          >
                            <span class="hidden-sm-up">
                              <i class="ti-user"></i>
                            </span>{" "}
                            <span class="hidden-xs-down">Return Request</span>
                          </a>{" "}
                        </li>
                        <li class="nav-item">
                          {" "}
                          <a
                            class="nav-link"
                            data-toggle="tab"
                            href="#assessment"
                            role="tab"
                          >
                            <span class="hidden-sm-up">
                              <i class="ti-email"></i>
                            </span>{" "}
                            <span class="hidden-xs-down">Assessment</span>
                          </a>{" "}
                        </li>
                        <li class="nav-item">
                          {" "}
                          <a
                            class="nav-link"
                            data-toggle="tab"
                            href="#history"
                            role="tab"
                          >
                            <span class="hidden-sm-up">
                              <i class="ti-email"></i>
                            </span>{" "}
                            <span class="hidden-xs-down">History</span>
                          </a>{" "}
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div
                          className="table-responsive tab-pane active"
                          id="borrowreq"
                          role={"tabpanel"}
                        >
                          <table
                            id="demo-foo-addrow"
                            className="table m-t-30 table-hover no-wrap contact-list"
                            data-page-size={10}
                          >
                            <thead>
                              <tr>
                                <th>Username</th>
                                <th>Asset Name</th>
                                <th>Request Borrow Date</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {borrowData.map((data, index) => {
                                return (
                                  <tr key={index}>
                                    <td>{data.username}</td>
                                    <td>
                                      <a href="javascript:void(0)">
                                        <img
                                          src="../assets/images/users/1.jpg"
                                          alt="user"
                                          className="img-circle"
                                        />{" "}
                                        {data.assetName}
                                      </a>
                                    </td>
                                    <td>{data.reqBorrowTime}</td>
                                    <td>
                                      <span
                                        className={
                                          data.status ===
                                            "Damaged upon return" ||
                                          data.status ===
                                            "Request rejected by admin"
                                            ? "label label-danger"
                                            : data.status === "Returned" ||
                                              data.status === "Approved"
                                            ? "label label-success"
                                            : "label label-warning"
                                        }
                                      >
                                        {data.status}
                                      </span>
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        data-toggle="tooltip"
                                        onClick={() => handleApproveBorrow(data.id)}
                                        data-original-title="approve"
                                        style={{
                                          backgroundColor: "#007bff",
                                          borderColor: "#007bff",
                                        }}
                                      >
                                        Approve
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-danger btn-sm ml-3"
                                        onClick={() => handleReject(data.id)}
                                        data-toggle="tooltip"
                                        data-original-title="reject"
                                      >
                                        Reject
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                            <tfoot></tfoot>
                          </table>
                        </div>

                        <div
                          className="table-responsive tab-pane"
                          id="returnreq"
                          role={"tabpanel"}
                        >
                          <table
                            id="demo-foo-addrow"
                            className="table m-t-30 table-hover no-wrap contact-list"
                            data-page-size={10}
                          >
                            <thead>
                              <tr>
                                <th>Username</th>
                                <th>Asset Name</th>
                                <th>Request Return Date</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {returnData.map((data, index) => {
                                return (
                                  <tr key={index}>
                                    <td>{data.username}</td>
                                    <td>
                                      <a href="javascript:void(0)">
                                        <img
                                          src="../assets/images/users/1.jpg"
                                          alt="user"
                                          className="img-circle"
                                        />{" "}
                                        {data.assetName}
                                      </a>
                                    </td>
                                    <td>{data.reqReturnTime}</td>
                                    <td>
                                      <span className="label label-success">
                                        {data.status}
                                      </span>
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        className="btn btn-primary btn-sm"
                                        data-toggle="tooltip"
                                        onClick={() => handleApproveReturn(data.id)}
                                        data-original-title="approve"
                                        style={{
                                          backgroundColor: "#007bff",
                                          borderColor: "#007bff",
                                        }}
                                      >
                                        Approve
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-danger btn-sm ml-3"
                                        data-toggle="tooltip"
                                        onClick={() => handleReject(data.id)}
                                        data-original-title="reject"
                                      >
                                        Reject
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                            <tfoot></tfoot>
                          </table>
                        </div>

                        <div
                          className="table-responsive tab-pane"
                          id="assessment"
                          role={"tabpanel"}
                        >
                          <table
                            id="demo-foo-addrow"
                            className="table m-t-30 table-hover no-wrap contact-list"
                            data-page-size={10}
                          >
                            <thead>
                              <tr>
                                <th>Username</th>
                                <th>Asset Name</th>
                                <th>Return Date</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {assessmentData.map((data, index) => {
                                return (
                                  <tr key={index}>
                                    <td>{data.username}</td>
                                    <td>
                                      <a href="javascript:void(0)">
                                        <img
                                          src="../assets/images/users/1.jpg"
                                          alt="user"
                                          className="img-circle"
                                        />{" "}
                                        {data.assetName}
                                      </a>
                                    </td>
                                    <td>{data.returnTime}</td>
                                    <td>
                                      <span className="label label-success">
                                        {data.status}
                                      </span>
                                    </td>
                                    <td>
                                      <div className="card-body">
                                        <button
                                          type="button"
                                          className="btn btn-sm p-0"
                                          onClick={() => {
                                            fetchComponent(data.id);
                                            setShowModal(true);
                                          }}
                                          data-original-title="Assessing"
                                        >
                                          <i className="fa fa-pencil-square-o fa-lg" />
                                        </button>

                                        <Modal
                                          show={showModal}
                                          onHide={() => {
                                            clearIsBrokenState();
                                            setShowModal(false);
                                          }}
                                        >
                                          <Modal.Header>
                                            <Modal.Title>
                                              Assessing Component
                                            </Modal.Title>
                                            <button
                                              type="button"
                                              className="close"
                                              aria-hidden={!showModal}
                                              onClick={() => {
                                                clearIsBrokenState();
                                                setShowModal(false);
                                              }}
                                            >
                                              ×
                                            </button>
                                          </Modal.Header>
                                          <Modal.Body
                                            className="px-4 py-3"
                                            style={{
                                              maxHeight: "300px",
                                              overflowY: "auto",
                                            }}
                                          >
                                            <form>
                                              {components.map(
                                                (component, index) => {
                                                  const isComponentBroken =
                                                    isBroken.find(
                                                      (item) =>
                                                        item.assetComponentId ===
                                                        component.id
                                                    )?.isBroken;

                                                  return (
                                                    <div
                                                      className="form-group row"
                                                      key={index}
                                                    >
                                                      <label
                                                        htmlFor="recipient-name"
                                                        className="col-sm-6 col-form-label"
                                                      >
                                                        Is the {component.name}{" "}
                                                        broken?
                                                      </label>
                                                      <div className="col-sm-5">
                                                        <div className="form-check form-check-inline">
                                                          <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            value="1"
                                                            checked={
                                                              isComponentBroken ===
                                                              1
                                                            }
                                                            onChange={(e) =>
                                                              handleRadioChange(
                                                                component.id,
                                                                e.target.value
                                                              )
                                                            }
                                                          />
                                                          <label className="form-check-label">
                                                            Yes
                                                          </label>
                                                        </div>
                                                        <div className="form-check form-check-inline ml-5">
                                                          <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            value="0"
                                                            checked={
                                                              isComponentBroken ===
                                                              0
                                                            }
                                                            onChange={(e) =>
                                                              handleRadioChange(
                                                                component.id,
                                                                e.target.value
                                                              )
                                                            }
                                                          />
                                                          <label className="form-check-label">
                                                            No
                                                          </label>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  );
                                                }
                                              )}
                                            </form>
                                          </Modal.Body>
                                          <Modal.Footer>
                                            <Button
                                              variant="secondary"
                                              onClick={() => {
                                                clearIsBrokenState();
                                                setShowModal(false);
                                              }}
                                            >
                                              Close
                                            </Button>
                                            <Button
                                              variant="danger"
                                              onClick={() => {
                                                handleAssessSubmit(data.id);
                                                setShowModal(false);
                                              }}
                                            >
                                              Save changes
                                            </Button>
                                          </Modal.Footer>
                                        </Modal>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                            <tfoot></tfoot>
                          </table>
                        </div>

                        <div
                          className="table-responsive tab-pane"
                          id="history"
                          role={"tabpanel"}
                        >
                          <table
                            id="demo-foo-addrow"
                            className="table m-t-30 table-hover no-wrap contact-list"
                            data-page-size={10}
                          >
                            <thead>
                              <tr>
                                <th>Username</th>
                                <th>Asset Name</th>
                                <th>Out Time</th>
                                <th>Return Time</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {dataTransaction
                                .sort(
                                  (a, b) =>
                                    new Date(b.returnTime) -
                                    new Date(a.returnTime)
                                ) // Sort by reqBorrowTime
                                .map((data, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{data.username}</td>
                                      <td>
                                        <a href="javascript:void(0)">
                                          <img
                                            src="../assets/images/users/1.jpg"
                                            alt="user"
                                            className="img-circle"
                                          />{" "}
                                          {data.assetName}
                                        </a>
                                      </td>
                                      <td>{data.outTime}</td>
                                      <td>{data.returnTime}</td>
                                      <td>
                                      <span
                                        className={
                                          data.status ===
                                            "Damaged upon return" ||
                                          data.status ===
                                            "Request rejected by admin"
                                            ? "label label-danger"
                                            : data.status === "Returned" ||
                                              data.status === "Approved"
                                            ? "label label-success"
                                            : "label label-warning"
                                        }
                                      >
                                        {data.status}
                                      </span>
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                            <tfoot></tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              {" "}
              © 2017 Monster Admin by wrappixel.com{" "}
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
