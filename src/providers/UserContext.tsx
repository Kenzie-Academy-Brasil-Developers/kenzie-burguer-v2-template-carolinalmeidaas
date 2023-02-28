import { createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { IUserContextProvider, IDefaultProvideProps, IUser, IRegisterFormValues, IloginFormValues, IProducts } from "./@types";
import { api } from "../services/api";

export const UserContext = createContext({} as IUserContextProvider);

export const UserProvider = ({children}: IDefaultProvideProps) => {

  const [user, setUser] = useState<IUser | null>(null) 

  const [modal, setModal] = useState(false)

  const [products, setProducts] = useState<IProducts | null>(null);


  const nagivate = useNavigate()

  const autoLogin = async () => {
    const token = localStorage.getItem("TOKEN")
    if(token){
      try {
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        nagivate("/shop")
     
      } catch (error) {
        console.log(error)
        nagivate("/")
      }
    }
  }

  
  useEffect(() => {
    autoLogin();
    
  },[])


  const userRegister = async (data: IRegisterFormValues) => {
    try {
      const response = await api.post("/users", data)
      setUser(response.data.user)
      localStorage.setItem("@TOKEN", response.data.acessToken)
      nagivate("/shop")
    } catch (error) {
      console.log(error)
      nagivate("/register")
    }
  }

  const userLogin = async (data: IloginFormValues) => {
    try{
      const response = await api.post("/login", data)
      setUser(response.data.user)
      localStorage.setItem("@TOKEN", response.data.accessToken)
      nagivate("/shop")
    }catch{
      nagivate("/")
      console.log(error)
    }
  }

  const userLogout = () => {
    setUser(null)
    localStorage.removeItem("@TOKEN")
    nagivate("/")
  }

  const renderProducts = async() => {
      const token = localStorage.getItem("TOKEN")
      if(token){
        console.log(token)
      }
  }
  

  return(
    <UserContext.Provider value={{user, userRegister, userLogin, userLogout, modal, setModal, renderProducts}}>
      {children}
    </UserContext.Provider>
  )

}