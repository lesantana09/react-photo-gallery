import type React from "react";
import { tv } from "tailwind-variants"; 

export const imageFilePreviewVariants = tv({
    base: `
        rounded-lg overflow-hidden
    `,
});

export const imageFilePreviewImageVariants = tv({
    base: `
        w-full h-full object-cover
    `,
});

interface InputFilePreviewProps extends React.ComponentProps<"img"> {
    imageClassName?: string;
}

export default function InputFilePreview({
    className,
    imageClassName,
    ...props
}: InputFilePreviewProps) {
    return (
        <div className={imageFilePreviewVariants({className})}>
            <img {...props} className={imageFilePreviewVariants({className: imageClassName})}/>
        </div>
    );
}