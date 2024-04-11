
interface PrompDataKey {
	note: string,
	// isPlaying: boolean
}

export const Key: React.FC<PrompDataKey> = ({ note }) => {
	return (
		<div 
			className="w-5 h-20 lg:w-10 lg:h-52 border-solid border-gray-10 border-2 bg-white hover:bg-gray-400 text-center hover:cursor-pointer"
		>
			<div className="relative text-black text-sm lg:text-base uppercase mt-16 lg:mt-44">
				{ note }
			</div>
		</div>
	)
}
