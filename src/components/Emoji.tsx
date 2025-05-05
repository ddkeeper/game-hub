import React from "react";
import bullsEye from "../assets/bulls-eye.svg";
import thumbsUp from "../assets/thumbs-up.svg";
import neutralFace from "../assets/neutral-face.svg";
import { ImageProps, Image } from "@chakra-ui/react";
interface Props {
    rating: number;
}
const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;
    const emojiMap: { [key: number]: ImageProps } = {
        // in-text signature
        3: { src: neutralFace, alt: "meh", boxSize: "25px" },
        4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
        5: { src: bullsEye, alt: "exceptional", boxSize: "30px" },
    };
    return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
