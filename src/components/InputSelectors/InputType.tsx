// import { useState } from "react";
// import { useEffect } from "react";
import { useScaleStore } from "../../store/scaleStore";

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
		<div className="flex flex-col items-center w-11/12 mb-7">
			<label 
				htmlFor={labelName} 
				className="block mb-2 font-bold text-left uppercase text-gray-10"
			>
				{ labelName }
			</label>

			<select 
				id={labelName} 
				className="select-input"
				value={ typeValueStore }
				onChange={ e => handleTypeStore(e.target.value) }
			>
				<option disabled value={"No value"}>-- Select type --</option>
				{ listTypes }
			</select>
		</div>
	) 
}