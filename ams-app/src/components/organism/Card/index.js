
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//  // Fetch data from the API
//  const fetchData = async () => {
//     try {
//         const response = await axios.get('http://localhost:8080/Provide/test'); // Adjust the URL if necessary
//         console.log('API Response:', response.data); // Log the response
//         setData(response.data); // Update the state with the fetched data
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data. Please try again later.'); // User-friendly error message
//     } finally {
//         setLoading(false); // Set loading to false regardless of success or failure
//     }
// };

export let Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.data.title}</h4>
                <div className="text-right">
                    <h2 className="font-light m-b-0"><i className={`${props.data.icon}`}></i> ${props.data.income}</h2>
                    <span className="text-muted">Todays Income</span>
                </div>
                <span className={props.data.textColor}>{props.data.progress}</span>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${props.data.progress}`, height: "6px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    )
}

export let cardRevenue = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex flex-wrap">
                            <div>
                                <h3>Revenue Statistics</h3>
                                <h6 className="card-subtitle">January 2017</h6> </div>
                            <div className="ml-auto ">
                                <ul className="list-inline">
                                    <li>
                                        <h6 className="text-muted"><i className="fa fa-circle m-r-5 text-success"></i>Product A</h6> </li>
                                    <li>
                                        <h6 className="text-muted"><i className="fa fa-circle m-r-5 text-info"></i>Product B</h6> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="total-revenue4" style={{ height: "350px" }}></div>
                    </div>
                    <div className="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                        <h1 className="m-b-0 font-light">$54578</h1>
                        <h6 className="text-muted">Total Revenue</h6></div>
                    <div className="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                        <h1 className="m-b-0 font-light">$43451</h1>
                        <h6 className="text-muted">Online Revenue</h6></div>
                    <div className="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                        <h1 className="m-b-0 font-light">$44578</h1>
                        <h6 className="text-muted">Product A</h6></div>
                    <div className="col-lg-3 col-md-6 m-b-30 m-t-20 text-center">
                        <h1 className="m-b-0 font-light">$12578</h1>
                        <h6 className="text-muted">Product B</h6></div>
                </div>
            </div>
        </div>
    )
}

export let cardSales = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Sales of the month</h4>
                <div id="sales-donute" style={{ width: "100%", height: "300px" }}></div>
                <div className="round-overlap m-t-20"><i className="mdi mdi-cart"></i></div>
                <ul className="list-inline m-t-30 text-center">
                    <li><i className="fa fa-circle text-purple"></i> Item A</li>
                    <li><i className="fa fa-circle text-success"></i> Item B</li>
                    <li><i className="fa fa-circle text-info"></i> Item C</li>
                </ul>
            </div>
        </div>
    );
};

export const CardPrediction = (props) => {
    const [data_nilai, setDataNilai] = useState(null); // Initialize state for data_nilai
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the API when the component mounts
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Provide/test'); 
            console.log('API Response:', response.data); // Log the response
            const fetchedData = response.data; 
            if (Array.isArray(fetchedData) && fetchedData.length > 0) {
                setDataNilai(fetchedData[0].data_nilai);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data. Please try again later.'); 
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchData(); 
    }, []); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.data.title}</h4>
                <div className="d-flex flex-row">
                    <div className="align-self-center">
                        <span className="display-6">${data_nilai}</span> {/* Display dynamic data */}
                        <h6 className="text-muted">(150-165 Sales)</h6>
                    </div>
                    <div className="ml-auto">
                        <div id="gauge-chart" style={{ width: "150px", height: "150px" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export let CardDifference = (props) => {
    const [data_nilai, setDataNilai] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the API when the component mounts
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/Provide/test'); 
            console.log('API Response:', response.data); 
            const fetchedData = response.data; 
            if (Array.isArray(fetchedData) && fetchedData.length > 0) {
                setDataNilai(fetchedData[1].data_nilai); 
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data. Please try again later.'); 
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchData(); 
    }, []); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.data.title}</h4>
                <div className="d-flex flex-row">
                    <div className="align-self-center">
                        <span className="display-6">
                            ${data_nilai}
                        </span>
                        <h6 className="text-muted">(150-165 Sales)</h6>
                    </div>
                    <div className="ml-auto">
                        <div className="ct-chart" style={{ width: "120px", height: "120px" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export let cardDaniel = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-row">
                    <div className=""><img src="../src/assets/images/users/1.jpg" alt="user" className="img-circle" width="100" /></div>
                    <div className="p-l-20">
                        <h3 className="font-medium">Daniel Kristeen</h3>
                        <h6>UIUX Designer</h6>
                        <button className="btn btn-success"><i className="ti-plus"></i> Follow</button>
                    </div>
                </div>
                <div className="row m-t-40">
                    <div className="col b-r">
                        <h2 className="font-light">14</h2>
                        <h6>Photos</h6></div>
                    <div className="col b-r">
                        <h2 className="font-light">54</h2>
                        <h6>Videos</h6></div>
                    <div className="col">
                        <h2 className="font-light">145</h2>
                        <h6>Tasks</h6></div>
                </div>
            </div>
            <div>
                <hr />
            </div>
            <div className="card-body">
                <p className="text-center aboutscroll">
                    Lorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididunt adipisicing elit, sed do eiusmod tempor incididunLorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididuntt
                </p>
                <ul className="list-icons d-flex flex-item text-center p-t-10">
                    <li className="col"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Website"><i className="fa fa-globe font-20"></i></a></li>
                    <li className="col"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="twitter"><i className="fa fa-twitter font-20"></i></a></li>
                    <li className="col"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Facebook"><i className="fa fa-facebook-square font-20"></i></a></li>
                    <li className="col"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Youtube"><i className="fa fa-youtube-play font-20"></i></a></li>
                    <li className="col"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Linkd-in"><i className="fa fa-linkedin-square font-20"></i></a></li>
                </ul>
            </div>
        </div>
    )
}


