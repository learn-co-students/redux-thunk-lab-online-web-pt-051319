export function fetchCats() {
	return (dispatch) => {
		dispatch({ type: "LOADING_CATS" })
		fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
			.then(r => r.json())
			.then(rj => dispatch({ type: "ADD_CATS", cats: rj.images }))
	}
}