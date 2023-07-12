import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedLayout from './Components/Layout/SharedLayout';
import { Home } from './Components/Pages';
import { StudentLogin } from './Components/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="student-login" element={<StudentLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
