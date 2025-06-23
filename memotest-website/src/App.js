import logo from './logo.svg';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import './App.css';
import Login from './pages/login/Login';

import { AuthProvider } from './context/AuthContext';
import Router from './routes/Router';

function App() {

  {/*
  This was inside return
  <Router basename={process.env.PUBLIC_URL}>
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  */}

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
