export default function SearchBar() {
	return (
		<form
			action="#"
			className="SearchBar__form">
			<input
				className="SearchBar__input"
				type="text"
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
