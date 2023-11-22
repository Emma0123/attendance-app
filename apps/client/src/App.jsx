import './App.css'
import LoginPage from "./pages/LoginAll/Login"
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AccessEmployee from './pages/AccessEmployee'
import AttendancePage from './pages/AttendanceEmployee'
import CreateEmployeeAccount from './pages/CreateEmployeeAccount'
import DeleteAccountEmployee from './pages/DeleteAccountEmployee'
import ManageAccountEmployee from './pages/ManageEmployeeAccount'
import UpdateEmployeeAccount from './pages/UpdateEmployeeAccount'
import ManageShift from './pages/ManageShift';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkDataUsers } from './redux/silce/usersSlice';
import AttendanceEmployee from './pages/AttendanceEmployee';
import ClockPage from './pages/ClockEmployee';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginUsers = useSelector((state) => {
    return state.usersSlice
  })

  useEffect(() => {
    dispatch(checkDataUsers())
    console.log(loginUsers);
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="//employee-page1" element={<ClockPage />} />
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
