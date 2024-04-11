// import { useState } from "react";
// import { useEffect } from "react";
import { useScaleStore } from "../store/scaleStore";

interface inputProps {
    inputType: string[];
    labelName: string;
}

export const InputType:React.FC<inputProps> = ({ inputType, labelName }) => {

    const handleTypeStore = useScaleStore( state => state.changeType );
    const typeValueStore = useScaleStore( state => state.type )
    
    const listTypes = inputType.map( (input) => {
        return <option key={input} value={input}>{ input }</option>
    });

    return (
        <div className="mb-7 w-11/12 flex flex-col items-center">
            <label 
                htmlFor={labelName} 
                className="block text-left uppercase font-bold mb-2 text-gray-10"
            >
                { labelName }
            </label>

            <select 
                id={labelName} 
                className="block py-4 pl-3 text-sm-2 font-medium leading-5 w-full max-w-80"
                value={ typeValueStore }
                onChange={ e => handleTypeStore(e.target.value) }
            >
                <option disabled value={"No value"}>-- Select type --</option>
                { listTypes }
            </select>
        </div>
    )
}