import Header from "../../components/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { IRegister, LoginContext } from "../../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs";

const Register = () => {
  const schema = yup.object({
    username: yup.string().required("O username é obrigatório"),
    email: yup.string().email("Deve ser um email").required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória").matches(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"),
    full_name: yup.string().required("O nome é obrigatório"),
    phone: yup.string().required("O telefone é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({ resolver: yupResolver(schema) });

  const { subRegister } = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <div className="mt-4">
      <Header nome="Cadastro" />
      <form
        onSubmit={handleSubmit(subRegister)}
        className="flex flex-col w-72 items-center justify-center bg-blue-400 rounded-b"
      >
        <label className="text-black w-64 mt-2">Username:</label>
        <Input name="username" type="text" register={register} />
        <p className="text-red-800 text-sm w-64 flex items-start justify-start">{errors.username?.message}</p>

        <label className="text-black w-64 mt-2">Email:</label>
        <Input name="email" type="email" register={register} />
        <p className="text-red-800 text-sm w-64 flex items-start justify-start">{errors.email?.message}</p>

        <label className="text-black w-64 mt-2">Senha:</label>
        <Input name="password" type="password" register={register} />
        <p className="text-red-800 text-sm w-64 flex items-start justify-start">{errors.password?.message}</p>

        <label className="text-black w-64 mt-2">Nome Completo:</label>
        <Input name="full_name" type="text" register={register} />
        <p className="text-red-800 text-sm w-64 flex items-start justify-start">{errors.full_name?.message}</p>

        <label className="text-black w-64 mt-2">Telefone:</label>
        <Input name="phone" type="text" register={register} />
        <p className="text-red-800 text-sm w-64 flex items-start justify-start">{errors.phone?.message}</p>

        <div className="mt-4 mb-4">
          <button 
            className="w-64 h-8 bg-neutral-900 text-white rounded"
          >
          Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
