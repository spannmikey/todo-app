import { useState } from "react"
import { Todo } from "./model"

import SearchBar from "./components/SearchBar"
import TodoList from "./components/TodoList"

export default function App(): React.ReactNode {
	const [userSearchInput, setUserSearchInput] = useState<string>("")
	const [todoItems, setTodoItems] = useState<Todo[]>([])

	const handleAddButton = (e: React.FormEvent) => {
		// prevent default behavior
		e.preventDefault()

		// check if user adds an empty item
		if (userSearchInput === "") return

		// Setting user items to an array
		setTodoItems([
			...todoItems,
			{ id: Date.now(), todo: userSearchInput, isDone: false },
		])

		// clear input field after submit
		setUserSearchInput("")
	}
	console.log(todoItems)

	return (
		<div className="App">
			<h1 className="App__heading">Todo App</h1>
			<SearchBar
				userSearchInput={userSearchInput}
				setUserSearchInput={setUserSearchInput}
				handleAddButton={handleAddButton}
			/>
			<TodoList
				todoItems={todoItems}
				setTodoItems={setTodoItems}
			/>
		</div>
	)
}
