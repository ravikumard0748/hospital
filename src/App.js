import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './jscomponents/home';
import Patient from './jscomponents/Patient';
import ShowPatients from './jscomponents/showpatients';
import Doctors from './jscomponents/Doctors';
import Nurses from './jscomponents/Nurses';
import Departments from './jscomponents/Departments';
import './App.css';

function App() {
  return (
    <Router>
      <div className='sys'>
        <Home />
        <div className="main-content">
          <Routes>
            <Route path="/patients" element={<Patient />} />
            <Route path="/show-patients" element={<ShowPatients />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/nurses" element={<Nurses />} />
            <Route path="/departments" element={<Departments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
