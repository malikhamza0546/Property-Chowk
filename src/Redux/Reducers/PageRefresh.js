const INITIAL_STATE = {
	PageRefresher: null,
}
export default function PageRefresherReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "Page_Refresher":
			// console.log("property reducer  property" , action.payload)
			return {
				...state,
				PageRefresher: action.payload,
			}

		default:
			return state
	}
}
