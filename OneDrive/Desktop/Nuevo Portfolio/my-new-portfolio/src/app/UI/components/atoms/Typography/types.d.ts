'use client'
import { CSSProperties, FC, PropsWithChildren } from 'react';

export interface ITypography extends PropsWithChildren {
    variant: keyof TTypographyVariant;
    style?: CSSProperties;
    bold?: boolean;
    align?: 'center' | 'left' | 'right';
};

export type TTypographyVariant = {
    mainTitle: FC<ITypography>;
    title: FC<ITypography>;
    caption: FC<ITypography>;
    paragraph: FC<ITypography>;
    error: FC<ITypography>;
    textButton: FC<ITypography>;
    label: FC<ITypography>;
};