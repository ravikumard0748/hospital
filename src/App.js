import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './jscomponents/LandingPage';
import Home from './jscomponents/home';
import Patient from './jscomponents/Patient';
import ShowPatients from './jscomponents/showpatients';
import Doctors from './jscomponents/Doctors';
import Nurses from './jscomponents/Nurses';
import Departments from './jscomponents/Departments';
import Operations from './jscomponents/Operations';
import PatientHistory from './jscomponents/PatientHistory';

function App() {
  return (
    <Router>
      <div className='sys'>
        <Home />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/patients" element={<Patient />} />
          <Route path="/show-patients" element={<ShowPatients />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/nurses" element={<Nurses />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/patient-history" element={<PatientHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;