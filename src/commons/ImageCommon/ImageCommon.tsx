import { Image } from "antd";
// import s from "./ImageCommon.module.scss";

interface Props {
    src: string,
    alt?: string,
}

const ImageCommon = ({ src, alt }: Props) => {
    return (
        <Image src={src} alt={alt} />
    );
};

export default ImageCommon;
