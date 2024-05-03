import { useScaleStore } from "../../states/scaleStore";

interface inputProps {
    inputModality: string[];
    labelName: string;
}

export const InputModality:React.FC<inputProps> = ({ inputModality, labelName }) => {

	// Store
	const { changeModality, changeType } = useScaleStore();
	const modalityValueStore = useScaleStore( state => state.modality )

	const handleModalityType = (e: React.ChangeEvent<HTMLSelectElement>) => {
		changeModality( e.target.value );
		e.target.value === "Minor" ? changeType("Natural") : changeType("Ionian");
	}

	const listModalities = inputModality.map( (input) => {
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
				value={ modalityValueStore }
				onChange={ handleModalityType }
			>
				<option disabled value={"No value"}>-- Select modality --</option>
				{ listModalities }
			</select>
		</div>	
	)
}