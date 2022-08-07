import axios from "axios"
import { popularCity } from "../Actions/popularCity"
import { plotsData, commercialData } from "../Actions/allProperties"
import { CarouselDataAction } from "../Actions/popularCity"
import Notification from "../../components/notification"



export const popularCityStat = () => {
	return (dispatch) => {
		axios
			.get(`http://52.77.156.101:8000/api/v1/property/popular/city`)
			.then((res) => {

				dispatch(popularCity(res.data))
			})
			.catch((error) => {
				console.log("error")
			})
	}
}

export const plotsDataFetch = () => {
	return (dispatch) => {
		axios
			.get(`http://52.77.156.101:8000/api/v1/property/plot`)
			.then((res) => {
				dispatch(plotsData(res.data))
			})
			.catch((error) => {
				console.log("error" , error)
			})
	}
}

export const commercialDataFetch = () => {
	return (dispatch) => {
		axios
			.get(`http://52.77.156.101:8000/api/v1/property/home`)
			.then((res) => {
				dispatch(commercialData(res.data))
			})
			.catch((error) => {
				console.log("error" , error)
			})
	}
}

export const CarouselData = () => {
	return (dispatch) => {
		axios
			.get(`http://52.77.156.101:8000/api/v1/admin/titanium-expert`)
			.then((res) => {
				dispatch(CarouselDataAction(res.data))
				console.log("Get popular city from thunk CarouselData", res.data)
			})
			.catch((error) => {
				console.log("error")
			})
	}
}
