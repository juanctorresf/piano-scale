import { Piano } from "./components/Piano/Piano";
import { Selectors } from "./components/InputSelectors/Selectors";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer.jsx";


export const App = () => {
	return (
		<main>
			<Header />
			<Selectors />
			<Piano />
			<Footer />
		</main>
	)
}
