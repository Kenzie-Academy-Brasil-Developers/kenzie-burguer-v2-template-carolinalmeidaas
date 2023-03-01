
export interface IDefaultProvideProps{
  children: React.ReactNode;
}

export interface IUser{
  name: string,
  password: string,
  passwordConfirm: string;
  email: string,
}

export interface IUserContextProvider{
  user: IUser | null;
  userRegister: (data: IRegisterFormValues) => Promise<void>;
  userLogin: (data: IloginFormValues) => Promise<void>;
  userLogout: () => void;
}

export interface IloginFormValues{
  email: string;
  password: string;
}
export interface IRegisterFormValues{
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IProducts{
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IProductsProps {
  product: IProducts;
}