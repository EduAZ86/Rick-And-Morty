'use client'
import { ITypographyProps } from "./types";
import { FC } from 'react'

export const MainTitle: FC<ITypographyProps> = ({ align = 'left', bold = false, children }) => {
    return (
        <h1
            className={`text-${align} ${bold ? 'font-bold' : 'font-light'} 
            text-8xl leading-tight tracking-tighter font-sans m-0
            bg-gradient-to-r from-light-primary to-light-secundary
            dark:bg-gradient-to-r dark:from-dark-primary dark:to-dark-secundary
            bg-clip-text text-transparent whitespace-nowrap
            `
        }
        >
            {children}
        </h1>
    );
};

export const Title: FC<ITypographyProps> = ({ align = 'left', bold = false, children }) => {
    return (
        <h2
            className={`text-${align} ${bold ? 'font-bold' : 'font-light'} 
            text-4xl leading-tight tracking-tighter font-sans m-0
            text-light-primary dark:text-dark-primary whitespace-nowrap
            `
        }
        >
            {children}
        </h2>
    );
};

export const Caption: FC<ITypographyProps> = ({ align = 'left', bold = false, children }) => {
    return (
        <h3
            className={`text-${align} ${bold ? 'font-bold' : 'font-light'} 
            text-2xl leading-tight tracking-tighter font-sans m-0
            text-light-secundary dark:text-dark-secundary whitespace-nowrap
            `}
        >
            {children}
        </h3>
    );
};

export const Paragraph: FC<ITypographyProps> = ({ align = 'left', bold = false, children }) => {
    return (
        <p
            className={`text-${align} ${bold ? 'font-bold' : 'font-light'} 
            text-base leading-tight tracking-tighter font-sans m-0
            `        
        }
        >
            {children}
        </p>
    );
};

export const TextError: FC<ITypographyProps> = ({ align = 'left', bold = false, children }) => {
    return (
        <span
            className={`text-${align} ${bold ? 'font-bold' : 'font-light'} 
            text-sm leading-tight tracking-tighter font-sans m-0
            text-light-error
            `}
        >
            {children}
        </span>
    );
};

export const TextButton: FC<ITypographyProps> = ({ align = 'left', bold = false, children }) => {
    return (
        <span
            className={`text-${align} ${bold ? 'font-bold' : 'font-light'} 
            text-sm leading-tight tracking-tighter font-sans m-0
            `}
        >
            {children}
        </span>
    );
};

export const Label: FC<ITypographyProps> = ({ align = 'left', bold = false, children }) => {
    return (
        <label 
            className={`text-${align} ${bold ? 'font-bold' : 'font-light'} 
            text-sm leading-tight tracking-tighter font-sans m-0
            `}
        >
            {children}
        </label>
    );
};