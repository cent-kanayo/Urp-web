import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/Layout/SharedLayout';
import { Home, StudentPage } from './Components/Pages';
import { StudentLogin } from './Components/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="students" element={<StudentPage />} />
        </Route>
        <Route path="student-login" element={<StudentLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
