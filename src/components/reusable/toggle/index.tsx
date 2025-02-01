import { useState } from "react";

interface ToggleInter {
    state: boolean;
}

const Toggle = ({ state }: ToggleInter) => {

    const [isOn, setIsOn] = useState<boolean>(state);
    const handleToggle = () => {
        setIsOn((prev) => (!prev));
    };

    return (
        <button
            onClick={(event) => {
                event.stopPropagation();
                handleToggle();
            }}
            className={
                `relative w-10 h-5 flex items-center rounded-full px-[2px] py-[12px] transition-colors ${isOn ? "bg-green-500" : "bg-primary-ultralight"
                }`}
        >
            <div
                className={
                    `w-5 h-5 rounded-full shadow-md transform transition-transform ${isOn ? "translate-x-4 bg-white" : "translate-x-0 bg-primary"
                    }`}
            />
        </button>
    )
}

export default Toggle;