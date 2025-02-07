import { FC } from "react";
import { IInputContainerProps } from "./types";

export const InputContainer: FC<IInputContainerProps> = ({children, background}) => {
    return (
        <div
        className={` flex-col w-auto bg-light-${background} dark:bg-dark-${background}` }        
        >
            {children}
        </div>
    )
}