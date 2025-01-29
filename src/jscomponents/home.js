import React from 'react';
import { Link } from 'react-router-dom';
import '../csscomponents/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='navbar'>
        <nav>
          <ul>
            <Link to="/patients" className='linkingbar'>
              <li>👥 Patients</li>
            </Link>
            <Link to="/doctors" className='linkingbar'>
              <li>👨‍⚕️ Doctors</li>
            </Link>
            <Link to="/nurses" className='linkingbar'>
              <li>👩‍⚕️ Nurses</li>
            </Link>
            <Link to="/departments" className='linkingbar'>
              <li>🏥 Departments</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className='topnav'>
        <h1>🏥 DisSol</h1>
      </div>
      <div className="main-content">
        {/* Main content will be rendered here by React Router */}
      </div>
    </div>
  );
};

export default Home;
