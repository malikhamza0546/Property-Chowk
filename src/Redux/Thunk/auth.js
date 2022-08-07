import axios from "axios"
import { login, signUp, myProfile } from "../Actions/auth"
import Notification from "../../components/notification"

export const loginUser = (data) => {
	return (dispatch) => {
		console.log("property filter")

		dispatch({ type: "START_LOADER", payload: "Logging Up User..." })

		axios
			.post(`http://52.77.156.101:8000/api/v1/user/login`, data)
			.then((res) => {
				console.log(" login response....??>>>??>>", res)
				dispatch(login(res.data), localStorage.setItem("token", res.data.token))
				dispatch({ type: "STOP_LOADER" })
				Notification("success", "Login Successfull")
				window.location.reload()
			})
			.catch((error) => {
				console.log(" errorr response", error.message)
				dispatch(login("error"))
				dispatch({ type: "STOP_LOADER" })
				Notification("error", "Login Failed")
			})
	}
}

export const signUpUser = (data) => {
	console.log("data input signup", data)
	return (dispatch) => {
		console.log("property filter")
		dispatch({ type: "START_LOADER", payload: "Signing Up User..." })
		axios
			.post(`http://52.77.156.101:8000/api/v1/user/signup`, data)
			.then((res) => {
				console.log(res, " signup")
				dispatch(signUp(res.data))
				dispatch({ type: "STOP_LOADER" })
				Notification("success", "SignUp Successfull")
			})
			.catch((error) => {
				console.log("error", error)
				dispatch({ type: "STOP_LOADER" })
				Notification("error", "SignUp Failed")
			})
	}
}

export const myProfileData = () => {
	let token = localStorage.getItem("token")
	console.log("asd", token)

	return (dispatch) => {
		axios
			.get(`http://52.77.156.101:8000/api/v1/user/profile`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				console.log(" myProfile", res)
				dispatch(myProfile(res.data))
			})
			.catch((error) => {
				console.log("error", error)
			})
	}
}
