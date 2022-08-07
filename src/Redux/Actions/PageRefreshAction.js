export const PageRefresherAction = (response) => {
	return {
		type: "Page_Refresher",
		payload: response,
	}
}
