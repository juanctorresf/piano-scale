import { useScaleStore } from "../store/scaleStore";

interface inputProps {
    inputModality: string[];
    labelName: string;
}
  
export const InputModality:React.FC<inputProps> = ({ inputModality, labelName }) => {

    const handleModalityStore = useScaleStore( state => state.changeModality );
    const modalityValueStore = useScaleStore( state => state.modality )

    const handleTypeStore = useScaleStore( state => state.changeType );

    const handleModalityType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleModalityStore( e.target.value );
        e.target.value === "Minor" ? handleTypeStore("Harmonic") : handleTypeStore("Ionian");
    }

    let listModalities = inputModality.map( (input) => {
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
                value={ modalityValueStore }
                onChange={ handleModalityType }
            >
                <option disabled value={"No value"}>-- Select modality --</option>
                { listModalities }
            </select>
        </div>
    )
}
  