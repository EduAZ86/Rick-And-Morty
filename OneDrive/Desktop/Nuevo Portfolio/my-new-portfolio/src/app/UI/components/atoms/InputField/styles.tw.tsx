import { FC } from "react"
import { IInputFieldTextProps, IInputTextAreaProps } from "./types"

export const InputTextField: FC<IInputFieldTextProps> = ({ type, name, background, color, register, ...otherProps }) => {
    return (
        <input
            {...otherProps}
            {...register(name)}
            className={`
                p-2 m-0 
                bg-light-${background ? background : 'primary'} bg-dark-${background ? background : 'primary'} text-light-${color ? color : 'text'} text-dark-${color ? color : 'text'} 
            `}

        />
    )
}

export const InputTextArea: FC<IInputTextAreaProps> = ({ name, background, color, register, ...otherProps }) => {
    return (
        <textarea
            {...otherProps}
            name={name}
            id={name}
            {...register(name)}           
            className={`
                p-2 m-0 
                bg-light-${background ? background : 'primary'} bg-dark-${background ? background : 'primary'} text-light-${color ? color : 'text'} text-dark-${color ? color : 'text'} 
            `}
        />
    )
}