export const login = (data) => {
	return {
		type: "LOGIN",
		payload: data,
	}
}

export const signUp = (data) => {
	return {
		type: "SIGN_UP",
		payload: data,
	}
}



  export const myProfile = () => {
	return {
	  type: 'MY_PROFILE'
	}
  };