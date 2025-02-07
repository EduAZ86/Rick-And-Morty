import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FC } from "react";


export interface IBasicImageProps {
    src: string | StaticImport;
    alt: string;
    width?: number;
    height?: number;
}
export type TImageVariant = {
    ImageView: FC<IBasicImageProps>;
    ImagePreview: FC<IBasicImageProps>;
    Background: FC<IBasicImageProps>;
    BackBlur: FC<IBasicImageProps>;
}
export interface IImageViewerProps extends IBasicImageProps {
    type: keyof TImageVariant;
}