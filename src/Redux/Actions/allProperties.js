export const allProperties = (response) => {
	return {
		type: "ALL_PROPERTIES",
		payload: response,
	}
}

export const filterProperty = (response, onDone) => {
	return {
		type: "FILTER_PROPERTY",
		payload: [response, onDone],
	}
}

export const plotsData = (response) => {
	return {
		type: "PLOTS_DATA",
		payload: response,
	}
}

export const commercialData = (response) => {
	return {
		type: "COMMERCIAL_DATA",
		payload: response,
	}
}

export const propertyDetail = (response) => {
	return {
		type: "PROPERTY_DETAIL",
		payload: response,
	}
}


export const allPropertiesOfDealer = (response) => {
	return {
		type: "ALL_PROPERTIES_OF_DEALER",
		payload: response,
	}
}

export const addProperty = (data) => {
	return {
		type: "ADD_PROPERTY",
		payload: data,
	}
}

export const sellProperty = (data) => {
	return {
		type: "SELL_PROPERTY",
		payload:data
	}
}

export const rentProperty = (data) => {
	return {
		type: "RENT_PROPERTY",
		payload:data
	}
}

export const addImageUrl = (data) => {
	return {
		type: "ADD_IMAGE",
		payload:data
	}
}

