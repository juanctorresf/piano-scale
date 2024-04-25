import { Piano } from "./components/Piano/Piano";
import { Selectors } from "./components/InputSelectors/Selectors";
import { Header } from "./components/Header/Header";


export const App = () => {
	return (
		<main>
			<Header />
			<Selectors />
			<Piano />
		</main>
	)
}
