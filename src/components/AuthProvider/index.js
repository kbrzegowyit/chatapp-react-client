import { createContext, useContext } from "react";
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const login = (token) => {
    localStorage.setItem('token', token);
  }

  const logout = () => {
    localStorage.removeItem('token');
  }

  const getToken = () => {
    return localStorage.getItem('token');
  }

  const isExpired = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return true;
    }
    const payload = jwtDecode(token);
    return Date.now() >= payload.exp * 1000;
  }

  return (
    <AuthContext.Provider value={{ login, logout, getToken, isExpired }} >
      { children }
    </AuthContext.Provider>
  );
}