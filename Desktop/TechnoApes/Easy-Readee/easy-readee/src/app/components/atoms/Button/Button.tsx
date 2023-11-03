import React from 'react'
import { propsButtonInterface } from './types'
import {ButtonStyled, TextButtonStyled, IconButtonStyled } from './styled'

const Button:React.FC<propsButtonInterface> = ({content, style}) => {
    return(
        <ButtonStyled
            onClick={content.handleClick()}         
            {...style}
        >   
        { content.text && <TextButtonStyled
                font_size={style.font_size}
                color={style.color}
            >
                {content.text}
            </TextButtonStyled>}
        { content.icon && <IconButtonStyled
                font_size={style.font_size}
                color={style.color}
        >
                {content.icon}
            </IconButtonStyled>}    
            
        </ButtonStyled>
    )
}

export default Button;

