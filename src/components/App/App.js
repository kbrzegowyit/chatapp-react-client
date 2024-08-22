import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "../Login";
import Register from "../Register";
import Home from "../Home";
import { useAuth, AuthProvider } from '../AuthProvider';

const usePrivateRoute = () => {
  const { getToken, isExpired, logout } = useAuth();
  const token = getToken();
  const expired = isExpired();

  if (!token || expired) {
    logout();
    return <Navigate to='/login' />;

  }
  return null;
}

const useProtectAuth = () => {
  const { getToken, isExpired } = useAuth();
  const token = getToken();
  const expired = isExpired();

  if (token && !expired) {
    return <Navigate to='/' />;
  }
  return null;
}

const PrivateRoute = ({ element }) => {
  const privateRoute = usePrivateRoute();
  return privateRoute || element;
}

const ProtectAuth = ({ element }) => {
  const protectAuth = useProtectAuth();
  return protectAuth || element;
}

const App = () => {
  console.log('App rendering');
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<ProtectAuth element={<Login />} />} />
          <Route path='/register' element={<ProtectAuth element={<Register />} />} />
          <Route path='/' element={<PrivateRoute element={<Home />} />} />
        </Routes>
      </Router>    
    </AuthProvider>
  );
}

export default App;
