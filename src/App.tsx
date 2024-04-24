import { useScaleStore } from "./store/scaleStore"
import clsx from "clsx";

import { InputModality } from "./components/InputModality";
import { InputNote } from "./components/InputNote";
import { InputType } from "./components/InputType";

import { modality, notes, typeMajors,typeMinors } from "./global/ScaleInfo"
import { KeyPiano } from "./components/Key";
import { keys as keys } from "./global/KeyData";


export const App = () => {
	const modalityStore = useScaleStore( state => state.modality );    

	return (
		<main>
			<h1 
				className={ clsx(
					"m-0 text-5xl text-center text-gray-10 pt-21 mb-9",
					"md:text-6xl md:pt-45"
				)}
			>
				MusicScale
			</h1>

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

			<div className="flex flex-row justify-center my-7">
				{
					keys.map( key => (
						<KeyPiano key={ key } note={ key } />
					))
				}
			</div>
		</main>
	)
}
