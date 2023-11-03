import styled from "styled-components";
import { titleStyledInterface, paragraphStyledInterface, LabelStyledInterface } from "./types";

export const MainTitleStyled = styled.h1<titleStyledInterface>`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
`

export const TitleStyled = styled.h2<titleStyledInterface>`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
`

export const SubTitleStyled = styled.h3<titleStyledInterface>`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
`

export const ParagraphStyled = styled.p<paragraphStyledInterface>`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    text-align: ${props => props.textAlign};   
`
export const LabelStyled = styled.label<LabelStyledInterface>`
    color: ${props => props.color};    
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
`
