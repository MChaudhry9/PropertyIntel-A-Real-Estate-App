import React, { useState } from "react";
import { CssBaseline, Grid } from '@mui/material';
import axios from 'axios';
import Map from '../components/Map/Map';
import './Home.css';

const Home = () => {
    const [binNumber, setBinNumber] = useState(''); // BIN number state
    const [address, setAddress] = useState('');     // Address state
    const [zipCode, setZipCode] = useState('');     // Zip Code state
    const [complaints, setComplaints] = useState([]); // Fetched complaints
    const [dataLoaded, setDataLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!address && !zipCode && !binNumber) {
            setDataLoaded(false);
            setComplaints([]);
            setLoading(false);
            return;
        }

        axios
            .get(`https://api-new-murex.vercel.app/api/complaints?address=${address}&zip_code=${zipCode}&bin_number=${binNumber}`)
            .then((response) => {
                setComplaints(response.data); // Set fetched complaints
                setDataLoaded(true);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setError('Failed to fetch complaints. Please try again.');
                setLoading(false);
                setDataLoaded(false);
            });
    };

    return (
        <div className="outer-container">
            <CssBaseline />
            <Grid container spacing={3} style={{ width: '100%', marginTop: '1px' }}>
                {/* Form Section */}
                <Grid item xs={12} md={4}>
                    <div style={{ marginLeft: '12%', marginTop: '20%' }}>
                        <h1 style={{ marginLeft: '15%' }}>Search Complaints</h1>
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="address">Address:</label>
                                <input
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)} // Update address state
                                    placeholder="Enter Address"
                                />

                                <label htmlFor="zip_code">Zip Code:</label>
                                <input
                                    type="text"
                                    id="zip_code"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)} // Update zipCode state
                                    placeholder="Enter Zip Code"
                                />

                                <label htmlFor="binNumber">BIN Number:</label>
                                <input
                                    type="text"
                                    id="binNumber"
                                    value={binNumber}
                                    onChange={(e) => setBinNumber(e.target.value)} // Update binNumber state
                                    placeholder="Enter BIN Number"
                                />

                                <button type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </Grid>

                {/* Map Section */}
                <Grid item xs={12} md={8}>
                    <Map address={address} /> {}
                </Grid>
            </Grid>

            {/* Table Section */}
            <div className="table-container">
                {dataLoaded && (
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
                                        <td>{complaint.bin || 'N/A'}</td>
                                        <td>{complaint.community_board || 'N/A'}</td>
                                        <td>{complaint.complaint_category || 'N/A'}</td>
                                        <td>{complaint.complaint_number || 'N/A'}</td>
                                        <td>{complaint.date_entered || 'N/A'}</td>
                                        <td>{complaint.disposition_code || 'N/A'}</td>
                                        <td>{complaint.disposition_date || 'N/A'}</td>
                                        <td>{complaint.dobrundate || 'N/A'}</td>
                                        <td>{complaint.house_number || 'N/A'}</td>
                                        <td>{complaint.house_street || 'N/A'}</td>
                                        <td>{complaint.inspection_date || 'N/A'}</td>
                                        <td>{complaint.status || 'N/A'}</td>
                                        <td>{complaint.unit || 'N/A'}</td>
                                        <td>{complaint.zip_code || 'N/A'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
