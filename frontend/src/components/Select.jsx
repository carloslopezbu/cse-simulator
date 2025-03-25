
import React, { useState } from "react";
import { IconCircuitDiode, IconCircuitCellPlus, IconCircuitResistor, IconWaveSine } from "@tabler/icons-react";

const buttonStyle = "w-15 h-15 p-3 bg-gray-200 rounded-md hover:bg-gray-300 flex items-center justify-center";

export default function Select() {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    const getButtonStyle = (button) => {
        return `${buttonStyle} ${selectedButton === button ? "ring-4 ring-blue-500" : ""}`;
    };

    return (
        <div className="w-[5%] h-[60%] bg-gray-300 absolute top-1/2 right-24 transform -translate-y-1/2 
                                        rounded-md grid grid-cols-1 gap-2 p-2">

            <button className={getButtonStyle("diode")} onClick={() => handleButtonClick("diode")}>
                <IconCircuitDiode size={20}/>
            </button>

            <button className={getButtonStyle("battery")} onClick={() => handleButtonClick("battery")}>
                <IconCircuitCellPlus size={20} />
            </button>

            <button className={getButtonStyle("resistor")} onClick={() => handleButtonClick("resistor")}>
                <IconCircuitResistor size={20} />
            </button>

            <button className={getButtonStyle("sine")} onClick={() => handleButtonClick("sine")}>
                <IconWaveSine size={20} />
            </button>
        </div>
    );
}
