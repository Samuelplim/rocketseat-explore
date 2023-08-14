import { createContext, useContext, useState, useEffect } from "react";

import { createSessions, setAuthToken } from "../services/sessions.service";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const localstorageCustomer = "@foodexplorer:user";
  const localstorageToken = "@foodexplorer:token";

  async function signIn({ email, password }) {
    try {
      const response = await createSessions({ email, password });
      const { user, token } = response.data;

      localStorage.setItem(localstorageCustomer, JSON.stringify(user));
      localStorage.setItem(localstorageToken, token);
      setAuthToken(token);

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem(localstorageToken);
    localStorage.removeItem(localstorageCustomer);

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem(localstorageToken);
    const user = localStorage.getItem(localstorageCustomer);

    if (token && user) {
      setAuthToken(token);

      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
