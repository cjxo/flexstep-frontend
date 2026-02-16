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
  update: async (first_name, last_name, username, email) => {
    return { ok: false, message: "" };
  },
});

const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const isauth = async () => {
      const result = await api.user.isAuth();
      console.log(result);
      if (result.ok && (result.timeRemaining > 0)) {
        const bufferTime = 10;
        const reloadTime = (result.timeRemaining - bufferTime) * 1000;
        if (reloadTime > 0) {
          setUser(result.user);
          setIsAuth(true);
          setIsLoading(false);

          const timer = setTimeout(() => {
            signout().then(() => navigate("/log-in"));
          }, reloadTime);
          return () => clearTimeout(timer);
        }
      }
    };

    setIsLoading(true);
    isauth();
  }, []);

  const signup = async (first_name, last_name, username, password, email) => {
    setIsLoading(true);
    const result = await api.user.insert(first_name, last_name, username, password, email);
    if (result.ok) {
      navigate("/log-in");
    }

    setIsLoading(false);
    return result;
  };

  const login = async (email, password) => {
    setIsLoading(true);
    const result = await api.user.login(email, password);
    if (result.ok) {
      setIsAuth(true);
      setUser(result.user);
      navigate("/");
    }
    setIsLoading(false);
    return(result);
  };

  const signout = async () => {
    setIsLoading(true);
    const result = await api.user.signOut();
    setIsAuth(false);
    setUser({});
    navigate("/log-in");
    setIsLoading(false);
    return result;
  };

  const update = async (first_name, last_name, username, email) => {
    setIsLoading(true);
    const result = await api.user.update(user.id, first_name, last_name, username, email);
    if (result.ok) {
      setUser(result.user);
    }
    setIsLoading(false);
    return(result);
  };

  return (
    <AuthContext.Provider
      value={{ isLoading, isAuth, user, login, signup, signout, update }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
