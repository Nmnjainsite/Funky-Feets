import { useContext, createContext, useState } from "react";
import React from "react";
const AuthContext = createContext({ isLoggedIn: false });

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
