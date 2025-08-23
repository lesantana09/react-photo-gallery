import type React from "react";
import { type VariantProps, tv } from "tailwind-variants"
import Icon from "./icon";
import Text from "./text";
import UploadFileIcon from "../assets/icons/upload-file.svg?react";
import FileImageIcon from "../assets/icons/image.svg?react";
import { textVariants } from "./text";


export const inputSingleFileVariants = tv({
    base: `
        flex flex-col items-center justify-center w-full
        border border-solid border-border-primary
        group-hover:border-border-active
        rounded-lg gap-1 transition
    `,
    variants: {
        size: {
            md: "px-5 py-6"
        }
    },
    defaultVariants: {
        size: "md"
    }
});

export const inputSingleFileIconVariants = tv({
    base: `
        fill-placeholder
    `,
    variants: {
        size: {
            md: "w-8 h-8"
        }
    },
    defaultVariants: {
        size: "md"
    }
});

interface InputSingleFileProps extends VariantProps<typeof inputSingleFileVariants>, 
    Omit<React.ComponentProps<"input">, "size"> {
        error?: React.ReactNode
    }

export default function InputSingleFile({size, error}: InputSingleFileProps) {
    return <div>
        <div className="w-full relative group cursor-pointer">
            <input type="file" 
                className={` 
                    absolute top-0 right-0 w-full h-full
                    opacity-0 cursor-pointer
                `}
            />
            <div className={inputSingleFileVariants({size})}>
                <Icon svg={UploadFileIcon} className={inputSingleFileIconVariants({size})}/>
                <Text variant="label-medium" className="text-placeholder">
                    Clique ou arraste sua foto aqui<br/>
                </Text>
            </div>
        </div>
        {error && (
            <Text variant="label-medium" className="text-accent-red">
                Erro no campo
            </Text>
        )}

        <div className={`
            flex gap-3 items-center
            border border-solid border-border-primary mt-5
            p-3 rounded
        `}
        >
            <Icon svg={FileImageIcon} className="fill-white w-6 h-6"/>
            <div className="text-accent-red flex flex-col">
                <div className="truncate max-w-80">
                    <Text variant="label-medium" className="text-placeholder">
                        nome-do-arquivo-com-foto.png
                    </Text>
                </div>
                <div className="flex">
                    <button 
                        type="button"
                        className={textVariants({
                            variant: "label-small", 
                            className: "text-accent-red cursor-pointer hover:underline"
                        })}
                    >
                        Remover arquivo
                    </button>
                </div>
            </div>

        </div>
    </div>
}