import React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import './App.css'

const App = () => {

    const [binNumber, setBinNumber] = useState(''); // State for the input value
    const [address, setAddress] = useState(''); // State for the input value
    const [zipCode, setZipCode] = useState(''); // State for the input value
    const [complaints, setComplaints] = useState([]); // State for fetched data
    const [dataLoaded, setDataLoaded] = useState(false);
    const [loading, setLoading] = useState(false); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        if (!address && !zipCode && !binNumber){
            setDataLoaded(false)
            setComplaints([])
            return
        }

        axios.get(`/api/complaints?address=${address}&zip_code=${zipCode}&bin_number=${binNumber}`)
            .then((response) => {
                setComplaints(response.data); // Update state with fetched data
                setLoading(false);
                setDataLoaded(true)
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setError('Failed to fetch complaints. Please try again.');
                setLoading(false);
                setDataLoaded(false);
            });
    };

    return(
        <>
            <div className='outer-container'>
                <CssBaseline />
                <Header />
                <Grid container spacing ={3} style={{width: '100%', marginTop: '1px'}}>
                    <Grid item xs = {12} md={4}>
                        <div style={{marginLeft: '12%', marginTop: '20%'}}>
                            <h1 style={{marginLeft: '15%'}}>Search Complaints</h1>
                            <div className="form-container">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="address">Address:</label>
                                    <input
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)} // Update state on input change
                                    placeholder="Enter Address"
                                    />

                                    <label htmlFor="zip_code">Zip Code:</label>
                                    <input
                                    type="text"
                                    id="zip_code"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)} // Update state on input change
                                    placeholder="Enter Zip Code"
                                    />

                                    <label htmlFor="binNumber">BIN Number:</label>
                                    <input
                                    type="text"
                                    id="binNumber"
                                    value={binNumber}
                                    onChange={(e) => setBinNumber(e.target.value)} // Update state on input change
                                    placeholder="Enter BIN Number"
                                    />

                                    <button type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs = {12} md={4}>
                        <Map />
                    </Grid>
                </Grid>\
                <div className="table-container">
                    { dataLoaded &&
                        <>
                            <h1>Complaints List</h1>
                            <table border="1">
                            <thead>
                            <tr>
                                <th>Bin</th>
                                <th>Community Board</th>
                                <th>Complaint Category</th>
                                <th>Complaint Number</th>
                                <th>Date Entered</th>
                                <th>Disposition Code</th>
                                <th>Disposition Date</th>
                                <th>Dobrundate</th>
                                <th>House Number</th>
                                <th>Street</th>
                                <th>Inspection Date</th>
                                <th>Status</th>
                                <th>Unit</th>
                                <th>Zip Code</th>
                            </tr>
                            </thead>
                            <tbody>
                            {complaints.map((complaint, index) => (
                                <tr key={index}>
                                <td>{complaint.bin|| 'N/A'}</td>
                                <td>{complaint.community_board|| 'N/A'}</td>
                                <td>{complaint.complaint_category|| 'N/A'}</td>
                                <td>{complaint.complaint_number|| 'N/A'}</td>
                                <td>{complaint.date_entered|| 'N/A'}</td>
                                <td>{complaint.disposition_code|| 'N/A'}</td>
                                <td>{complaint.disposition_date|| 'N/A'}</td>
                                <td>{complaint.dobrundate|| 'N/A'}</td>
                                <td>{complaint.house_number|| 'N/A'}</td>
                                <td>{complaint.house_street|| 'N/A'}</td>
                                <td>{complaint.inspection_date|| 'N/A'}</td>
                                <td>{complaint.status|| 'N/A'}</td>
                                <td>{complaint.unit|| 'N/A'}</td>
                                <td>{complaint.zip_code || 'N/A'}</td>
                                </tr>
                            ))}
                            </tbody>
                            </table>
                        </>
                    }            
                </div>
            </div>
        </>
    );
}

export default App;















// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/Profile" element={<Profile />} />
//         <Route path="/Contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// const Home = () => {
//     return <h1>Home</h1>;
// };

// const Login = () => {
//     return <h1>Login</h1>;
// };

// const Register = () => {
//     return <h1>Register</h1>;
// };

// const Profile = () => {
//     return <h1>Profile</h1>;
// };

// const Contact = () => {
//     return <h1>Contact</h1>;
// };

// export default App;





