import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axiosInstance'
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    console.log("using effect")
    // Check if user is already logged in on refresh
    const token = localStorage.getItem('token');
    if (token) {
      api.get('users/me')
        .then(res => setUser(res.data))
        .catch(() => localStorage.removeItem('token'))
        .finally(() => setLoading(false));

      console.log("data: " + user)
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    console.log("credentials :" + credentials)
    const { data } = await api.post('/auth/login', credentials);
    console.log(data)
    localStorage.setItem('token', data.access_token);
    console.log("token: " + localStorage.getItem("token"));
console.log("response",data)
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate("/login");

  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);