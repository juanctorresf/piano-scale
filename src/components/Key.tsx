import clsx from "clsx"

interface PrompDataKey {
	note: string,
	// isPlaying: boolean
}

export const KeyPiano: React.FC<PrompDataKey> = ({ note }) => {

	return (
		<div 
			className={ clsx({
				"white-key" : note.length <= 2,
				"black-key" : note.length > 2,
				})
			}
		>
			<div className={ clsx(
				"relative mt-20 text-sm text-black uppercase",
				"lg:text-base lg:mt-44"
			)}>
				{ note.length <= 2 ? note : null }
			</div>
		</div>
	)
}
