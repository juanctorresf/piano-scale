import clsx from "clsx"
import { useScaleStore } from "../../store/scaleStore"
import { isNoteInScale } from "../../helpers/isNoteInScale";


interface PrompDataKey {
	noteKey: string,
}

export const KeyPiano: React.FC<PrompDataKey> = ({ noteKey }) => {
	const { note, modality, type } = useScaleStore();
	const noteInScale = isNoteInScale( note, modality, type, noteKey );

	return (
		<div 
			className={ clsx(
				{
					"white-key" : noteKey.length <= 2,
					"black-key" : noteKey.length > 2,
				},
				{
					/* Add 4 like a string to compare with noteKey */
					"piano-key-selected": noteKey === note + "4",
					"piano-key-in-scale": noteInScale,
				}
			)
			}
			id={ noteKey }
		>
			<div 
				className={ clsx(
					"relative mt-20 text-sm text-black uppercase",
					"lg:text-base lg:mt-44"
				)
			}>
				{/* Show notes in white keys but not in black keys */}
				{ noteKey.length <= 2 ? noteKey : null }
			</div>
		</div>
	)
}
