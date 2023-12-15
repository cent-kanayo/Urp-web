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
  ResearchCluster,
  StudentSpotlight,
  NewsPage,
  PlannersPen,
  Journal,
  Projects,
  SingleProject,
  Handbook,
  Honours,
  Programs,
  Faq,
  Contact,
  It,
  Gallery,
  Taofik,
  Lekan,
  Anthony,
  TheJournal,
  Journal1,
} from './Components/Pages';
import { AlumniLogin, StaffLogin, StudentLogin } from './Components/Auth';
import Uploads from './Components/Auth/Uploads';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="students" element={<StudentPage />} />
          <Route path="staff" element={<StaffPage />} />
          {/* <Route path="alumni" element={<AlumniPage />} /> */}
          <Route path="uploads" element={<Uploads />} />
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
          <Route path="staff/taofik-salau" element={<Taofik />} />
          <Route path="staff/dami-olalekan" element={<Lekan />} />
          <Route path="staff/anthony-onuigboje" element={<Anthony />} />
          <Route path="about" element={<About />} />
          <Route path="research-cluster" element={<ResearchCluster />} />
          <Route path="student-of-the-month" element={<StudentSpotlight />} />
          <Route path="news/:id" element={<NewsPage />} />
          <Route path="planners-pen" element={<PlannersPen />} />
          <Route path="urp-journal" element={<TheJournal />} />
          <Route path="journal-v8" element={<Journal />} />
          <Route path="journal-v9" element={<Journal1 />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/single-project" element={<SingleProject />} />
          <Route path="urp-handbook" element={<Handbook />} />
          <Route path="honours-list" element={<Honours />} />
          <Route path="urp-programs" element={<Programs />} />
          <Route path="faqs" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="it-department" element={<It />} />
          <Route path="galleries" element={<Gallery />} />
        </Route>
        <Route path="student-login" element={<StudentLogin />} />
        <Route path="staff-login" element={<StaffLogin />} />
        <Route path="alumni-login" element={<AlumniLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
