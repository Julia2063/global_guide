import React, { useState, useMemo, useEffect } from 'react';
import { auth, getCollectionWhereKeyValue } from '../helpers/firebaseControl';
import { useRouter } from 'next/router';

export const AppContext = React.createContext({
  user: null,
  setUser: () => {},
});

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const router = useRouter();
  

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user || null)});
      if (user) {
        getCollectionWhereKeyValue('users', 'uid', auth.currentUser.uid).then(res => {
          if (res[0].role === "admin") {
            router.push('adminPanel');
          }
        });
      }
    
  }, [user]);

  const contextValue = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user]) ;

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
