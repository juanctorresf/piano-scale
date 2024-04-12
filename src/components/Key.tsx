import clsx from "clsx"

interface PrompDataKey {
	note: string,
	// isPlaying: boolean
}

export const Key: React.FC<PrompDataKey> = ({ note }) => {
	return (
		<div 
			className={ clsx(
				"w-5 h-20 text-center bg-white border-2 border-solid my-class border-gray-10",
				"lg:w-10 lg:h-52",
				"hover:bg-gray-400 hover:cursor-pointer"
			)}
		>
			<div className={ clsx(
				"relative mt-16 text-sm text-black uppercase",
				"lg:text-base lg:mt-44")
			}>
				{ note }
			</div>
		</div>
	)
}
