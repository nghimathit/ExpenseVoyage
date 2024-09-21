import React, { useEffect, useState } from 'react';
import "./TripList.scss";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TripList() {
    const [Trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedtrip, setSelectedtrip] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const result = await axios.get("http://localhost:5096/api/Trip");
                setTrips(result.data.data);
            } catch (err) {
                setError("Failed to fetch Trips. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchTrips();
    }, []);

    const onViewDetails = (trip) => {
        setSelectedtrip(trip);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedtrip(null);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="user-list">
            <h1 className='h1'>List Trip</h1>
            <table>
                <thead>
                    <tr className='tr'>
                        <th>ID</th>
                        <th>Destination</th>
                        <th>Images</th>
                        <th>Budget</th>
                        <th>StartDate</th>
                        <th>EndDate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Trips.map(trip => (
                        <tr key={trip.id}>
                            <td>{trip.id}</td>
                            <td>{trip.destination}</td>
                            <td>
                                {/* Display only the first image */}
                                {trip.images && trip.images.length > 0 ? (
                                    <img src={trip.images[0].image} width="100px" alt={`Trip Image`} />
                                ) : (
                                    <p>No image</p>
                                )}
                            </td>
                            <td>{trip.budget}</td>
                            <td>{new Date(trip.startDate).toLocaleDateString()}</td>
                            <td>{new Date(trip.endDate).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => onViewDetails(trip)}>View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal to show trip details */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Trip Details</h2>
                        {selectedtrip && (
                            <div className="modal-details">
                                <div className="details-info">
                                    <p><strong>ID:</strong> {selectedtrip.id}</p>
                                    <p><strong>Destination:</strong> {selectedtrip.destination}</p>
                                    <p><strong>Budget:</strong> {selectedtrip.budget}</p>
                                    <p><strong>StartDate:</strong> {new Date(selectedtrip.startDate).toLocaleDateString()}</p>
                                    <p><strong>EndDate:</strong> {new Date(selectedtrip.endDate).toLocaleDateString()}</p>
                                    <div className="details-username">
                                        <p><strong>Username:</strong> {selectedtrip.user.name}</p>
                                    </div>
                                </div>

                                <div className="details-image">

                                    {/* Display only the first image in the modal */}
                                    {selectedtrip.images && selectedtrip.images.length > 0 ? (
                                        <img src={selectedtrip.images[0].image} width="200px" alt="Trip Image" />
                                    ) : (
                                        <p>No image available</p>
                                    )}
                                </div>

                                {/* Trip Day Table */}
                                <div className="trip-day-table">
                                    <h3>Trip Days</h3>
                                    {selectedtrip.tripDays && selectedtrip.tripDays.length > 0 ? (
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Day Name</th>
                                                    <th>Budget Per Day</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {selectedtrip.tripDays.map((day, index) => (
                                                    <tr key={index}>
                                                        <td>{day.dayName}</td>
                                                        <td>{day.budgetPerDay}</td>
                                                        <td>{day.description}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p>No Trip Days available</p>
                                    )}
                                </div>

                            </div>
                        )}
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TripList;
