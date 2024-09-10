import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const Dashboard = () => {
  const [assets, setAssets] = useState([]);
  const [types, setTypes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [modalMode, setModalMode] = useState();

  const [assetData, setAssetData] = useState({
    id: "",
    name: "",
    serialNumber: "",
    typeId: "",
  });

  let object = {
    id: assetData.id,
    name: assetData.name,
    serialNumber: assetData.serialNumber,
    typeId: Number(assetData.typeId),
  };

  const handleSubmit = (e) => {
    axios
      .post("http://localhost:8080/api/asset/create", object)
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
        setIsModalOpen(false);

        setAssetData({
          id: "",
          name: "",
          serialNumber: "",
          typeId: "",
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleDelete = (id) => {
    axios
      .get(`http://localhost:8080/api/asset/delete/${id}`)
      .then((res) => {
        
        setFetchStatus(true);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleEditClick = (data) => {
    setAssetData(data);
    console.log("Data: ", assetData);
    setIsModalOpen(true);
  };

  const submitEdit = (id) => {
    axios
      .post(`http://localhost:8080/api/asset/edit/${id}`, object)
      .then((res) => {
        
        setFetchStatus(true);
        setIsModalOpen(false);

        setAssetData({
          id: "",
          name: "",
          serialNumber: "",
          typeId: "",
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAssetData({
      ...assetData,
      [id]: value,
    });
  };

  const clearAssetState = () => {
    setAssetData({
      id: "",
      name: "",
      serialNumber: "",
      typeId: "",
    });
    console.log("State cleared:", assetData);
  };

  const fetchAsset = () => {
    axios
      .get("http://localhost:8080/api/asset/list-of-assets")
      .then((res) => {
        setAssets(res.data.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
      setFetchStatus(false)
  };

  const fetchType = () => {
    axios
      .get("http://localhost:8080/api/asset/list-of-types")
      .then((res) => {
        setTypes(res.data.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
      setFetchStatus(false);
  };

  useEffect(() => {
  if(fetchStatus === true){
    fetchAsset();
    fetchType();
  }
    
  }, [fetchStatus]);

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
                        src="../assets/images/users/1.jpg"
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
                                src="../assets/images/users/1.jpg"
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
                            <i className="ti-wallet" /> My Balance
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
                        <a href="index.html">Master Data</a>
                      </li>
                      <li>
                        <a href="index2.html">
                          Request Borrow{" "}
                          <span className="label label-rounded label-success">
                            5
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="index3.html">
                          Request Return{" "}
                          <span className="label label-rounded label-success">
                            5
                          </span>
                        </a>
                      </li>
                      {/* <li>
                        <a href="index4.html">Analytical Dashboard</a>
                      </li>
                      <li>
                        <a href="index5.html">Minimal Dashboard</a>
                      </li> */}
                    </ul>
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
                  <h3 className="text-themecolor m-b-0 m-t-0">Master Data</h3>
                </div>
                <div className="col-md-6 col-4 align-self-center">
                  <button
                    className="btn pull-right hidden-sm-down btn-success"
                    onClick={() => {
                      setModalMode('add')
                      setIsModalOpen(true)}
                    }
                  >
                    <i className="mdi mdi-plus-circle" /> Add Data
                  </button>
                </div>

                <div>
                  <Modal
                    show={isModalOpen}
                    onHide={() => setIsModalOpen(false)}
                    aria-labelledby="myModalLabel"
                  >
                    <Modal.Header>
                      <Modal.Title>Input Asset Data</Modal.Title>
                      <button
                        type="button"
                        className="close"
                        aria-hidden={!isModalOpen}
                        onClick={() => {setIsModalOpen(false)
                        clearAssetState()}}
                      >
                        ×
                      </button>
                    </Modal.Header>
                    <Modal.Body className="px-4 py-3">
                      <form>
                        <input
                          type="hidden"
                          className="form-control"
                          id="id"
                          value={assetData.id}
                        />

                        <div className="form-group">
                          <label
                            htmlFor="serial-number"
                            className="control-label"
                          >
                            Serial Number:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="serialNumber"
                            value={assetData.serialNumber}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="asset-name" className="control-label">
                            Asset Name:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={assetData.name}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="type" className="control-label">
                            Type:
                          </label>
                          <select
                            className="form-control"
                            id="typeId"
                            value={assetData.typeId}
                            onChange={handleChange}
                          >
                            <option value="" disabled>
                              Select asset type...
                            </option>
                            {types.map((type) => (
                              <option key={type.id} value={type.id}>
                                {type.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Hidden Status Field */}
                        <input
                          type="hidden"
                          className="form-control"
                          id="status"
                        />
                      </form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setIsModalOpen(false)
                        clearAssetState()}}
                      >
                        Close
                      </Button>
                      {modalMode === 'add' ? (
    // add mode content
    <Button variant="danger" onClick={() => handleSubmit()}>
    Save changes
  </Button>) : (<Button variant="danger" onClick={() => submitEdit(assetData.id)}>
                        Save changes
                      </Button>
    // edit mode content
  )}
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Asset List</h4>
                      <h6 className="card-subtitle">List of asset</h6>
                      <div className="row m-t-40">
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                          <div className="card card-inverse card-info">
                            <div className="box bg-info text-center">
                              <h1 className="font-light text-white">2,064</h1>
                              <h6 className="text-white">Total Assets</h6>
                            </div>
                          </div>
                        </div>
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                          <div className="card card-primary card-inverse">
                            <div className="box text-center">
                              <h1 className="font-light text-white">1,738</h1>
                              <h6 className="text-white">Awaiting Request</h6>
                            </div>
                          </div>
                        </div>
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                          <div className="card card-inverse card-success">
                            <div className="box text-center">
                              <h1 className="font-light text-white">1100</h1>
                              <h6 className="text-white">In Use</h6>
                            </div>
                          </div>
                        </div>
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                          <div className="card card-inverse card-dark">
                            <div className="box text-center">
                              <h1 className="font-light text-white">964</h1>
                              <h6 className="text-white">Damaged</h6>
                            </div>
                          </div>
                        </div>
                        {/* Column */}
                      </div>
                      <div className="table-responsive">
                        <table
                          id="demo-foo-addrow"
                          className="table m-t-30 table-hover no-wrap contact-list"
                          data-page-size={10}
                        >
                          <thead>
                            <tr>
                              <th>Serial Number</th>
                              <th>Name</th>
                              <th>Type</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {assets.map((asset, index) => {
                              return (
                                <tr key={index}>
                                  <td>{asset.serialNumber}</td>
                                  <td>
                                    <a href="javascript:void(0)">
                                      <img
                                        src="../assets/images/users/1.jpg"
                                        alt="user"
                                        className="img-circle"
                                      />{" "}
                                      {asset.name}
                                    </a>
                                  </td>
                                  <td>{asset.type}</td>
                                  <td>
                                    <span
                                      className={`label ${
                                        asset.status === "Available"
                                          ? "label-success"
                                          : "label-danger"
                                      }`}
                                    >
                                      {asset.status}
                                    </span>
                                  </td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-icon btn-pure btn-outline edit-row-btn"
                                      data-toggle="tooltip"
                                      onClick={() => {
                                        setModalMode('edit')
                                        handleEditClick(asset)}
                                      }
                                      data-original-title="Edit data"
                                    >
                                      <i className="fa fa-pencil-square-o fa-lg" />
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-icon btn-pure btn-outline delete-row-btn"
                                      data-toggle="tooltip"
                                      data-original-title="Delete"
                                      onClick={() => handleDelete(asset.id)}
                                    >
                                      <i className="fa fa-trash-o fa-lg" />
                                    </button>
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

export default Dashboard;
