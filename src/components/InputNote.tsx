import { useScaleStore } from "../store/scaleStore";

interface inputProps  {
    inputNote: string[];
    labelName: string;
}
  
export const InputNote:React.FC<inputProps> = ({ inputNote, labelName }) => {
    const handleNoteStore = useScaleStore( state => state.changeNote );
    const noteValueStore = useScaleStore( state => state.note);

    let listNotes = inputNote.map( (input) => {
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
                value={ noteValueStore }
                onChange={ e => handleNoteStore(e.target.value) }
            >
                <option disabled value={"No value"}>-- Select tone--</option>
                { listNotes }
            </select>
        </div>
    )
}
  