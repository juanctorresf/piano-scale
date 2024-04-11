
interface PrompDataKey {
	note: string,
	// isPlaying: boolean
}

export const Key: React.FC<PrompDataKey> = ({ note }) => {
	return (
		<div 
			className="w-5 h-20 text-center bg-white border-2 border-solid lg:w-10 my-class lg:h-52 border-gray-10 hover:bg-gray-400 hover:cursor-pointer "
		>
			<div className="relative mt-16 text-sm text-black uppercase lg:text-base lg:mt-44">
				{ note }
			</div>
		</div>
	)
}
