import { Piano } from "./components/Piano";
import { Selectors } from "./components/Selectors";
import { Header } from "./components/Header";


export const App = () => {
	return (
		<main>
			<Header />
			<Selectors />
			<Piano />
		</main>
	)
}
