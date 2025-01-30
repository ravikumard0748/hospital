import React from 'react';
import { Link } from 'react-router-dom';
import '../csscomponents/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='topnav'>
        <div className="logo-container">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>DisSol Hospital</h1>
          </Link>
        </div>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <Link to="/patients" className='linkingbar'>
              <li>Patients</li>
            </Link>
            <Link to="/doctors" className='linkingbar'>
              <li>Doctors</li>
            </Link>
            <Link to="/nurses" className='linkingbar'>
              <li>Nurses</li>
            </Link>
            <Link to="/departments" className='linkingbar'>
              <li>Departments</li>
            </Link>
            <Link to="/operations" className='linkingbar'>
              <li>Operations</li>
            </Link>
            <Link to="/patient-history" className='linkingbar'>
              <li>Patient History</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;