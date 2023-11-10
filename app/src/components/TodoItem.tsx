import { Todo } from "../model"
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai/"
interface Props {
	todoItem: Todo
	todoItems: Todo[]
	setTodoItems: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function TodoItem({ todoItem, todoItems, setTodoItems }: Props) {
	// Check off if done or not
	const handleCompletedTodos = (id: number) => {
		setTodoItems(
			todoItems.map(todoItem =>
				todoItem.id === id
					? { ...todoItem, isDone: !todoItem.isDone }
					: todoItem
			)
		)
	}

	// Delete an item
	const handleDelete = (id: number) => {
		setTodoItems(todoItems.filter(todoItem => todoItem.id !== id))
	}

	return (
		<form className="TodoItem__form">
			{todoItem.isDone ? (
				<s className="strikethrough">{todoItem.todo}</s>
			) : (
				<p className="TodoItem__todo">{todoItem.todo}</p>
			)}

			<div className="TodoItem__icons">
				<span className="TodoItem__icon">
					<AiFillEdit />
				</span>
				<span
					className="TodoItem__icon"
					onClick={() => handleDelete(todoItem.id)}>
					<AiFillDelete />
				</span>
				<span
					className="TodoItem__icon"
					onClick={() => handleCompletedTodos(todoItem.id)}>
					<AiOutlineCheck />
				</span>
			</div>
		</form>
	)
}
