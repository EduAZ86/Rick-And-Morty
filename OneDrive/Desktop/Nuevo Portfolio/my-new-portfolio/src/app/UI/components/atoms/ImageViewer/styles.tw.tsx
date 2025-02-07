import Image from "next/image"
import { FC } from "react"
import { IBasicImageProps } from "./types"

export const ImageView: FC<IBasicImageProps> = ({ src, alt }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={720}
            height={480}
        />
    );
};

export const ImageBackground: FC<IBasicImageProps> = ({ src, alt }) => {
    return (
        <Image
            src={src}
            alt={alt}
            className='absolute top-0 bottom-0 z-0 w-full h-full'
        />
    );
};

export const ImageBackgroundBlur: FC<IBasicImageProps> = ({ src, alt }) => {
    return (
        <Image
            src={src}
            alt={alt}
            className='absolute top-0 bottom-0 z-0 w-full h-full blur-md'
        />
    );
};

export const ImagePreview: FC<IBasicImageProps> = ({ src, alt }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={40}
            height={40}
        />
    );
};