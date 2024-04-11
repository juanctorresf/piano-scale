import { useScaleStore } from "./store/scaleStore"

import { InputModality } from "./components/InputModality";
import { InputNote } from "./components/InputNote";
import { InputType } from "./components/InputType";

import { modality, notes, typeMajors,typeMinors } from "./global/ScaleInfo"
import { Key } from "./components/Key";
import { keys as keys } from "./global/KeyData";


export const App = () => {
    const modalityStore = useScaleStore( state => state.modality );    

    return (
        
            <main>
                <h1 className=" text-5xl md:text-6xl text-center text-gray-10 m-0 pt-21 md:pt-45 mb-9">MusicScale</h1>

                <div className="max-w-5xl flex flex-col items-center lg:flex-row lg:mx-auto">
                    <InputNote inputNote={ notes } labelName="Tone"/>
                    <InputModality inputModality={ modality } labelName="Modality" /> 
                    { modalityStore === "Major" && <InputType inputType={ typeMajors } labelName="Type"/> }
                    { modalityStore === "Minor" && <InputType inputType={ typeMinors } labelName="Type"/> }
                </div>

                <div className="flex flex-row justify-center">
                    {
                        keys.map( key => (
                            <Key key={ key } note={ key } /* isPlaying={ false } *//>
                        ))
                    }
                </div>
            </main>
    )
}
