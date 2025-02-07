import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IContainerBasicButtonProps, IIconButtonProps } from "./types"

export const ButtonContainer: FC<IContainerBasicButtonProps> = ({
    children,
    width,
    height,
    size,
    padding,
    background,
    poligonShape,
    onClick,
    active,
    border,
    disabled,
    focus,
    hover,
    type
}) => {
    return (
        <button
            style={{ clipPath: poligonShape }}
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={` flex flex-row justify-center items-center w-${width ? width : 'fit'} h-${height ? height : 'fit'} ${size && size} p-${padding}
            b-${background ? background : 'transparent'} dark:b-${background ? background : 'transparent'} ${border}
            focus:${focus} hover:${hover} active:${active}            
            `}
        >
            {children}
        </button>
    )
};

export const IconButton: FC<IIconButtonProps> = ({ color, icon, iconSize }) => {
    if (icon) {
        return (
            <FontAwesomeIcon icon={icon} className={`text-${color} dark:text-${color} text-${iconSize} dark:text-${color}`} />
        )
    }
    return <></>
};