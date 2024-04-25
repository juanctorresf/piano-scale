import { keys } from "../global/KeyData"
import { KeyPiano } from "./Key"


export const Piano = () => {
	return (
		<div className="flex flex-row justify-center my-7">
			{
				keys.map( key => (
					<KeyPiano key={ key } note={ key } />
				))
			}
		</div>
	)
}
