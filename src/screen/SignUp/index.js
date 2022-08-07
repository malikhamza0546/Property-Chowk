import React from 'react'
import { useState, useEffect } from "react";
import Input from "../../components/FromInput/Input"
import { useForm } from "react-hook-form";
import { connect } from "react-redux"
import { login } from '../../Redux/Actions/auth';
import { signUpUser } from '../../Redux/Thunk/auth';
import { useNavigate, Link } from "react-router-dom"


const SignUp = ({login , signUpUser}) => {


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

	let navigate = useNavigate()

  const onSubmit = (data) => {
    signUpUser(data , navigate)
  };

 
  return (
      <div className="login-wrapper">
        <h1 className="login-title">Sign Up</h1>
        {/* <h3>Please SignUp to Continue</h3> */}
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Input
                          // label={"email"}
                          type="text"
                          placeholder={"name"}
                          name="name"
                          validation={{ required: true }}
                          error={errors.name}
                          register={register}
                          errorMessage={"Name is required"}
                        />
                          <Input
                          // label={"password"}
                          type="text"
                          placeholder={"email"}
                          name="email"
                          validation={{ required: true }}
                          error={errors.email}
                          register={register}
                          errorMessage={"Email Field is Empty"}
                        />

<Input
                          // label={"password"}
                          type="text"
                          placeholder={"password"}
                          name="password"
                          validation={{ required: true }}
                          error={errors.password}
                          register={register}
                          errorMessage={"Password Field is Empty"}
                        />
                         <Input
                          // label={"password"}
                          type="text"
                          placeholder={"realestate"}
                          name="realestate"
                          validation={{ required: true }}
                          error={errors.realestate}
                          register={register}
                          errorMessage={"Realestate Field is Empty"}
                        />
                           <Input
                          // label={"password"}
                          type="text"
                          placeholder={"phone"}
                          name="phone"
                          validation={{ required: true }}
                          error={errors.phone}
                          register={register}
                          errorMessage={"Phone Field is Empty"}
                        />
          <button className="login-button">
            Sign Up
          </button>
        </form>
      </div>
  );
};



const mapStateToProps = (state) => {
	return {
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		signUpUser: (data , navigate) => dispatch(signUpUser(data, navigate)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
