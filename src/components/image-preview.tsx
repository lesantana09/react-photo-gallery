import type React from "react";
import { tv } from "tailwind-variants"; 

export const imagePreviewVariants = tv({
    base: `
        rounded-lg overflow-hidden
    `,
});

export const imagePreviewImageVariants = tv({
    base: `
        w-full h-full object-cover
    `,
});

interface InputPreviewProps extends React.ComponentProps<"img"> {
    imageClassName?: string;
}

export default function ImagePreview({
    className,
    imageClassName,
    ...props
}: InputPreviewProps) {
    return (
        <div className={imagePreviewVariants({className})}>
            <img {...props} className={imagePreviewImageVariants({className: imageClassName})}/>
        </div>
    );
}