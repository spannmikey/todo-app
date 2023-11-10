import SearchBar from "./components/SearchBar"

export default function App(): React.ReactNode {
	return (
		<div className="App">
			<h1 className="App__heading">Todo App</h1>
			<SearchBar />
		</div>
	)
}
