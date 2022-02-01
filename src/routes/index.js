import {
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default AppRouter;
