// import { useState } from "react";
// import { useEffect } from "react";
import { useScaleStore } from "../../store/scaleStore";

interface inputProps {
	inputType: string[];
	labelName: string;
}

export const InputType:React.FC<inputProps> = ({ inputType, labelName }) => {
	// Access to Store
	const { changeType, type } = useScaleStore();

	const listTypes = inputType.map( (input) => {
		return <option key={input} value={input}>{ input }</option>
	});

	return (
		<div className="flex flex-col items-center w-11/12 mb-7">
			<label 
				htmlFor={labelName} 
				className="label-name text-shadow-header"
			>
				{ labelName }
			</label>

			<select 
				id={labelName} 
				className="select-input"
				value={ type }
				onChange={ e => changeType(e.target.value) }
			>
				<option disabled value={"No value"}>-- Select type --</option>
				{ listTypes }
			</select>
		</div>
	) 
}