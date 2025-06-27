import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
//import Signup from '../components/auth/Signup';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Login from '../pages/login/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/user/Profile';
import NotFound from '../pages/notfound/NotFound';

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
            <Route path="profile"   element={<Profile />} />
          </Route>
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;