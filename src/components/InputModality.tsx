import { useScaleStore } from "../store/scaleStore";

interface inputProps {
    inputModality: string[];
    labelName: string;
}

export const InputModality:React.FC<inputProps> = ({ inputModality, labelName }) => {

	// Store
	const handleModalityStore = useScaleStore( state => state.changeModality );
	const modalityValueStore = useScaleStore( state => state.modality )
	const handleTypeStore = useScaleStore( state => state.changeType );

	const handleModalityType = (e: React.ChangeEvent<HTMLSelectElement>) => {
		handleModalityStore( e.target.value );
		e.target.value === "Minor" ? handleTypeStore("Harmonic") : handleTypeStore("Ionian");
	}

	const listModalities = inputModality.map( (input) => {
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
				value={ modalityValueStore }
				onChange={ handleModalityType }
			>
				<option disabled value={"No value"}>-- Select modality --</option>
				{ listModalities }
			</select>
		</div>	
	)
}