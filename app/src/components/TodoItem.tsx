import React, { useState } from "react"
import { Todo } from "../model"
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai"
interface Props {
	todoItem: Todo
	todoItems: Todo[]
	setTodoItems: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function TodoItem({ todoItem, todoItems, setTodoItems }: Props) {
	const [edit, setEdit] = useState<boolean>(false)
	const [editTodo, setEditTodo] = useState<string>(todoItem.todo)

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

	// Handle edit changes
	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault()

		setTodoItems(prevTodoItems =>
			prevTodoItems.map(todoItem =>
				todoItem.id === id ? { ...todoItem, todo: editTodo } : todoItem
			)
		)

		setEdit(false)
	}

	return (
		<form
			className="TodoItem__form"
			onSubmit={e => handleEdit(e, todoItem.id)}>
			{edit ? (
				<input
					className="TodoItem__edit"
					type="text"
					value={editTodo}
					onChange={e => setEditTodo(e.target.value)}
				/>
			) : todoItem.isDone ? (
				<s className="strikethrough">{todoItem.todo}</s>
			) : (
				<p className="TodoItem__todo">{todoItem.todo}</p>
			)}

			<div className="TodoItem__icons">
				<span
					className="TodoItem__icon"
					onClick={() => {
						if (!edit && !todoItem.isDone) {
							setEdit(!edit)
						}
					}}>
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
