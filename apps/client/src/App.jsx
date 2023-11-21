// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccessEmployee from './pages/AccessEmployee'
import AttendancePage from './pages/AttendanceEmployee'
import CreateEmployeeAccount from './pages/CreateEmployeeAccount'
import DeleteAccountEmployee from './pages/DeleteAccountEmployee'
import ManageAccountEmployee from './pages/ManageEmployeeAccount'
import UpdateEmployeeAccount from './pages/UpdateEmployeeAccount'
import ManageShift from './pages/ManageShift';

function App() {


  return (
    <>
      <Routes>
        <Route path="/hr-page1" element={<AccessEmployee />} />
        <Route path="/hr-page2" element={<ManageAccountEmployee/>} />
        <Route path="/hr-page3" element={<CreateEmployeeAccount/> } />
        <Route path="/hr-page4" element={<UpdateEmployeeAccount/> } />
        <Route path="/hr-page5" element={<DeleteAccountEmployee/>} />
        <Route path="/hr-page6" element={<AttendancePage />} />
        <Route path="/hr-page7" element={<ManageShift />} />

      </Routes>
    </>
  )
}

export default App
