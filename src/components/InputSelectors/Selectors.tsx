import clsx from "clsx"
import { modality, notes, typeMajors, typeMinors } from "../../global/ScaleInfo"
import { InputModality } from "./InputModality"
import { InputNote } from "./InputNote"
import { InputType } from "./InputType"
import { useScaleStore } from "../../store/scaleStore"


export const Selectors = () => {
    const modalityStore = useScaleStore( state => state.modality );
    
    return (
        <div 
            className={clsx(
                "flex flex-col items-center max-w-5xl ",
                "lg:flex-row lg:mx-auto"
            )
        }>
            <InputNote inputNote={ notes } labelName="Tone"/>
            <InputModality inputModality={ modality } labelName="Modality" /> 
            { modalityStore === "Major" && <InputType inputType={ typeMajors } labelName="Type"/> }
            { modalityStore === "Minor" && <InputType inputType={ typeMinors } labelName="Type"/> }
        </div>
    )
}
