import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/Layout/SharedLayout';
import {
  Home,
  StudentPage,
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
  Projects,
  SingleProject,
  Handbook,
  Honours,
  Programs,
  Faq,
  Contact,
  Taofik,
  Lekan,
  Richard,
  TheJournal,
  NewsLanding,
  SingleProject2,
  SingleProject3,
} from './Components/Pages';
import { AlumniLogin, StaffLogin, StudentLogin } from './Components/Auth';
import Uploads from './Components/Auth/Uploads';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route path="staff/richard-onuigboje" element={<Richard />} />
          <Route path="about" element={<About />} />
          <Route path="research-cluster" element={<ResearchCluster />} />
          <Route path="student-spotlight/:id" element={<StudentSpotlight />} />
          <Route path="news/:id" element={<NewsPage />} />
          <Route path="news" element={<NewsLanding />} />
          <Route path="planners-pen" element={<PlannersPen />} />
          <Route path="urp-journal" element={<TheJournal />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/single-project" element={<SingleProject />} />
          <Route
            path="projects/single-project-2"
            element={<SingleProject2 />}
          />
          <Route
            path="projects/single-project-3"
            element={<SingleProject3 />}
          />
          <Route path="urp-handbook" element={<Handbook />} />
          <Route path="honours-list" element={<Honours />} />
          <Route path="urp-programs" element={<Programs />} />
          <Route path="faqs" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="it-department" element={<It />} /> */}
          {/* <Route path="galleries" element={<Gallery />} /> */}
        </Route>
        <Route path="student-login" element={<StudentLogin />} />
        <Route path="staff-login" element={<StaffLogin />} />
        <Route path="alumni-login" element={<AlumniLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
