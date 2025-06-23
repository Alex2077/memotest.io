import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Dashboard from '../pages/dashboard/Dashboard';
//import Profile from '../pages/Profile';
import Login from '../pages/login/Login';
//import Signup from '../components/auth/Signup';
import NotFound from '../pages/notfound/NotFound';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Public routes */}
          <Route index element={<Home />} />
          
          {/* Auth routes (only for guests) */}
          <Route element={<AuthRoute />}>
            <Route path="login" element={<Login />} />
            {/*<Route path="signup" element={<Signup />} />*/}
          </Route>
          
          {/* Protected routes (only for authenticated users) */}
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            {/*<Route path="profile" element={<Profile />} />*/}
          </Route>
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;