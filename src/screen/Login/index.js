import React from 'react'
import { useState, useEffect } from "react";
import Input from "../../components/FromInput/Input"
import { useForm } from "react-hook-form";
import { connect } from "react-redux"
import { login } from '../../Redux/Actions/auth';
import { loginUser } from '../../Redux/Thunk/auth';
import { useNavigate, Link } from "react-router-dom"
import { InputAdornment } from '@material-ui/core';

import Modal from '@material-ui/core/Modal';
// import Box from "@material/material/Box";
import Box from '@material-ui/core/Box';
import SignUp from '../SignUp';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: 24,
    p:4,
    borderRadius:30
    // padding: theme.spacing(2, 4, 3),
  },
}));


const Login = ({login , loginUser , user}) => {



  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    console.log("asdfaf")
    setOpenModal(false);
  };

  const body = (
    <Box style={modalStyle} className={classes.paper} >
    <SignUp/>
    </Box>
);




	let navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    // login(dispatch, { username, password });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setOpenModal(false);
    console.log("data", data)
    loginUser(data , navigate)
    console.log("asas" , openModal)

  };



  return (
    <>
      <div className="login-wrapper">
        <h1 className="login-title">LOGIN</h1>
        {/* <h3>Please Login to Continue</h3> */}
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Input
                          // label={"email"}
                          type="text"
                          placeholder={"Email"}
                          name="email"
                          validation={{ required: true }}
                          error={errors.email}
                          register={register}
                          errorMessage={"Email is required"}
                          {...register("email", 
                        { 
                            required: true,  
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                        })}
                        />
                          <Input
                          // label={"password"}
                          type="password"
                          placeholder={"password"}
                          name="password"
                          validation={{ required: true }}
                          error={errors.password}
                          register={register}
                          errorMessage={"Password Field is Empty"}
                        //   {...register("password", {
                        //     required: true,
                        //     pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        // })}
                        />
          <button className="login-button" onClick={()=>{handleCloseModal()}}>
            LOGIN
          </button>
          {user == "error" && <a className="login-error">Email or Password is Incorrect</a>}

          <a className="login-link">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className="login-link"  onClick={handleOpenModal}>CREATE A NEW ACCOUNT</a>
        </form>
        
      </div>
      <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
  {body}
    </Modal>
    </>

  );
};



const mapStateToProps = (state) => {
	let { user } = state.authReducer
	return {
    user
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (data , navigate) => dispatch(loginUser(data, navigate)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
