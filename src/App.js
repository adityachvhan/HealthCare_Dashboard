import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/Sidebar';
import PatientsList from './Component/Patients';
import DiagnosisHistory from './Component/DiagnosisHistory';
import PatientProfile from './Component/PatientProfile';

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className='mt-8 flex gap-5'>
        <div className='w-[30%]'>
          <PatientsList />
        </div>

        <div className='w-[50%]'>
          <DiagnosisHistory />
        </div>

        <div className='w-[30%]'>
          <PatientProfile />
        </div>

      </div>
    </div>
  );
}

export default App;
