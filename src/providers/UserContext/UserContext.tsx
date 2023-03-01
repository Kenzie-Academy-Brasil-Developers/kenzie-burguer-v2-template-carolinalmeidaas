import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  IUserContextProvider,
  IDefaultProvideProps,
  IUser,
  IRegisterFormValues,
  IloginFormValues,
  IProducts,
} from './type';
import { api } from '../../services/api';

export const UserContext = createContext({} as IUserContextProvider);

export const UserProvider = ({ children }: IDefaultProvideProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const nagivate = useNavigate();

  const autoLogin = async (): Promise<void> => {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      try {
        const response = await api.get<IProducts>('products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        nagivate('/shop');
      } catch (error) {
        console.log(error);
        nagivate('/');
      }
    } else {
      nagivate('/');
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  const userRegister = async (data: IRegisterFormValues): Promise<void> => {
    try {
      const response = await api.post('/users', data);
      toast.success('Usuário cadastrado com sucesso');
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      nagivate('/shop');
    } catch (error) {
      nagivate('/register');
      toast.error('Dados incorretos');
    }
  };

  const userLogin = async (data: IloginFormValues): Promise<void> => {
    try {
      const response = await api.post('/login', data);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      nagivate('/shop');
    } catch (error) {
      nagivate('/');
      toast.error('Dados incorretos');
    }
  };

  const userLogout = (): void => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    nagivate('/');
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userRegister,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
