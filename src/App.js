
import './App.css';
import Sidebar from './Component/Sidebar';
import PatientsList from './Component/Patients';
import Middle from './Component/Middle';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Middle />
    </div>
  );
}

export default App;
