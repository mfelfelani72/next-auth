import { ImageProps } from "next/image";
export interface CustomImageProps extends ImageProps {
    enableLoading?: boolean;
    fallbackElement?: React.ReactNode;
}
declare const Image: ({ enableLoading, ...props }: CustomImageProps) => import("react").JSX.Element;
export default Image;
