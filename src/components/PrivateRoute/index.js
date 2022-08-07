import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
// import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useNavigate ,
    Navigate
  } from "react-router-dom";


// function PrivateRoute( {token,children} ) {
//     let navigate = useNavigate();
//   return token ||localStorage.getItem("token") ? children : (navigate("/") );
// }

const PrivateRoute = ({children }) => {
    if (!localStorage.getItem("token")) {
      return <Navigate to="/" replace />;
    }
    return children;
  };


const mapStateToProps = (state) => {
	// let { token } = state.authReducer.user
	// console.log("login reducer from PRIVATAEEE", token)
	return {
    // token
	}
}

export default connect(mapStateToProps)(PrivateRoute)
