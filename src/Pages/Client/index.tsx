import Header from "../../components/Header";
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { ClientProps } from "../../types";

const Client = () => {
  return (
    <div>
      <Header nome="Clientes registrados" />
      <div className="flex flex-col w-72 h-52 items-center justify-center gap-2 bg-blue-400 rounded-b">
        <div className="flex w-64 gap-1 justify-end">
          <MdEdit className="text-gray-900 cursor-pointer" />
          <IoMdTrash className="text-red-900 cursor-pointer" />
        </div>
        <p className="w-64 h-7 bg-slate-50 rounded">Nome: </p>
        <p className="w-64 h-7 bg-slate-50 first-letter:rounded">E-mail: </p>
        <p className="w-64 h-7 bg-slate-50 rounded">Telefone: </p>
        <p className="w-64 h-7 bg-slate-50 rounded">Data de Registro: </p>
      </div>
    </div>
  );
};
export default Client;
