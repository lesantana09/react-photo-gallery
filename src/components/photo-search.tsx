import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import React from "react";
import { debounce } from "../helpers/utils";

export default function PhotosSearch(){
    const [inputValue, setInputValue] = React.useState("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSetValue = React.useCallback(
        debounce((value: string) => {
            console.log("Searching for:", value);
        }, 200),
        []
    );

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInputValue(value);
        debouncedSetValue(value);
    }

    return <InputText
        icon={SearchIcon}
        placeholder="Buscar Fotos"
        className="flex-1"
        value={inputValue}
        onChange={handleInputChange}
    />;
}