interface Props {
	userSearchInput: string
	setUserSearchInput: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBar({
	userSearchInput,
	setUserSearchInput,
}: Props) {
	console.log(userSearchInput)
	return (
		<form
			action="#"
			className="SearchBar__form">
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
