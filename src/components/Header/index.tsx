import { Link } from "react-router-dom"

const Header = ({nome}:any) => {
    return(
        <div className="flex mt-4 h-10 bg-white text-black rounded-t justify-between">
            <p className="flex items-center ml-2">{nome}</p>
            <div className="flex items-center mr-2">
                <button className="w-14 h-7 bg-neutral-900 text-white rounded"><Link to={'/'}>Voltar</Link></button>
            </div>
        </div>
    )
}

export default Header