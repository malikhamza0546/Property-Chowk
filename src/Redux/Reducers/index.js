import { combineReducers } from "redux"
import popularCitiesReducers from "./homePageReducer"
import propertyReducer from "./propertyReducer"
import PageRefresherReducer from "./PageRefresh"
import authReducer from "./authReducer"
import loaderReducer from "./loaderReducer"



const RootReducers = combineReducers({
	popularCitiesReducers,
	propertyReducer,
	PageRefresherReducer,
	authReducer,
	loaderReducer,
})


export default RootReducers
