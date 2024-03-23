import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const storedUser = localStorage.getItem('user');
  const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   if (storedUser) {
  //     setIsLogin(true);
  //   }
  // }, [isLogin]);
  const [hasUser, setHasUser] = useState(false);
  const [idUser,setIdUser]=useState(0);  
  return (
    <>
      <AuthContext.Provider value={{ hasUser, setHasUser,idUser,setIdUser}}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);