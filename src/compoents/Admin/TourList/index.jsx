import React, { useEffect, useState } from 'react';
import "./TourList.scss";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TourList() {
  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5096/api/Tour")
      .then((result) => {
        setTours(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onView = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const onEdit = (tourId) => {
    navigate(`/admin/tours/edit/${tourId}`);
  };

  const onDelete = async (tourId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this tour?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5096/api/Tour/${tourId}`);
        setTours(tours.filter(tour => tour.id !== tourId));
        alert("Tour deleted successfully!");
      } catch (error) {
        console.error("There was an error deleting the tour!", error);
        alert("Error deleting tour. Please try again.");
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

  return (
    <div className="tour-list">
      <h1 className='h1'>List Tour</h1>
      <table>
        <thead>
          <tr>
            <th>Tour Name</th>
            <th>Image</th>
            <th>Price (VND)</th>
            <th>City Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tours.map(tour => (
            <tr key={tour.id}>
              <td>{tour.tourName}</td>
              <td><img src={tour.imageTour} width="100px" alt={tour.tourName} /></td>
              <td>{tour.price.toLocaleString()}</td>
              <td>{tour.city.cityName}</td>
              <td>
                <button onClick={() => onView(tour)}>View</button>
                <button onClick={() => onEdit(tour.id)}>Edit</button>
                <button onClick={() => onDelete(tour.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal để hiển thị thông tin chi tiết */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Tour Details</h2>
            {selectedTour && (
              <div className="modal-details">
                <div className="modal-info">
                  <p><strong>Tour Name:</strong> {selectedTour.tourName}</p>
                  <p className="description"><strong>Description:</strong>
                   <span dangerouslySetInnerHTML={{ __html: selectedTour.description }}></span></p>
                  <p><strong>Start Date:</strong> {selectedTour.startDate}</p>
                  <p><strong>End Date:</strong> {selectedTour.endDate}</p>
                  <p><strong>Price (VND):</strong> {selectedTour.price.toLocaleString()}</p>
                  <p><strong>City Name:</strong> {selectedTour.city.cityName}</p>
                </div>

                <div className="modal-image">
                  <img src={selectedTour.imageTour} alt={selectedTour.tourName} />
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

export default TourList;
