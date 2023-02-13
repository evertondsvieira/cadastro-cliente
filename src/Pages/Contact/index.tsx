import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Input from "../../components/Inputs";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form";
import { IContacts, LoginContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const schema = yup.object({
    full_name: yup.string().required("O nome é obrigatório"),
    email: yup.string().email("Deve ser um email").required("O email é obrigatório"),
    phone: yup.string().required("O telefone é obrigatório"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm<IContacts>({resolver: yupResolver(schema)})
  const { subContact } = useContext(LoginContext);

  return (
    <div>
      <Header nome="Adiconar contato" />
      <form onClick={handleSubmit(subContact)} className="flex flex-col w-72 items-center gap-2 bg-blue-400 rounded-b">
        <label className="text-black w-64 mt-2">Nome Completo:</label>
        <Input name="full_name" type="text" register={register} />
        <p className="text-red-800 text-sm w-64 flex items-start justify-start">{errors.full_name?.message}</p>
        <label className="text-black w-64">Email:</label>
        <Input name="email" type="email" register={register} />
        <p className="text-red-800 text-sm w-64 flex items-start justify-start">{errors.email?.message}</p>
        <label className="text-black w-64">Telefone:</label>
        <Input name="phone" type="text" register={register} />
        <p className="text-red-800 text-sm w-64 flex items-start justify-start">{errors.phone?.message}</p>
        <label className="text-black w-64">Data de Registro:</label>
        <Input name="created_at" type="date" register={register} />
        <div className="mt-2 mb-4">
          <button
            type="submit"
            className="w-64 h-8 bg-neutral-900 text-white rounded"
          >
          Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
