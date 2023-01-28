import React from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);

  const authorize = () => {
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };
  const deauthorize = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <AuthContext.Provider value={{ isAuth, authorize, deauthorize }}>
      {children}
    </AuthContext.Provider>
  );
}
