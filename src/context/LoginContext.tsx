import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocaleStorage';
import { ILoginValues } from '../types';
import { InitialLoginState } from './Initial';

export const LoginContext = createContext(InitialLoginState);

const LoginContextProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', "false");

  const checkIsLogin = (admin:ILoginValues) => {
    if(admin.userName === 'kodluyoruz' && admin.password === 'bootcamp109') {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logOutAdmin = () => {
    setIsLoggedIn(false);
  }

  return (
    <LoginContext.Provider value={{isLoggedIn, checkIsLogin, logOutAdmin}}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider;
