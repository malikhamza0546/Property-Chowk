import Home from "./screen/Home"
import Form from "./screen/Forms"
import "./App.css"
import Details from "./screen/Details"
import { Provider } from "react-redux"
import { applyMiddleware } from "redux"
import { legacy_createStore as createStore, compose } from "redux"
import ReduxThunk from "redux-thunk"
import RootReducers from "./Redux/Reducers"
import Routes from "../src/Routes"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {store , persistor} from './Redux/store';
import {PersistGate}  from 'redux-persist/integration/react';
import Loader from "./components/Loader"
import Notification from "./components/notification"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";



function App() {

	return (
		
		
		<Provider store={store}>
		<Loader/>
		<ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        toastClassName="toastCls"
        draggable
        pauseOnHover
      />
				<Notification/>
			<PersistGate persistor={persistor}>
			<div className="App">
				
				<Routes />
			</div>
			</PersistGate>
			
			
		</Provider>
		
	)
}

export default App
