import { useState, useContext, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../lib/api";

// Wow Thanks:
// - https://react.dev/learn/passing-data-deeply-with-context (WOW)
const AuthContext = createContext({
  isLoading: true,
  isAuth: false,
  user: {},
  login: async (email, password) => {
    return { ok: false, message: "" };
  },
  signup: async (first_name, last_name, username, password, email) => {
    return { ok: false, message: "" };
  },
  signout: async () => {
    return { ok: false, message: "" };
  },
});

const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  const signup = async (first_name, last_name, username, password, email) => {
    const result = await api.user.insert(first_name, last_name, username, password, email);
    if (result.ok) {
      navigate("/log-in");
    }
    return result;
  };

  const login = async (email, password) => {
    const result = await api.user.login(email, password);
    if (result.ok) {
      setIsAuth(true);
      setUser(result.user);
      navigate("/");
    }
    setIsLoading(false);
    return(result);
  };

  return (
    <AuthContext.Provider
      value={{ isLoading, isAuth, user, login, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
