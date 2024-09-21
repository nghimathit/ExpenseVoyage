import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './Edit.scss';

function Edit() {
  const { id } = useParams();
  const [tour, setTour] = useState({
    tourName: '',
    description: '',
    status: '',
    startDate: '',
    endDate: '',
    price: '',
    cityId: '',
  });
  const [image, setImage] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(`http://localhost:5096/api/Tour/${id}`);
        setTour(response.data.data);
      } catch (error) {
        console.error("Error fetching tour data", error);
      }
    };
    fetchTour();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTour((prevTour) => ({ ...prevTour, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    // Append tour data to FormData
    Object.keys(tour).forEach((key) => {
      formData.append(key, tour[key]);
    });

    if (image) {
      formData.append('formFile', image);
    }

    try {
      await axios.put(`http://localhost:5096/api/Tour/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("Tour updated successfully!");
      navigate('/admin/tours/all'); 
    } catch (error) {
      console.error("Error updating tour", error);
      alert("Error updating tour. Please try again.");
    }
  };

  return (
    <div className="add-tour">
      <h2>Edit Tour</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID</label>
          <input type="text" name="id" value={id} readOnly />
        </div>
        <div className="form-group">
          <label>Tour Name</label>
          <input
            type="text"
            name="tourName"
            value={tour.tourName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={tour.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={tour.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={tour.startDate ? tour.startDate.split('T')[0] : ''} 
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={tour.endDate ? tour.endDate.split('T')[0] : ''} 
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Price (VND)</label>
          <input
            type="number"
            name="price"
            value={tour.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City ID</label>
          <input
            type="text"
            name="cityId"
            value={tour.cityId}
            readOnly
          />
        </div>

        {/* Display Current Image */}
        <div className="form-group">
          <label>Current Image</label>
          {tour.imageTour ? (
            <img
              src={tour.imageTour}
              alt="Current Tour"
              style={{ width: '200px', height: 'auto', borderRadius: '8px', marginTop: '10px' }}
            />
          ) : (
            <p>No image available</p>
          )}
        </div>

        {/* Upload New Image */}
        <div className="form-group">
          <label>Upload New Image (optional)</label>
          <input type="file" onChange={handleFileChange} />
        </div>

        <button type="submit">Update Tour</button>
      </form>
    </div>
  );
}

export default Edit;
