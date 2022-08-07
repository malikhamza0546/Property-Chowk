import { legacy_createStore as createStore, compose } from "redux"

import thunk from "redux-thunk"
// import logger from 'redux-logger';
import {
	persistStore,
	persistReducer,
	persistCombineReducers,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
// import rootReducer from '../reducers';
import RootReducers from "../Redux/Reducers"
import { applyMiddleware } from "redux"
import { createLogger } from "redux-logger"

const logger = createLogger()

const persistConfig = {
	key: "reducer-key",
	storage: storage,
	blacklist: ["loaderReducer", "homePageReducer"],
}
const pReducer = persistReducer(persistConfig, RootReducers)
const middleware = applyMiddleware(thunk, logger)
const store = createStore(pReducer, middleware)
const persistor = persistStore(store)
export { persistor, store }
