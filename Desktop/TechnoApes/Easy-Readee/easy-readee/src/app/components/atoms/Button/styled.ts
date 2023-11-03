import styled from 'styled-components';
import { styledButtonInterface, styledIconInterface, styledTextInterface } from './types';


export const ButtonStyled = styled.button<styledButtonInterface>`
    height: ${props => props.height};
    width: ${props => props.width};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    justify-content: center;
    background-color: ${props => props.background};        
    border-radius: 0.5rem;
`;

export const TextButtonStyled = styled.span<styledTextInterface>`
    color: ${props => props.color};
    font-size: ${props => props.font_size};
    color: ${props => props.theme.secondaryColor};
`;

export const IconButtonStyled = styled.span<styledIconInterface>`
    color: ${props => props.color};
    font-size: ${props => props.font_size};
`;


