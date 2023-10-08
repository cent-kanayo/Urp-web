import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/Layout/SharedLayout';
import {
  Home,
  StudentPage,
  AlumniPage,
  StaffPage,
  Agunbiade,
  Leke,
  Nwaokoro,
  Taibat,
  Alade,
  Victor,
  Loye,
  Made,
  Jimoh,
  Niji,
  Fade,
  Deju,
  Kunle,
  Yemi,
  Laja,
  About,
} from './Components/Pages';
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
          {/* <Route path="welcome-message" element={<HodWelcome />} /> */}
          <Route path="staff/muyiwa-agunbiade" element={<Agunbiade />} />
          <Route path="staff/leke-oduwaye" element={<Leke />} />
          <Route path="staff/immaculate-nwaokoro" element={<Nwaokoro />} />
          <Route path="staff/taibat-lawanson" element={<Taibat />} />
          <Route path="staff/adewale-alade" element={<Alade />} />
          <Route path="staff/victor-ilechukwu" element={<Victor />} />
          <Route path="staff/o-agunloye" element={<Loye />} />
          <Route path="staff/a-farinmade" element={<Made />} />
          <Route path="staff/a-adeyemi" element={<Yemi />} />
          <Route path="staff/p-orelaja" element={<Laja />} />
          <Route path="staff/a-onifade" element={<Fade />} />
          <Route path="staff/h-jimoh" element={<Jimoh />} />
          <Route path="staff/f-akindeju" element={<Deju />} />
          <Route path="staff/a-adeniji" element={<Niji />} />
          <Route path="staff/d-odekunle" element={<Kunle />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="student-login" element={<StudentLogin />} />
        <Route path="staff-login" element={<StaffLogin />} />
        <Route path="alumni-login" element={<AlumniLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
