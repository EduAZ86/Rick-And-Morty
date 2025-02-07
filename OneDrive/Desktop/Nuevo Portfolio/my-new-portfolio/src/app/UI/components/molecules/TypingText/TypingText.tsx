import { FC } from "react"
import { Typography } from "../.."
import { ITypingTextProps } from "./types"
import { useTyping } from "./useTyping"

export const TypingText: FC<ITypingTextProps> = ({ textToType, typingDelay, ...typographyProps }) => {
    const { displayedText } = useTyping({ textToType, typingDelay })

    return (
        <Typography
            {...typographyProps}
        >
            {displayedText}
        </Typography>
    )
}