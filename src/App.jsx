import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/Layout/SharedLayout';
import { AlumniPage, Home, StaffPage, StudentPage } from './Components/Pages';
import { AlumniLogin, StaffLogin, StudentLogin } from './Components/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="students" element={<StudentPage />} />
          <Route path="staff" element={<StaffPage />} />
          <Route path="alumni" element={<AlumniPage />} />
        </Route>
        <Route path="student-login" element={<StudentLogin />} />
        <Route path="staff-login" element={<StaffLogin />} />
        <Route path="alumni-login" element={<AlumniLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
