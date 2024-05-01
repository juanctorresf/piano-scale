import { useScaleStore } from "../../store/scaleStore";

interface inputProps  {
	inputNote: string[];
	labelName: string;
}

export const InputNote:React.FC<inputProps> = ({ inputNote, labelName }) => {
	const handleNoteStore = useScaleStore( state => state.changeNote );
	const noteValueStore = useScaleStore( state => state.note);

	const listNotes = inputNote.map( (input) => {
		return <option key={input} value={input}>{ input }</option>
	});

	return (
		<div className="flex flex-col items-center w-11/12 mb-7">
			<label 
				htmlFor={labelName} 
				className="label-name"
			>
				{ labelName }
			</label>

			<select 
				id={labelName} 
				className="select-input"
				value={ noteValueStore }
				onChange={ e => handleNoteStore(e.target.value) }
			>
				<option disabled value={"No value"}>-- Select tone--</option>
				{ listNotes }
			</select>
		</div>
	)
}