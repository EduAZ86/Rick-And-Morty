import React from 'react'

//props


export interface styleButtonInterface {
    height: string;
    width: string;
    padding: string;
    margin: string;
    background: string;
    font_size:string;
    color:string;
};

export interface contentButtonInterface {
    handleClick:Function;
    isDisabled:boolean;   
    type: 'button' | 'submit'
    icon?:React.JSX.Element;
    text?:string;
};

export interface propsButtonInterface {
    style:styleButtonInterface;
    content:contentButtonInterface;
}


// styled props

export interface styledButtonInterface {
    height: string;
    width: string;
    padding: string;
    margin: string;
    background: string;
}

export interface styledTextInterface {
    font_size:string;
    color:string;
}

export interface styledIconInterface { 
    color:string;
    font_size:string;
}