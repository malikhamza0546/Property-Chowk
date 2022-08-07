const INITIAL_STATE = {
	user: null,
}
export default function authReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				user: action.payload,
			}
                case 'MY_PROFILE':
                  return {
                    ...state,
                    myProfileData:action.payload
                  }

		default:
			return state
	}
}
