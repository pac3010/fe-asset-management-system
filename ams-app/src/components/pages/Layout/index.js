import { useState, useEffect } from "react";
import { Logout } from "../Logout";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

export let Layout = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [sessionData, setSessionData] = useState({
        userId: null,
        employeeId: null,
        roleId: null,
        username: '' // Consistent with 'userName'
    });

    // Fetch session data when component mounts
    useEffect(() => {
        const fetchSessionData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/account/session', {
                    withCredentials: true,
                }); // API call to get session data
                console.log(response.data);
                setSessionData(response.data); // Set session data including userName
            } catch (error) {
                console.error('Error fetching session data', error);
            }
        };

        fetchSessionData();
    }, []);

    // Destructure roleId and userName from sessionData
    const { roleId, username } = sessionData;
    return (

        <>

            <header class="topbar">
                <nav class="navbar top-navbar navbar-expand-md navbar-light">
                    {/* <!-- ============================================================== -->
                    <!-- Logo -->
                    <!-- ============================================================== --> */}
                    <div class="navbar-header">
                        <a class="navbar-brand" href="index.html">
                            {/* <!-- Logo icon --> */}
                            <b>
                                {/* <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                                <!-- Dark Logo icon --> */}
                                <img src="../../images/logo-icon.png" alt="homepage" class="dark-logo" />
                                {/* <!-- Light Logo icon --> */}
                                <img src="../assets/images/logo-light-icon.png" alt="homepage" class="light-logo" />
                            </b>
                            {/* <!--End Logo icon -->
                            <!-- Logo text --> */}
                            <span>
                                {/* <!-- dark Logo text --> */}
                                <img src="../assets/images/logo-text.png" alt="homepage" class="dark-logo" />
                                {/* <!-- Light Logo text --> */}
                                <img src="../assets/images/logo-light-text.png" class="light-logo" alt="homepage" /></span> </a>
                    </div>
                    {/* <!-- ============================================================== -->
                    <!-- End Logo -->
                    <!-- ============================================================== --> */}
                    <div class="navbar-collapse">
                        {/* <!-- ============================================================== -->
                        <!-- toggle and nav items -->
                        <!-- ============================================================== --> */}
                        <ul class="navbar-nav mr-auto mt-md-0 ">
                            {/* <!-- This is  --> */}
                            <li class="nav-item"> <a class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                            <li class="nav-item"> <a class="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="javascript:void(0)"><i class="icon-arrow-left-circle"></i></a> </li>
                            {/* <!-- ============================================================== -->
                            <!-- Comment -->
                            <!-- ============================================================== --> */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-muted text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-message"></i>
                                    <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                                </a>
                                <div class="dropdown-menu mailbox animated bounceInDown">
                                    <ul>
                                        <li>
                                            <div class="drop-title">Notifications</div>
                                        </li>
                                        <li>
                                            <div class="message-center">
                                                {/* <!-- Message --> */}
                                                <a href="#">
                                                    <div class="btn btn-danger btn-circle"><i class="fa fa-link"></i></div>
                                                    <div class="mail-contnet">
                                                        <h5>Luanch Admin</h5> <span class="mail-desc">Just see the my new admin!</span> <span class="time">9:30 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="#">
                                                    <div class="btn btn-success btn-circle"><i class="ti-calendar"></i></div>
                                                    <div class="mail-contnet">
                                                        <h5>Event today</h5> <span class="mail-desc">Just a reminder that you have event</span> <span class="time">9:10 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="#">
                                                    <div class="btn btn-info btn-circle"><i class="ti-settings"></i></div>
                                                    <div class="mail-contnet">
                                                        <h5>Settings</h5> <span class="mail-desc">You can customize this template as you want</span> <span class="time">9:08 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="#">
                                                    <div class="btn btn-primary btn-circle"><i class="ti-user"></i></div>
                                                    <div class="mail-contnet">
                                                        <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <a class="nav-link text-center" href="javascript:void(0);"> <strong>Check all notifications</strong> <i class="fa fa-angle-right"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <!-- ============================================================== -->
                            <!-- End Comment -->
                            <!-- ============================================================== -->
                            <!-- ============================================================== -->
                            <!-- Messages -->
                            <!-- ============================================================== --> */}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-email"></i>
                                    <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                                </a>
                                <div class="dropdown-menu mailbox animated bounceInDown" aria-labelledby="2">
                                    <ul>
                                        <li>
                                            <div class="drop-title">You have 4 new messages</div>
                                        </li>
                                        <li>
                                            <div class="message-center">
                                                {/* <!-- Message --> */}
                                                <a href="#">
                                                    <div class="user-img"> <img src="../assets/images/users/1.jpg" alt="user" class="img-circle" /> <span class="profile-status online pull-right"></span> </div>
                                                    <div class="mail-contnet">
                                                        <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:30 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="#">
                                                    <div class="user-img"> <img src="../assets/images/users/2.jpg" alt="user" class="img-circle" /> <span class="profile-status busy pull-right"></span> </div>
                                                    <div class="mail-contnet">
                                                        <h5>Sonu Nigam</h5> <span class="mail-desc">I've sung a song! See you at</span> <span class="time">9:10 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="#">
                                                    <div class="user-img"> <img src="../assets/images/users/3.jpg" alt="user" class="img-circle" /> <span class="profile-status away pull-right"></span> </div>
                                                    <div class="mail-contnet">
                                                        <h5>Arijit Sinh</h5> <span class="mail-desc">I am a singer!</span> <span class="time">9:08 AM</span> </div>
                                                </a>
                                                {/* <!-- Message --> */}
                                                <a href="#">
                                                    <div class="user-img"> <img src="../assets/images/users/4.jpg" alt="user" class="img-circle" /> <span class="profile-status offline pull-right"></span> </div>
                                                    <div class="mail-contnet">
                                                        <h5>Pavan kumar</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span> </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <a class="nav-link text-center" href="javascript:void(0);"> <strong>See all e-Mails</strong> <i class="fa fa-angle-right"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <!-- ============================================================== -->
                            <!-- End Messages -->
                            <!-- ============================================================== -->
                            <!-- ============================================================== -->
                            <!-- Messages -->
                            <!-- ============================================================== --> */}
                            <li class="nav-item dropdown mega-dropdown"> <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-view-grid"></i></a>
                                <div class="dropdown-menu animated bounceInDown">
                                    <ul class="mega-dropdown-menu row">
                                        <li class="col-lg-3 col-xlg-2 m-b-30">
                                            <h4 class="m-b-20">CAROUSEL</h4>
                                            {/* <!-- CAROUSEL --> */}
                                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                                <div class="carousel-inner" role="listbox">
                                                    <div class="carousel-item active">
                                                        <div class="container"> <img class="d-block img-fluid" src="../assets/images/big/img1.jpg" alt="First slide" /></div>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <div class="container"><img class="d-block img-fluid" src="../assets/images/big/img2.jpg" alt="Second slide" /></div>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <div class="container"><img class="d-block img-fluid" src="../assets/images/big/img3.jpg" alt="Third slide" /></div>
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
                                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
                                            </div>
                                            {/* <!-- End CAROUSEL --> */}
                                        </li>
                                        <li class="col-lg-3 m-b-30">
                                            <h4 class="m-b-20">ACCORDION</h4>
                                            {/* <!-- Accordian --> */}
                                            <div id="accordion" class="nav-accordion" role="tablist" aria-multiselectable="true">
                                                <div class="card">
                                                    <div class="card-header" role="tab" id="headingOne">
                                                        <h5 class="mb-0">
                                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Collapsible Group Item #1
                                                            </a>
                                                        </h5> </div>
                                                    <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                                        <div class="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high. </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" role="tab" id="headingTwo">
                                                        <h5 class="mb-0">
                                                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Collapsible Group Item #2
                                                            </a>
                                                        </h5> </div>
                                                    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                        <div class="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" role="tab" id="headingThree">
                                                        <h5 class="mb-0">
                                                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Collapsible Group Item #3
                                                            </a>
                                                        </h5> </div>
                                                    <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
                                                        <div class="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="col-lg-3  m-b-30">
                                            <h4 class="m-b-20">CONTACT US</h4>
                                            {/* <!-- Contact --> */}
                                            <form>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="exampleInputname1" placeholder="Enter Name" /> </div>
                                                <div class="form-group">
                                                    <input type="email" class="form-control" placeholder="Enter email" /> </div>
                                                <div class="form-group">
                                                    <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                                                </div>
                                                <button type="submit" class="btn btn-info">Submit</button>
                                            </form>
                                        </li>
                                        <li class="col-lg-3 col-xlg-4 m-b-30">
                                            <h4 class="m-b-20">List style</h4>
                                            {/* <!-- List style --> */}
                                            <ul class="list-style-none">
                                                <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> You can give link</a></li>
                                                <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Give link</a></li>
                                                <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Another Give link</a></li>
                                                <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Forth link</a></li>
                                                <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Another fifth link</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <!-- ============================================================== -->
                            <!-- End Messages -->
                            <!-- ============================================================== --> */}
                        </ul>
                        {/* <!-- ============================================================== -->
                        <!-- User profile and search -->
                        <!-- ============================================================== --> */}
                        <ul class="navbar-nav my-lg-0">
                            <li class="nav-item hidden-sm-down">
                                <form class="app-search">
                                    <input type="text" class="form-control" placeholder="Search for..." /> <a class="srh-btn"><i class="ti-search"></i></a> </form>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user" class="profile-pic" /></a>
                                <div class="dropdown-menu dropdown-menu-right animated flipInY">
                                    <ul class="dropdown-user">
                                        <li>
                                            <div class="dw-user-box">
                                                <div class="u-img"><img src="../../images/users/1.jpg" alt="user" /></div>
                                                <div class="u-text">
                                                    <h4>Steave Jobs</h4>
                                                    <p class="text-muted">varun@gmail.com</p><a href="profile.html" class="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                                            </div>
                                        </li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="#"><i class="ti-user"></i> My Profile</a></li>
                                        <li><a href="#"><i class="ti-wallet"></i> My Balance</a></li>
                                        <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="#"><i class="ti-settings"></i> Account Setting</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="#"><i class="fa fa-power-off"></i> Logout</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="flag-icon flag-icon-us"></i></a>
                                <div class="dropdown-menu  dropdown-menu-right animated bounceInDown"> <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-in"></i> India</a> <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-fr"></i> French</a> <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-cn"></i> China</a> <a class="dropdown-item" href="#"><i class="flag-icon flag-icon-de"></i> Dutch</a> </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <aside class="left-sidebar">
                {/* <!-- Sidebar scroll--> */}
                <div class="scroll-sidebar">
                    {/* <!-- User profile --> */}
                    <div class="user-profile">
                        {/* <!-- User profile image --> */}
                        <div class="profile-img"> <img src="../../images/users/1.jpg" alt="user" /> </div>
                        {/* <!-- User profile text--> */}
                        <div class="profile-text"> <a href="" class="dropdown-toggle link u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">  {username ? username : 'Loading...'}<span class="caret"></span></a>
                            <div class="dropdown-menu animated flipInY">
                                <a href="#" class="dropdown-item"><i class="ti-user"></i>  {username ? username : 'Loading...'}</a>
                                <a href="#" class="dropdown-item"><i class="ti-wallet"></i> My Balance</a>
                                <a href="#" class="dropdown-item"><i class="ti-email"></i> Inbox</a>
                                <div class="dropdown-divider"></div> <a href="#" class="dropdown-item"><i class="ti-settings"></i> Account Setting</a>

                            </div>
                        </div>
                    </div>
                    {/* <!-- End User profile text-->
                    <!-- Sidebar navigation--> */}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            <li className="nav-small-cap">PERSONAL</li>
                            <li>
                                {/* Toggle Dropdown */}
                                <a
                                    href="javascript:void(0)"
                                    className="has-arrow"
                                    aria-expanded={isDropdownOpen}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <i className="mdi mdi-gauge"></i>
                                    <span className="hide-menu">
                                        Dashboard 
                                        {/* <span className="label label-rounded label-success">5</span> */}
                                    </span>
                                </a>

                                {/* Dropdown content controlled by state */}
                                <ul className={`collapse ${isDropdownOpen ? 'show' : ''}`}>
                                    {/* <li><Link to="/">Dashboard</Link></li> */}

                                    {/* Conditional links based on role */}
                                    {roleId === 1 && (
                                        <>
                                            <li><Link to="/admin-panel">Admin Panel</Link></li>
                                            <li><Link to="/manage-users">Manage Users</Link></li>
                                        </>
                                    )}

                                    {roleId === 2 && (
                                        <>
                                            <li><Link to="/dashboardManager">Manager Dashboard</Link></li>
                                            <li><Link to="/cardListManajer">Borrow Asset</Link></li>
                                            <li><Link to="/team-overview">Team Overview</Link></li>
                                            <li><Link to="/about-us">About Us</Link></li>
                                        </>
                                    )}

                                    {roleId === 3 && (
                                        <>
                                            <li><Link to="/dashboardBorrower">Borrower Dashboard</Link></li>
                                            <li><Link to="/cardList">Borrow Asset</Link></li>
                                            <li><Link to="/about-us-borrower">About Us</Link></li>
                                        </>
                                    )}

                                    {/* Common links for all roles */}
                                 
                                    <li><Link to="/help">Help</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- End Sidebar navigation --> */}
                </div>
                {/* <!-- End Sidebar scroll-->
                <!-- Bottom points--> */}
                <div class="sidebar-footer">
                    {/* <!-- item--> */}
                    <a href="" class="link" data-toggle="tooltip" title="Settings"><i class="ti-settings"></i></a>
                    {/* <!-- item--> */}
                    <a href="" class="link" data-toggle="tooltip" title="Email"><i class="mdi mdi-gmail"></i></a>
                    {/* <!-- item--> */}
                    <Logout />
                </div>
                {/* <!-- End Bottom points--> */}
            </aside>
            <div className="page-wrapper">
                <div className="container-fluid">
                    <Outlet></Outlet>
                </div>
                <footer className="footer">
                    © 2017 Monster Admin by wrappixel.com

                </footer>
            </div>
        </>
    );
}