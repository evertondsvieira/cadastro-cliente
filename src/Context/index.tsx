import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/Api";

interface ILoginProviderProps {
  children: ReactNode;
}

export interface ILoginContextProps {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  signIn: (data: IUser) => Promise<void>;
  subRegister: (data: IRegister) => Promise<void>;
  subContact: (data: IContacts) => Promise<void>;
}

export interface IUser {
  username: string;
  password: string;
}

export interface IRegister {
  username: string;
  email: string;
  password: string;
  full_name: string;
  phone: string;
}

export interface IContacts {
  full_name: string;
  email: string;
  phone: string;
  created_at: string;
}

export const LoginContext = createContext({} as ILoginContextProps);

const LoginProvider = ({ children }: ILoginProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loggedInUserId, setLoggedInUserId] = useState<number | null>(null);

  const handleLogin = (users_id: number) => {
    setLoggedInUserId(users_id);
  };
    
  const navigate = useNavigate();

  const signIn = async (data: IUser) => {
    await api
      .post("/users/login/", data)
      .then((response) => {
        const { user: userResponse, token } = response.data;
        api.defaults.headers.common.authorization = `Access ${token}`;
        localStorage.setItem("@cadastro:token", token);
        setUser(userResponse);
        toast.success("Login Realizado com sucesso!");
        setTimeout(function () {
          navigate("/contact");
        }, 1000);
      })
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  const subRegister = async (data: IRegister) => {
    await api
      .post("users/", data)
      .then((response) => {
        console.log(response.data)
        toast.success("Cadastro realizado com sucesso!");
        navigate("/");
      })
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  const subContact = async (data: IContacts) => {
    if (!loggedInUserId) {
      throw new Error("Nenhum usuario está logado");
    }
    await api
      .post(`users/${loggedInUserId}/contacts/`, data)
      .then((response) => {
        console.log(response.data)
        toast.success("Contacto cadastrado com sucesso!");
        navigate("/client");
      })
      .catch((error) => toast.error("Ops! Algo deu errado!"));
  };

  return (
    <LoginContext.Provider value={{ user, setUser, signIn, subRegister, subContact }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
