import { Todo } from "../model"
import TodoItem from "./TodoItem"

interface Props {
	todoItems: Todo[]
	setTodoItems: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function TodoList({ todoItems, setTodoItems }: Props) {
	return (
		<div className="TodoList__container">
			{todoItems.map(todoItem => (
				<TodoItem key={todoItem.id} />
			))}
		</div>
	)
}
