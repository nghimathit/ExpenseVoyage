import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddTour.scss';
import { useNavigate } from 'react-router-dom';

function AddTour() {
  const [tourName, setTourName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [imageTour, setImageTour] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://localhost:5096/api/City');
        setCities(response.data.data);
      } catch (error) {
        console.error('There was an error fetching cities!', error);
      }
    };

    fetchCities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tourName && description && price && status && startDate && endDate && selectedCityId) {
      const newTour = {
        tourName,
        description,
        price: parseFloat(price),
        status,
        startDate,
        endDate,
        imageTour,
        cityId: selectedCityId,
      };

      try {
        const response = await axios.post('http://localhost:5096/api/Tour', newTour);
        console.log('Tour added successfully:', response.data);
        alert('Tour added successfully!'); // Hiển thị thông báo
        navigate('/admin/tours/all');
        // Reset form fields
        setTourName('');
        setDescription('');
        setPrice('');
        setStatus('');
        setStartDate('');
        setEndDate('');
        setImageTour('');
        setSelectedCityId(''); // Reset city selection
      } catch (error) {
        console.error('There was an error adding the tour!', error);
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="add-tour">
      <h2 className='h2'>Add New Tour</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tourName">Tour Name</label>
          <input
            type="text"
            id="tourName"
            value={tourName}
            onChange={(e) => setTourName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Price (VND)</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            id="city"
            value={selectedCityId}
            onChange={(e) => setSelectedCityId(e.target.value)}
            required
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.cityName}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Add Tour</button>
      </form>
    </div>
  );
}

export default AddTour;
