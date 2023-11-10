interface Props {
	userSearchInput: string
	setUserSearchInput: React.Dispatch<React.SetStateAction<string>>
	handleAddButton: (e: React.FormEvent) => void
}

export default function SearchBar({
	userSearchInput,
	setUserSearchInput,
	handleAddButton,
}: Props) {
	return (
		<form
			action="#"
			className="SearchBar__form"
			onSubmit={e => handleAddButton(e)}>
			<input
				className="SearchBar__input"
				type="text"
				value={userSearchInput}
				onChange={e => setUserSearchInput(e.target.value)}
				placeholder="Enter a todo item..."
			/>
			<button
				className="SearchBar__btn"
				type="submit">
				Add
			</button>
		</form>
	)
}
