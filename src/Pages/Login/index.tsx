import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IUser, LoginContext } from "../../Context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "../../components/Inputs";

const Login = () => {
  const schema = yup.object({
    username: yup.string().required("O username é obrigatório"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .matches(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Senha incorreta"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(schema) });
  
  const { signIn } = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <div className="mt-4">
      <h1 className="bg-white rounded-t text-xl h-8 flex items-center justify-center">
        Login
      </h1>
      <form
        onSubmit={handleSubmit(signIn)}
        className="flex flex-col w-72 items-center justify-center bg-blue-400 rounded-b"
      >
        <label className="text-black w-64 mt-2">Username:</label>
        <Input name="username" type="text" register={register} />
        <p className="text-red-800 text-sm w-64 flex items-start justify-start">{errors.username?.message}</p>
        
        <label className="text-black w-64 mt-2">Senha:</label>
        <Input name="password" type="password" register={register} />
        <p className="text-red-800 text-sm w-64 flex items-start justify-start">{errors.password?.message}</p>
        
        <button className="w-64 h-8 mt-4 bg-neutral-900 text-white rounded">
          Entrar
        </button>

        <button
          type="button"
          className="w-64 h-8 my-4 bg-neutral-900 text-white rounded"
          onClick={() => navigate("/register")}
        >
          Criar uma nova conta
        </button>
      </form>
    </div>
  );
};

export default Login;
