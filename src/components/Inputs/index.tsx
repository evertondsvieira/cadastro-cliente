export interface IInputForm{
    name: string
    register: any
    type: string
    placeholder?: string
}

const Input = ({name, register, type, placeholder}:IInputForm) => {
    return(
        <input name={name} type={type} placeholder={placeholder} {...register(name)} className="w-64 h-8 rounded"/>
    )
}

export default Input



