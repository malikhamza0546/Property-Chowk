import axios from "axios"

export const popularCity = (response) => {
	return {
		type: "POPULAR_CITY",
		payload: response,
	}
}

export const CarouselDataAction = (response) => {
	return {
		type: "Carousel_Data",
		payload: response,
	}
}
