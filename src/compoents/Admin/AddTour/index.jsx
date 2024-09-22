import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddTour.scss';
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function AddTour() {
  const [tourName, setTourName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [imageTour, setImageTour] = useState(null);
  const [cities, setCities] = useState([]);
  const [country,setCountry] = useState('');
  const [cityId, setCityId] = useState('');
  const navigate = useNavigate();
  useEffect(() =>{
    axios.get('http://localhost:5096/api/country')
    .then(result => setCountry(result.data.data))
    .catch(error => console.error(error));
  })
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

  const handlePost = async () => {
    const formData = new FormData();
    formData.append('tourName', tourName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('status', status);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('formFile', imageTour); 
    formData.append('cityId', cityId);

    try {
      const response = await axios.post('http://localhost:5096/api/Tour', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate("/admin/tours/all");
      console.log('Tour successfully added:', response.data.data);
    } catch (error) {
      console.error('Error adding tour:', error);
    }
  };
  
  // const handleCountry = (e) =>{
  //   axios.get('http://localhost:5096/api/city')
  //   .then(result => {
  //     const a = result.data.data;
  //     const b = a.filter(c => c.countryId).some(c=> c.countryId === c.id)
  //     console.log
  //   }).catch(error => console.log(error));
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePost();
  };

  const handleFileChange = (e) => {
    setImageTour(e.target.files[0]); 
  };

  return (
    <div className="add-tour">
      <h2 className="h2">Add New Tour</h2>
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
          <label htmlFor="price">Price</label>
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
          {/* Thay textarea bằng CKEditor */}
          <CKEditor
            editor={ClassicEditor}
            data={description}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
            }}
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
          <label>Upload New Image</label>
          <input type="file" onChange={handleFileChange} required />
        </div>

        {/* <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            value={cityId}
            onChange={(e) => setCityId(e.target.value)}
            required
          >
            <option value="">Select Country</option>
            {country.map((city) => (
              <option key={city.id} value={city.id}>
                {city.countryName}
              </option>
            ))}
          </select>
        </div> */}
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            id="city"
            value={cityId}
            onChange={(e) => setCityId(e.target.value)}
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
