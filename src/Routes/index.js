import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screen/Home";
import Forms from "../screen/Forms";
import FormsTwo from "../screen/FormsTwo";
import Details from "../screen/Details";
import Commercial from "../screen/Commercial";
import Plots from "../screen/Plots";
import Login from "../screen/Login";
import SignUp from "../screen/SignUp";
import PrivateRoute from "../components/PrivateRoute";
import { connect } from "react-redux";
import Sell from "../screen/Sell";
import Rent from "../screen/Rent";
import DealerProperties from "../screen/DealerProperties";


const Routing = () => {
  let token = localStorage.getItem("token");
  

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        {/* <Route exact path="*" element={token ? <Home /> : <Login />} /> */}

        <Route
          path="/"
          element={
            // <PrivateRoute>
              <Home />
            // </PrivateRoute>
          }
        />
           <Route
          path="/details"
          element={
            // <PrivateRoute>
              <Details />
            // </PrivateRoute>
          }
        />
        <Route
          path="/form"
          element={
            <PrivateRoute>
              <Forms />
          </PrivateRoute>
          }
        />
        <Route
          path="/formsTwo"
          element={
            //  <PrivateRoute>
              <FormsTwo />
            //  </PrivateRoute>
          }
        />
        <Route
          path="/formsTwo/plot"
          element={
          //  <PrivateRoute>
              <Plots />
            //  </PrivateRoute>
          }
        />
           <Route
          path="property/sell"
          element={
          //  <PrivateRoute>
              <Sell />
            //  </PrivateRoute>
          }
        />   <Route
        path="/property/rent"
        element={
        //  <PrivateRoute>
            <Rent />
          //  </PrivateRoute>
        }
      />
        <Route
          path="/formsTwo/commercial"
          element={
            // <PrivateRoute>
              <Commercial />
            // </PrivateRoute>
          }
        />
             <Route
          path="/dealerProperties"
          element={
            // <PrivateRoute>
              <DealerProperties />
            // </PrivateRoute>
          }
        />
        {/* <Route path="*" element={  <PrivateRoute>    <Home />  </PrivateRoute>}/> */}
      </Routes>
    </BrowserRouter>
  );
};



export default Routing


