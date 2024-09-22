import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import { Bar } from 'react-chartjs-2';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Earnings (USD)',
        data: [12000, 21000, 15000, 28000, 22000, 25000, 27000, 30000, 35000, 32000, 38000, 40000],
        backgroundColor: '#0A2558',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const [user,setUser] = useState([])
  const [trip,settrip] = useState([])
  const [tour,settour] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:5096/api/User")
      .then((result) => {
        console.log(result.data.data);
        setUser(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5096/api/Trip")
      .then((result) => {
        console.log(result.data.data);
        settrip(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5096/api/Tour")
      .then((result) => {
        console.log(result.data.data);
        settour(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Admin Dashboard</h2>

      <div className="dashboard__cards">
        <div className="dashboard__card">
          <div className="dashboard__icon-wrapper">
            <i className="bi bi-currency-dollar dashboard__icon"></i>
          </div>
          
          <p className="txt">35,000 USD</p>
          <p className="txt-name">Money This Month</p>
        </div>  
        <div className="dashboard__card">
          <div className="dashboard__icon-wrapper">
            <i className="bi bi-people dashboard__icon"></i>
          </div>
        
          <p className="txt">{user.length}</p>
          <p className="txt-name">Users</p>
        </div>
        <div className="dashboard__card">
          <div className="dashboard__icon-wrapper">
          <i className="bi bi-backpack2-fill"></i>
          </div>
          
          <p className="txt">{trip.length}</p>
          <p className="txt-name">Trips</p>
        </div>
        <div className="dashboard__card">
          <div className="dashboard__icon-wrapper">
          <i className="bi bi-airplane-fill"></i>
          </div>
       
          <p className="txt">{tour.length}</p>
          <p className="txt-name">Tours</p>
        </div>
      </div>
    

      <div className="dashboard__chart">
        <h3>Earnings Over the Year</h3>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
