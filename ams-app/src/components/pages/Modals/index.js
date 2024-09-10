import React from "react";

const Modals = () => {
  return (
    <>
      <div className="fix-header card-no-border">
        {/* ============================================================== */}
        {/* Preloader - style you can find in spinners.css */}
        {/* ============================================================== */}
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
        {/* ============================================================== */}
        {/* Main wrapper - style you can find in pages.scss */}
        {/* ============================================================== */}
        <div id="main-wrapper">
          {/* ============================================================== */}
          {/* Topbar header - style you can find in pages.scss */}
          {/* ============================================================== */}
          <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
              {/* ============================================================== */}
              {/* Logo */}
              {/* ============================================================== */}
              <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                  {/* Logo icon */}
                  <b>
                    {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                    {/* Dark Logo icon */}
                    <img
                      src="../assets/images/logo-icon.png"
                      alt="homepage"
                      className="dark-logo"
                    />
                    {/* Light Logo icon */}
                    <img
                      src="../assets/images/logo-light-icon.png"
                      alt="homepage"
                      className="light-logo"
                    />
                  </b>
                  {/*End Logo icon */}
                  {/* Logo text */}
                  <span>
                    {/* dark Logo text */}
                    <img
                      src="../assets/images/logo-text.png"
                      alt="homepage"
                      className="dark-logo"
                    />
                    {/* Light Logo text */}
                    <img
                      src="../assets/images/logo-light-text.png"
                      className="light-logo"
                      alt="homepage"
                    />
                  </span>{" "}
                </a>
              </div>
              {/* ============================================================== */}
              {/* End Logo */}
              {/* ============================================================== */}
              <div className="navbar-collapse">
                {/* ============================================================== */}
                {/* toggle and nav items */}
                {/* ============================================================== */}
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
                  {/* ============================================================== */}
                  {/* Comment */}
                  {/* ============================================================== */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-muted text-muted waves-effect waves-dark"
                      href=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="mdi mdi-message" />
                      <div className="notify">
                        {" "}
                        <span className="heartbit" /> <span className="point" />{" "}
                      </div>
                    </a>
                    <div className="dropdown-menu mailbox animated bounceInDown">
                      <ul>
                        <li>
                          <div className="drop-title">Notifications</div>
                        </li>
                        <li>
                          <div className="message-center">
                            {/* Message */}
                            <a href="#">
                              <div className="btn btn-danger btn-circle">
                                <i className="fa fa-link" />
                              </div>
                              <div className="mail-contnet">
                                <h5>Luanch Admin</h5>{" "}
                                <span className="mail-desc">
                                  Just see the my new admin!
                                </span>{" "}
                                <span className="time">9:30 AM</span>{" "}
                              </div>
                            </a>
                            {/* Message */}
                            <a href="#">
                              <div className="btn btn-success btn-circle">
                                <i className="ti-calendar" />
                              </div>
                              <div className="mail-contnet">
                                <h5>Event today</h5>{" "}
                                <span className="mail-desc">
                                  Just a reminder that you have event
                                </span>{" "}
                                <span className="time">9:10 AM</span>{" "}
                              </div>
                            </a>
                            {/* Message */}
                            <a href="#">
                              <div className="btn btn-info btn-circle">
                                <i className="ti-settings" />
                              </div>
                              <div className="mail-contnet">
                                <h5>Settings</h5>{" "}
                                <span className="mail-desc">
                                  You can customize this template as you want
                                </span>{" "}
                                <span className="time">9:08 AM</span>{" "}
                              </div>
                            </a>
                            {/* Message */}
                            <a href="#">
                              <div className="btn btn-primary btn-circle">
                                <i className="ti-user" />
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
                            <strong>Check all notifications</strong>{" "}
                            <i className="fa fa-angle-right" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* ============================================================== */}
                  {/* End Comment */}
                  {/* ============================================================== */}
                  {/* ============================================================== */}
                  {/* Messages */}
                  {/* ============================================================== */}
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
                            {/* Message */}
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
                            {/* Message */}
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
                  {/* ============================================================== */}
                  {/* End Messages */}
                  {/* ============================================================== */}
                  {/* ============================================================== */}
                  {/* Messages */}
                  {/* ============================================================== */}
                  <li className="nav-item dropdown mega-dropdown">
                    {" "}
                    <a
                      className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                      href=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="mdi mdi-view-grid" />
                    </a>
                    <div className="dropdown-menu animated bounceInDown">
                      <ul className="mega-dropdown-menu row">
                        <li className="col-lg-3 col-xlg-2 m-b-30">
                          <h4 className="m-b-20">CAROUSEL</h4>
                          {/* CAROUSEL */}
                          <div
                            id="carouselExampleControls"
                            className="carousel slide"
                            data-ride="carousel"
                          >
                            <div className="carousel-inner" role="listbox">
                              <div className="carousel-item active">
                                <div className="container">
                                  {" "}
                                  <img
                                    className="d-block img-fluid"
                                    src="../assets/images/big/img1.jpg"
                                    alt="First slide"
                                  />
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="container">
                                  <img
                                    className="d-block img-fluid"
                                    src="../assets/images/big/img2.jpg"
                                    alt="Second slide"
                                  />
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="container">
                                  <img
                                    className="d-block img-fluid"
                                    src="../assets/images/big/img3.jpg"
                                    alt="Third slide"
                                  />
                                </div>
                              </div>
                            </div>
                            <a
                              className="carousel-control-prev"
                              href="#carouselExampleControls"
                              role="button"
                              data-slide="prev"
                            >
                              {" "}
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              />{" "}
                              <span className="sr-only">Previous</span>{" "}
                            </a>
                            <a
                              className="carousel-control-next"
                              href="#carouselExampleControls"
                              role="button"
                              data-slide="next"
                            >
                              {" "}
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              />{" "}
                              <span className="sr-only">Next</span>{" "}
                            </a>
                          </div>
                          {/* End CAROUSEL */}
                        </li>
                        <li className="col-lg-3 m-b-30">
                          <h4 className="m-b-20">ACCORDION</h4>
                          {/* Accordian */}
                          <div
                            id="accordion"
                            className="nav-accordion"
                            role="tablist"
                            aria-multiselectable="true"
                          >
                            <div className="card">
                              <div
                                className="card-header"
                                role="tab"
                                id="headingOne"
                              >
                                <h5 className="mb-0">
                                  <a
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    Collapsible Group Item #1
                                  </a>
                                </h5>{" "}
                              </div>
                              <div
                                id="collapseOne"
                                className="collapse show"
                                role="tabpanel"
                                aria-labelledby="headingOne"
                              >
                                <div className="card-body">
                                  {" "}
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high.{" "}
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div
                                className="card-header"
                                role="tab"
                                id="headingTwo"
                              >
                                <h5 className="mb-0">
                                  <a
                                    className="collapsed"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    Collapsible Group Item #2
                                  </a>
                                </h5>{" "}
                              </div>
                              <div
                                id="collapseTwo"
                                className="collapse"
                                role="tabpanel"
                                aria-labelledby="headingTwo"
                              >
                                <div className="card-body">
                                  {" "}
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid.{" "}
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div
                                className="card-header"
                                role="tab"
                                id="headingThree"
                              >
                                <h5 className="mb-0">
                                  <a
                                    className="collapsed"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                    href="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                  >
                                    Collapsible Group Item #3
                                  </a>
                                </h5>{" "}
                              </div>
                              <div
                                id="collapseThree"
                                className="collapse"
                                role="tabpanel"
                                aria-labelledby="headingThree"
                              >
                                <div className="card-body">
                                  {" "}
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high life accusamus terry richardson
                                  ad squid.{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="col-lg-3  m-b-30">
                          <h4 className="m-b-20">CONTACT US</h4>
                          {/* Contact */}
                          <form>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputname1"
                                placeholder="Enter Name"
                              />{" "}
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter email"
                              />{" "}
                            </div>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                id="exampleTextarea"
                                rows={3}
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                            <button type="submit" className="btn btn-info">
                              Submit
                            </button>
                          </form>
                        </li>
                        <li className="col-lg-3 col-xlg-4 m-b-30">
                          <h4 className="m-b-20">List style</h4>
                          {/* List style */}
                          <ul className="list-style-none">
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-check text-success" /> You
                                can give link
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-check text-success" /> Give
                                link
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-check text-success" />{" "}
                                Another Give link
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-check text-success" /> Forth
                                link
                              </a>
                            </li>
                            <li>
                              <a href="javascript:void(0)">
                                <i className="fa fa-check text-success" />{" "}
                                Another fifth link
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  {/* ============================================================== */}
                  {/* End Messages */}
                  {/* ============================================================== */}
                </ul>
                {/* ============================================================== */}
                {/* User profile and search */}
                {/* ============================================================== */}
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
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                      href=""
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="flag-icon flag-icon-us" />
                    </a>
                    <div className="dropdown-menu  dropdown-menu-right animated bounceInDown">
                      {" "}
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-in" /> India
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-fr" /> French
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-cn" /> China
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-de" /> Dutch
                      </a>{" "}
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          {/* ============================================================== */}
          {/* End Topbar header */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Left Sidebar - style you can find in sidebar.scss  */}
          {/* ============================================================== */}
          <aside className="left-sidebar">
            {/* Sidebar scroll*/}
            <div className="scroll-sidebar">
              {/* User profile */}
              <div className="user-profile">
                {/* User profile image */}
                <div className="profile-img">
                  {" "}
                  <img src="../assets/images/users/1.jpg" alt="user" />{" "}
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
                      <i className="ti-wallet" /> My Balance
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
              {/* End User profile text*/}
              {/* Sidebar navigation*/}
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
                        <a href="index.html">Modern Dashboard</a>
                      </li>
                      <li>
                        <a href="index2.html">Awesome Dashboard</a>
                      </li>
                      <li>
                        <a href="index3.html">Classy Dashboard</a>
                      </li>
                      <li>
                        <a href="index4.html">Analytical Dashboard</a>
                      </li>
                      <li>
                        <a href="index5.html">Minimal Dashboard</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow " href="#" aria-expanded="false">
                      <i className="mdi mdi-bullseye" />
                      <span className="hide-menu">Apps</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="app-calendar.html">Calendar</a>
                      </li>
                      <li>
                        <a href="app-chat.html">Chat app</a>
                      </li>
                      <li>
                        <a href="app-ticket.html">Support Ticket</a>
                      </li>
                      <li>
                        <a href="app-contact.html">Contact / Employee</a>
                      </li>
                      <li>
                        <a href="app-contact2.html">Contact Grid</a>
                      </li>
                      <li>
                        <a href="app-contact-detail.html">Contact Detail</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow " href="#" aria-expanded="false">
                      <i className="mdi mdi-email" />
                      <span className="hide-menu">Inbox</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="app-email.html">Mailbox</a>
                      </li>
                      <li>
                        <a href="app-email-detail.html">Mailbox Detail</a>
                      </li>
                      <li>
                        <a href="app-compose.html">Compose Mail</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow" href="#" aria-expanded="false">
                      <i className="mdi mdi-chart-bubble" />
                      <span className="hide-menu">Ui Elements</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="ui-cards.html">Cards</a>
                      </li>
                      <li>
                        <a href="ui-user-card.html">User Cards</a>
                      </li>
                      <li>
                        <a href="ui-buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="ui-modals.html">Modals</a>
                      </li>
                      <li>
                        <a href="ui-tab.html">Tab</a>
                      </li>
                      <li>
                        <a href="ui-tooltip-popover.html">
                          Tooltip &amp; Popover
                        </a>
                      </li>
                      <li>
                        <a href="ui-tooltip-stylish.html">Tooltip stylish</a>
                      </li>
                      <li>
                        <a href="ui-sweetalert.html">Sweet Alert</a>
                      </li>
                      <li>
                        <a href="ui-notification.html">Notification</a>
                      </li>
                      <li>
                        <a href="ui-progressbar.html">Progressbar</a>
                      </li>
                      <li>
                        <a href="ui-nestable.html">Nestable</a>
                      </li>
                      <li>
                        <a href="ui-range-slider.html">Range slider</a>
                      </li>
                      <li>
                        <a href="ui-timeline.html">Timeline</a>
                      </li>
                      <li>
                        <a href="ui-typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="ui-horizontal-timeline.html">
                          Horizontal Timeline
                        </a>
                      </li>
                      <li>
                        <a href="ui-session-timeout.html">Session Timeout</a>
                      </li>
                      <li>
                        <a href="ui-session-ideal-timeout.html">
                          Session Ideal Timeout
                        </a>
                      </li>
                      <li>
                        <a href="ui-bootstrap.html">Bootstrap Ui</a>
                      </li>
                      <li>
                        <a href="ui-breadcrumb.html">Breadcrumb</a>
                      </li>
                      <li>
                        <a href="ui-bootstrap-switch.html">Bootstrap Switch</a>
                      </li>
                      <li>
                        <a href="ui-list-media.html">List Media</a>
                      </li>
                      <li>
                        <a href="ui-ribbons.html">Ribbons</a>
                      </li>
                      <li>
                        <a href="ui-grid.html">Grid</a>
                      </li>
                      <li>
                        <a href="ui-carousel.html">Carousel</a>
                      </li>
                      <li>
                        <a href="ui-date-paginator.html">Date-paginator</a>
                      </li>
                      <li>
                        <a href="ui-dragable-portlet.html">Dragable Portlet</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-devider" />
                  <li className="nav-small-cap">FORMS, TABLE &amp; WIDGETS</li>
                  <li>
                    <a className="has-arrow" href="#" aria-expanded="false">
                      <i className="mdi mdi-file" />
                      <span className="hide-menu">Forms</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="form-basic.html">Basic Forms</a>
                      </li>
                      <li>
                        <a href="form-layout.html">Form Layouts</a>
                      </li>
                      <li>
                        <a href="form-addons.html">Form Addons</a>
                      </li>
                      <li>
                        <a href="form-material.html">Form Material</a>
                      </li>
                      <li>
                        <a href="form-float-input.html">Floating Lable</a>
                      </li>
                      <li>
                        <a href="form-pickers.html">Form Pickers</a>
                      </li>
                      <li>
                        <a href="form-upload.html">File Upload</a>
                      </li>
                      <li>
                        <a href="form-mask.html">Form Mask</a>
                      </li>
                      <li>
                        <a href="form-validation.html">Form Validation</a>
                      </li>
                      <li>
                        <a href="form-dropzone.html">File Dropzone</a>
                      </li>
                      <li>
                        <a href="form-icheck.html">Icheck control</a>
                      </li>
                      <li>
                        <a href="form-img-cropper.html">Image Cropper</a>
                      </li>
                      <li>
                        <a href="form-bootstrapwysihtml5.html">HTML5 Editor</a>
                      </li>
                      <li>
                        <a href="form-typehead.html">Form Typehead</a>
                      </li>
                      <li>
                        <a href="form-wizard.html">Form Wizard</a>
                      </li>
                      <li>
                        <a href="form-xeditable.html">Xeditable Editor</a>
                      </li>
                      <li>
                        <a href="form-summernote.html">Summernote Editor</a>
                      </li>
                      <li>
                        <a href="form-tinymce.html">Tinymce Editor</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow " href="#" aria-expanded="false">
                      <i className="mdi mdi-table" />
                      <span className="hide-menu">Tables</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="table-basic.html">Basic Tables</a>
                      </li>
                      <li>
                        <a href="table-layout.html">Table Layouts</a>
                      </li>
                      <li>
                        <a href="table-data-table.html">Data Tables</a>
                      </li>
                      <li>
                        <a href="table-footable.html">Footable</a>
                      </li>
                      <li>
                        <a href="table-jsgrid.html">Js Grid Table</a>
                      </li>
                      <li>
                        <a href="table-responsive.html">Responsive Table</a>
                      </li>
                      <li>
                        <a href="table-bootstrap.html">Bootstrap Tables</a>
                      </li>
                      <li>
                        <a href="table-editable-table.html">Editable Table</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow " href="#" aria-expanded="false">
                      <i className="mdi mdi-widgets" />
                      <span className="hide-menu">Widgets</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="widget-apps.html">Widget Apps</a>
                      </li>
                      <li>
                        <a href="widget-data.html">Widget Data</a>
                      </li>
                      <li>
                        <a href="widget-charts.html">Widget Charts</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-devider" />
                  <li className="nav-small-cap">EXTRA COMPONENTS</li>
                  <li>
                    <a className="has-arrow " href="#" aria-expanded="false">
                      <i className="mdi mdi-book-multiple" />
                      <span className="hide-menu">Page Layout</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="layout-single-column.html">1 Column</a>
                      </li>
                      <li>
                        <a href="layout-fix-header.html">Fix header</a>
                      </li>
                      <li>
                        <a href="layout-fix-sidebar.html">Fix sidebar</a>
                      </li>
                      <li>
                        <a href="layout-fix-header-sidebar.html">
                          Fixe header &amp; Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="layout-boxed.html">Boxed Layout</a>
                      </li>
                      <li>
                        <a href="layout-logo-center.html">Logo in Center</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow " href="#" aria-expanded="false">
                      <i className="mdi mdi-book-open-variant" />
                      <span className="hide-menu">Sample Pages</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="starter-kit.html">Starter Kit</a>
                      </li>
                      <li>
                        <a href="pages-blank.html">Blank page</a>
                      </li>
                      <li>
                        <a href="#" className="has-arrow">
                          Authentication{" "}
                          <span className="label label-rounded label-success">
                            6
                          </span>
                        </a>
                        <ul aria-expanded="false" className="collapse">
                          <li>
                            <a href="pages-login.html">Login 1</a>
                          </li>
                          <li>
                            <a href="pages-login-2.html">Login 2</a>
                          </li>
                          <li>
                            <a href="pages-register.html">Register</a>
                          </li>
                          <li>
                            <a href="pages-register2.html">Register 2</a>
                          </li>
                          <li>
                            <a href="pages-lockscreen.html">Lockscreen</a>
                          </li>
                          <li>
                            <a href="pages-recover-password.html">
                              Recover password
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="pages-profile.html">Profile page</a>
                      </li>
                      <li>
                        <a href="pages-animation.html">Animation</a>
                      </li>
                      <li>
                        <a href="pages-fix-innersidebar.html">
                          Sticky Left sidebar
                        </a>
                      </li>
                      <li>
                        <a href="pages-fix-inner-right-sidebar.html">
                          Sticky Right sidebar
                        </a>
                      </li>
                      <li>
                        <a href="pages-invoice.html">Invoice</a>
                      </li>
                      <li>
                        <a href="pages-treeview.html">Treeview</a>
                      </li>
                      <li>
                        <a href="pages-utility-classes.html">Helper Classes</a>
                      </li>
                      <li>
                        <a href="pages-search-result.html">Search result</a>
                      </li>
                      <li>
                        <a href="pages-scroll.html">Scrollbar</a>
                      </li>
                      <li>
                        <a href="pages-pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="pages-lightbox-popup.html">Lighbox popup</a>
                      </li>
                      <li>
                        <a href="pages-gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="pages-faq.html">Faqs</a>
                      </li>
                      <li>
                        <a href="#" className="has-arrow">
                          Error Pages
                        </a>
                        <ul aria-expanded="false" className="collapse">
                          <li>
                            <a href="pages-error-400.html">400</a>
                          </li>
                          <li>
                            <a href="pages-error-403.html">403</a>
                          </li>
                          <li>
                            <a href="pages-error-404.html">404</a>
                          </li>
                          <li>
                            <a href="pages-error-500.html">500</a>
                          </li>
                          <li>
                            <a href="pages-error-503.html">503</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow " href="#" aria-expanded="false">
                      <i className="mdi mdi-file-chart" />
                      <span className="hide-menu">Charts</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="chart-morris.html">Morris Chart</a>
                      </li>
                      <li>
                        <a href="chart-chartist.html">Chartis Chart</a>
                      </li>
                      <li>
                        <a href="chart-echart.html">Echarts</a>
                      </li>
                      <li>
                        <a href="chart-flot.html">Flot Chart</a>
                      </li>
                      <li>
                        <a href="chart-knob.html">Knob Chart</a>
                      </li>
                      <li>
                        <a href="chart-chart-js.html">Chartjs</a>
                      </li>
                      <li>
                        <a href="chart-sparkline.html">Sparkline Chart</a>
                      </li>
                      <li>
                        <a href="chart-extra-chart.html">Extra chart</a>
                      </li>
                      <li>
                        <a href="chart-peity.html">Peity Charts</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow " href="#" aria-expanded="false">
                      <i className="mdi mdi-brush" />
                      <span className="hide-menu">Icons</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="icon-material.html">Material Icons</a>
                      </li>
                      <li>
                        <a href="icon-fontawesome.html">Fontawesome Icons</a>
                      </li>
                      <li>
                        <a href="icon-themify.html">Themify Icons</a>
                      </li>
                      <li>
                        <a href="icon-linea.html">Linea Icons</a>
                      </li>
                      <li>
                        <a href="icon-weather.html">Weather Icons</a>
                      </li>
                      <li>
                        <a href="icon-simple-lineicon.html">Simple Lineicons</a>
                      </li>
                      <li>
                        <a href="icon-flag.html">Flag Icons</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow " href="#" aria-expanded="false">
                      <i className="mdi mdi-map-marker" />
                      <span className="hide-menu">Maps</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="map-google.html">Google Maps</a>
                      </li>
                      <li>
                        <a href="map-vector.html">Vector Maps</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="has-arrow " href="#" aria-expanded="false">
                      <i className="mdi mdi-arrange-send-backward" />
                      <span className="hide-menu">Multi level dd</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a href="#">item 1.1</a>
                      </li>
                      <li>
                        <a href="#">item 1.2</a>
                      </li>
                      <li>
                        <a className="has-arrow" href="#" aria-expanded="false">
                          Menu 1.3
                        </a>
                        <ul aria-expanded="false" className="collapse">
                          <li>
                            <a href="#">item 1.3.1</a>
                          </li>
                          <li>
                            <a href="#">item 1.3.2</a>
                          </li>
                          <li>
                            <a href="#">item 1.3.3</a>
                          </li>
                          <li>
                            <a href="#">item 1.3.4</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">item 1.4</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
            {/* Bottom points*/}
            <div className="sidebar-footer">
              {/* item*/}
              <a
                href=""
                className="link"
                data-toggle="tooltip"
                title="Settings"
              >
                <i className="ti-settings" />
              </a>
              {/* item*/}
              <a href="" className="link" data-toggle="tooltip" title="Email">
                <i className="mdi mdi-gmail" />
              </a>
              {/* item*/}
              <a href="" className="link" data-toggle="tooltip" title="Logout">
                <i className="mdi mdi-power" />
              </a>
            </div>
            {/* End Bottom points*/}
          </aside>
          {/* ============================================================== */}
          {/* End Left Sidebar - style you can find in sidebar.scss  */}
          {/* ============================================================== */}
          {/* ============================================================== */}
          {/* Page wrapper  */}
          {/* ============================================================== */}
          <div className="page-wrapper">
            {/* ============================================================== */}
            {/* Container fluid  */}
            {/* ============================================================== */}
            <div className="container-fluid">
              {/* ============================================================== */}
              {/* Bread crumb and right sidebar toggle */}
              {/* ============================================================== */}
              <div className="row page-titles">
                <div className="col-md-6 col-8 align-self-center">
                  <h3 className="text-themecolor m-b-0 m-t-0">Dashboard</h3>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="javascript:void(0)">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
                <div className="col-md-6 col-4 align-self-center">
                  <button className="right-side-toggle waves-effect waves-light btn-info btn-circle btn-sm pull-right m-l-10">
                    <i className="ti-settings text-white" />
                  </button>
                  <button className="btn pull-right hidden-sm-down btn-success">
                    <i className="mdi mdi-plus-circle" /> Create
                  </button>
                  <div className="dropdown pull-right m-r-10 hidden-sm-down">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {" "}
                      January 2017{" "}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {" "}
                      <a className="dropdown-item" href="#">
                        February 2017
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        March 2017
                      </a>{" "}
                      <a className="dropdown-item" href="#">
                        April 2017
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* ============================================================== */}
              {/* End Bread crumb and right sidebar toggle */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* Start Page Content */}
              {/* ============================================================== */}
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">
                        Large modal <small>Click on image</small>
                      </h4>
                      {/* sample modal content */}
                      <div
                        className="modal fade bs-example-modal-lg"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="myLargeModalLabel"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4
                                className="modal-title"
                                id="myLargeModalLabel"
                              >
                                Large modal
                              </h4>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                              >
                                ×
                              </button>
                            </div>
                            <div className="modal-body">
                              <h4>Overflowing text to show scroll behavior</h4>
                              <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur et. Vivamus sagittis lacus vel
                                augue laoreet rutrum faucibus dolor auctor.
                              </p>
                              <p>
                                Aenean lacinia bibendum nulla sed consectetur.
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur et. Donec sed odio dui. Donec
                                ullamcorper nulla non metus auctor fringilla.
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-danger waves-effect text-left"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                          {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                      </div>
                      {/* /.modal */}
                      <img
                        src="../assets/images/alert/model2.png"
                        alt="default"
                        data-toggle="modal"
                        data-target=".bs-example-modal-lg"
                        className="model_img img-responsive"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">
                        Medium model <small>Click on image</small>
                      </h4>
                      {/* sample modal content */}
                      <div
                        id="myModal"
                        className="modal fade"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="myModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4 className="modal-title" id="myModalLabel">
                                Modal Heading
                              </h4>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                              >
                                ×
                              </button>
                            </div>
                            <div className="modal-body">
                              <h4>Overflowing text to show scroll behavior</h4>
                              <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur et. Vivamus sagittis lacus vel
                                augue laoreet rutrum faucibus dolor auctor.
                              </p>
                              <p>
                                Aenean lacinia bibendum nulla sed consectetur.
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur et. Donec sed odio dui. Donec
                                ullamcorper nulla non metus auctor fringilla.
                              </p>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-info waves-effect"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                          {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                      </div>
                      {/* /.modal */}
                      <img
                        src="../assets/images/alert/model.png"
                        alt="default"
                        data-toggle="modal"
                        data-target="#myModal"
                        className="model_img img-responsive"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">
                        Small model <small>Click on image</small>
                      </h4>
                      {/* sample modal content */}
                      <div
                        className="modal fade bs-example-modal-sm"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="mySmallModalLabel"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog modal-sm">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4
                                className="modal-title"
                                id="mySmallModalLabel"
                              >
                                Small modal
                              </h4>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                              >
                                ×
                              </button>
                            </div>
                            <div className="modal-body">
                              {" "}
                              content will be here{" "}
                            </div>
                          </div>
                          {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                      </div>
                      {/* /.modal */}
                      <img
                        src="../assets/images/alert/model3.png"
                        alt="default"
                        data-toggle="modal"
                        data-target=".bs-example-modal-sm"
                        className="model_img img-responsive"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Responsive model</h4>
                      {/* sample modal content */}
                      <div
                        id="responsive-modal"
                        className="modal fade"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="myModalLabel"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                              >
                                ×
                              </button>
                              <h4 className="modal-title">
                                Modal Content is Responsive
                              </h4>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="form-group">
                                  <label
                                    htmlFor="recipient-name"
                                    className="control-label"
                                  >
                                    Recipient:
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                                <div className="form-group">
                                  <label
                                    htmlFor="message-text"
                                    className="control-label"
                                  >
                                    Message:
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="message-text"
                                    defaultValue={""}
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-default waves-effect"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger waves-effect waves-light"
                              >
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.modal */}
                      <img
                        src="../assets/images/alert/model.png"
                        alt="default"
                        data-toggle="modal"
                        data-target="#responsive-moda"
                        className="model_img img-responsive"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">
                        Modal based on trigger button
                      </h4>
                      {/* sample modal content */}
                      <div className="button-box">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          data-whatever="@mdo"
                        >
                          Open modal for @mdo
                        </button>
                        <button
                          type="button"
                          className="btn btn-info"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          data-whatever="@fat"
                        >
                          Open modal for @fat
                        </button>
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          data-whatever="@getbootstrap"
                        >
                          Open modal for @getbootstrap
                        </button>
                      </div>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="exampleModalLabel1"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4
                                className="modal-title"
                                id="exampleModalLabel1"
                              >
                                New message
                              </h4>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="form-group">
                                  <label
                                    htmlFor="recipient-name"
                                    className="control-label"
                                  >
                                    Recipient:
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="recipient-name1"
                                  />
                                </div>
                                <div className="form-group">
                                  <label
                                    htmlFor="message-text"
                                    className="control-label"
                                  >
                                    Message:
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="message-text1"
                                    defaultValue={""}
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-default"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Send message
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /.modal */}
                    </div>
                  </div>
                </div>
              </div>
              {/* ============================================================== */}
              {/* End PAge Content */}
              {/* ============================================================== */}
              {/* ============================================================== */}
              {/* Right sidebar */}
              {/* ============================================================== */}
              {/* .right-sidebar */}
              <div className="right-sidebar">
                <div className="slimscrollright">
                  <div className="rpanel-title">
                    {" "}
                    Service Panel{" "}
                    <span>
                      <i className="ti-close right-side-toggle" />
                    </span>{" "}
                  </div>
                  <div className="r-panel-body">
                    <ul id="themecolors" className="m-t-20">
                      <li>
                        <b>With Light sidebar</b>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="default"
                          className="default-theme"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="green"
                          className="green-theme"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="red"
                          className="red-theme"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="blue"
                          className="blue-theme working"
                        >
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="purple"
                          className="purple-theme"
                        >
                          5
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="megna"
                          className="megna-theme"
                        >
                          6
                        </a>
                      </li>
                      <li className="d-block m-t-30">
                        <b>With Dark sidebar</b>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="default-dark"
                          className="default-dark-theme"
                        >
                          7
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="green-dark"
                          className="green-dark-theme"
                        >
                          8
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="red-dark"
                          className="red-dark-theme"
                        >
                          9
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="blue-dark"
                          className="blue-dark-theme"
                        >
                          10
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="purple-dark"
                          className="purple-dark-theme"
                        >
                          11
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          data-theme="megna-dark"
                          className="megna-dark-theme "
                        >
                          12
                        </a>
                      </li>
                    </ul>
                    <ul className="m-t-20 chatonline">
                      <li>
                        <b>Chat option</b>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/users/1.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Varun Dhavan{" "}
                            <small className="text-success">online</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/users/2.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Genelia Deshmukh{" "}
                            <small className="text-warning">Away</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/users/3.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Ritesh Deshmukh{" "}
                            <small className="text-danger">Busy</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/users/4.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Arijit Sinh{" "}
                            <small className="text-muted">Offline</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/users/5.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Govinda Star{" "}
                            <small className="text-success">online</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/users/6.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            John Abraham
                            <small className="text-success">online</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/users/7.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Hritik Roshan
                            <small className="text-success">online</small>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <img
                            src="../assets/images/users/8.jpg"
                            alt="user-img"
                            className="img-circle"
                          />{" "}
                          <span>
                            Pwandeep rajan{" "}
                            <small className="text-success">online</small>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ============================================================== */}
              {/* End Right sidebar */}
              {/* ============================================================== */}
            </div>
            {/* ============================================================== */}
            {/* End Container fluid  */}
            {/* ============================================================== */}
            {/* ============================================================== */}
            {/* footer */}
            {/* ============================================================== */}
            <footer className="footer">
              {" "}
              © 2017 Monster Admin by wrappixel.com{" "}
            </footer>
            {/* ============================================================== */}
            {/* End footer */}
            {/* ============================================================== */}
          </div>
          {/* ============================================================== */}
          {/* End Page wrapper  */}
          {/* ============================================================== */}
        </div>
      </div>
    </>
  );
};

export default Modals;
