import { useEffect, useState } from "react";
import { IUseTypingProps } from "./types";

export const useTyping = ({ textToType, typingDelay }: IUseTypingProps) => {

    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const typeNextCharacter = () => {
            if (charIndex < textToType.length) {
                setDisplayedText((prevText) => prevText + textToType.charAt(charIndex));
                setCharIndex((prevIndex) => prevIndex + 1);
            }
        };

        const typingInterval = setInterval(typeNextCharacter, typingDelay);

        return () => {
            clearInterval(typingInterval);
        };
    }, [charIndex, textToType]);

    return { displayedText }

}