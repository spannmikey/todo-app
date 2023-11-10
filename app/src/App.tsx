import { useState } from "react"
import SearchBar from "./components/SearchBar"

export default function App(): React.ReactNode {
	const [userSearchInput, setUserSearchInput] = useState<string>("")

	return (
		<div className="App">
			<h1 className="App__heading">Todo App</h1>
			<SearchBar
				userSearchInput={userSearchInput}
				setUserSearchInput={setUserSearchInput}
			/>
		</div>
	)
}
