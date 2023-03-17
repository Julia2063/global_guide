import React, { useState, useMemo } from 'react';

export const UserContext = React.createContext({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const contextValue = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user]) ;

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
