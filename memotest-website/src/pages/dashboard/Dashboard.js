import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const userSingout = () => {
    logout();
  }

  return (
    <div className='page-container'>
      <h1>Welcome, {user?.email}</h1>
      <button 
          type="submit" 
          className="primary-button"
          onClick={userSingout}>
            Sing out
        </button>
    </div>
  );
};

export default Dashboard;